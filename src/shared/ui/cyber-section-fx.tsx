import { FC, useEffect, useState } from 'react';

import { useCyberThemeEnabled } from '@/shared/theme/CyberThemeProvider';

interface Warp {
	key: number;
	label: string;
}

const REVEAL = 'cyber-reveal';

const CyberSectionFx: FC = () => {
	const enabled = useCyberThemeEnabled();
	const [warp, setWarp] = useState<Warp | null>(null);

	useEffect(() => {
		if (!enabled) return;
		if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

		let current = '';
		const watched = new Set<HTMLElement>();

		const play = (section: HTMLElement) => {
			if (section.id === current) return;
			current = section.id;
			section.classList.remove(REVEAL);
			void section.offsetWidth;
			section.classList.add(REVEAL);
		};

		const observer = new IntersectionObserver(
			entries => {
				const hit = entries.find(entry => entry.isIntersecting);
				if (hit) play(hit.target as HTMLElement);
			},
			{ rootMargin: '-38% 0px -42% 0px', threshold: 0 },
		);

		const watch = () => {
			document.querySelectorAll('section[id]').forEach(node => {
				const section = node as HTMLElement;
				if (watched.has(section)) return;
				watched.add(section);
				observer.observe(section);
			});
		};
		watch();

		const mutations = new MutationObserver(watch);
		mutations.observe(document.body, { childList: true, subtree: true });

		const onClick = (event: MouseEvent) => {
			const button = (event.target as HTMLElement).closest('button.nav-link');
			if (!button) return;
			setWarp({ key: Date.now(), label: button.textContent?.trim() ?? '' });
		};
		document.addEventListener('click', onClick);

		return () => {
			mutations.disconnect();
			observer.disconnect();
			document.removeEventListener('click', onClick);
			watched.forEach(section => section.classList.remove(REVEAL));
		};
	}, [enabled]);

	if (!warp) return null;

	return (
		<div
			key={warp.key}
			className='cyber-warp'
			aria-hidden='true'
			onAnimationEnd={event => {
				if (event.animationName === 'cyber-warp-fade') setWarp(null);
			}}
		>
			<span className='cyber-warp-label'>{warp.label}</span>
		</div>
	);
};

export default CyberSectionFx;
