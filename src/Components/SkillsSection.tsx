import {
	FC,
	memo,
	useCallback,
	useEffect,
	useId,
	useMemo,
	useRef,
	useState,
} from 'react';
import { useTranslation } from 'react-i18next';

import SkillCard from '@/widgets/SkillCard/SkillCard';

import { Badge } from '@/shared/ui/badge';
import { Card } from '@/shared/ui/card';

import { TLearns } from '@/interfaces/learns.types';
import { TSkills } from '@/interfaces/skills.types';

const SkillsSection: FC = () => {
	const { t } = useTranslation();
	const [isVisible, setIsVisible] = useState(false);
	const sectionRef = useRef<HTMLElement>(null);
	const titleId = useId();

	const skills = useMemo(
		() => t('skills', { returnObjects: true }) as TSkills,
		[t],
	);
	const learns = useMemo(
		() => t('learns', { returnObjects: true }) as TLearns,
		[t],
	);

	const skillCategories = useMemo(
		() => Object.keys(skills.categories),
		[skills.categories],
	);

	useEffect(() => {
		const reduce =
			typeof window !== 'undefined' &&
			window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
		if (reduce) {
			setIsVisible(true);
			return;
		}

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) setIsVisible(true);
			},
			{ threshold: 0.3, rootMargin: '0px 0px -20% 0px' },
		);

		const node = sectionRef.current;
		if (node) observer.observe(node);

		return () => {
			observer.disconnect();
		};
	}, []);

	const renderSkill = useCallback(
		(category: string, index: number) => (
			<SkillCard
				key={index}
				index={index}
				category={skills.categories[category]}
				isVisible={isVisible}
			/>
		),
		[isVisible, skills.categories],
	);

	return (
		<section
			id='skills'
			ref={sectionRef}
			aria-labelledby={titleId}
			className='py-16 md:py-20 bg-linear-to-b from-background to-secondary/20'
		>
			<div className='container mx-auto px-4'>
				<div className='text-center mb-12 md:mb-16'>
					<h2
						id={titleId}
						className='text-3xl md:text-5xl font-bold text-gradient mb-4'
					>
						{skills.title}
					</h2>
					<p className='text-base md:text-xl text-muted-foreground max-w-2xl mx-auto'>
						{skills.description}
					</p>
					<div className='mt-4 text-xs md:text-sm text-muted-foreground'>
						{skills.disclamer}
					</div>
				</div>

				<div className='grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto'>
					{skillCategories.map(renderSkill)}
				</div>

				{/* Learning Goals */}
				<div className='mt-12 md:mt-16'>
					<Card className='glass-effect p-6 md:p-8 max-w-4xl mx-auto text-center motion-safe:animate-fade-in motion-reduce:animate-none'>
						<h3 className='text-xl md:text-2xl font-bold mb-6 text-gradient'>
							{learns.title}
						</h3>
						<div className='flex flex-wrap justify-center gap-2 md:gap-3'>
							{learns.learn.map((tech, i) => (
								<Badge
									key={i}
									variant='outline'
									className='text-accent border-accent hover:bg-accent hover:text-accent-foreground transition-smooth'
								>
									{tech.name}
								</Badge>
							))}
						</div>
					</Card>
				</div>
			</div>
		</section>
	);
};

export default memo(SkillsSection);
