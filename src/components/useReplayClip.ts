import { useEffect, useRef } from 'react';

const CLIP_REPLAY_DELAY_MS = 3000;

export const useReplayClip = () => {
	const videoRef = useRef<HTMLVideoElement>(null);

	useEffect(() => {
		const video = videoRef.current;
		if (!video) return;
		const reduceMotion =
			typeof window.matchMedia === 'function' &&
			window.matchMedia('(prefers-reduced-motion: reduce)').matches;
		if (reduceMotion) return;
		if (typeof video.play !== 'function') return;

		let replayTimer = 0;

		const playFromStart = () => {
			video.currentTime = 0;
			void video.play()?.catch(() => undefined);
		};

		const onEnded = () => {
			replayTimer = window.setTimeout(playFromStart, CLIP_REPLAY_DELAY_MS);
		};

		video.addEventListener('ended', onEnded);
		void video.play()?.catch(() => undefined);

		return () => {
			window.clearTimeout(replayTimer);
			video.removeEventListener('ended', onEnded);
			video.pause();
		};
	}, []);

	return videoRef;
};
