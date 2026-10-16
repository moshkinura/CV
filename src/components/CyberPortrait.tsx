import { FC, RefObject } from 'react';

import cyberClip from '@/shared/assets/cyber.webm';

interface Props {
	cam: string;
	label: string;
	rec: string;
	videoRef: RefObject<HTMLVideoElement | null>;
}

const CyberPortrait: FC<Props> = ({ cam, label, rec, videoRef }) => {
	return (
		<div className='cyber-hero-portrait'>
			<video
				ref={videoRef}
				className='cyber-portrait-shot'
				src={cyberClip}
				muted
				playsInline
				preload='auto'
				aria-hidden='true'
			/>
			<div className='cyber-hud-frame' aria-hidden='true'>
				<span className='cyber-hud-corner cyber-hud-tl' />
				<span className='cyber-hud-corner cyber-hud-tr' />
				<span className='cyber-hud-corner cyber-hud-bl' />
				<span className='cyber-hud-corner cyber-hud-br' />
				<span className='cyber-hud-scan' />
				<span className='cyber-hud-status'>
					<span className='cyber-hud-rec' />
					{rec}
				</span>
				<span className='cyber-hud-meta'>{cam}</span>
			</div>
			<span className='cyber-hero-portrait-tag' aria-hidden='true'>
				{label}
			</span>
		</div>
	);
};

export default CyberPortrait;
