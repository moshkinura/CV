import { FC } from 'react';

const BLUE = '#3ec8ff';
const RED = '#ff2d6f';

const lights: ReadonlyArray<{
	cx: number;
	cy: number;
	r: number;
	color: string;
	opacity: number;
}> = [
	{ cx: 160, cy: 520, r: 70, color: RED, opacity: 0.22 },
	{ cx: 280, cy: 640, r: 40, color: '#ffb347', opacity: 0.18 },
	{ cx: 1210, cy: 180, r: 56, color: BLUE, opacity: 0.2 },
	{ cx: 1320, cy: 560, r: 86, color: RED, opacity: 0.16 },
	{ cx: 1120, cy: 720, r: 44, color: BLUE, opacity: 0.16 },
	{ cx: 90, cy: 150, r: 48, color: BLUE, opacity: 0.14 },
];

const traces: ReadonlyArray<string> = [
	'M0 120 H110 V210 H190 V300',
	'M0 380 H70 V470 H150',
	'M0 760 H120 V660 H230 V600',
	'M1440 90 H1330 V190 H1250 V260',
	'M1440 430 H1360 V520 H1280',
	'M1440 820 H1300 V720 H1210 V670',
];

const CyberBackdrop: FC = () => {
	return (
		<div className='cyber-backdrop' aria-hidden='true'>
			<svg
				className='cyber-board'
				viewBox='0 0 1440 900'
				preserveAspectRatio='xMidYMid slice'
			>
				<defs>
					<filter id='bokeh' x='-100%' y='-100%' width='300%' height='300%'>
						<feGaussianBlur stdDeviation='22' />
					</filter>
					<filter id='edge-glow' x='-50%' y='-50%' width='200%' height='200%'>
						<feGaussianBlur stdDeviation='10' />
					</filter>
				</defs>

				{lights.map(light => (
					<circle
						key={`${light.cx}-${light.cy}`}
						cx={light.cx}
						cy={light.cy}
						r={light.r}
						fill={light.color}
						opacity={light.opacity}
						filter='url(#bokeh)'
					/>
				))}

				<g fill='none' strokeWidth='1.1' opacity='0.5'>
					{traces.map((d, index) => (
						<path key={d} d={d} stroke={index % 2 === 0 ? BLUE : RED} />
					))}
				</g>
				<g opacity='0.75'>
					<circle cx='190' cy='300' r='3' fill={BLUE} />
					<circle cx='150' cy='470' r='3' fill={RED} />
					<circle cx='230' cy='600' r='3' fill={BLUE} />
					<circle cx='1250' cy='260' r='3' fill={RED} />
					<circle cx='1280' cy='520' r='3' fill={BLUE} />
					<circle cx='1210' cy='670' r='3' fill={RED} />
				</g>

				<rect
					x='0'
					y='0'
					width='6'
					height='900'
					fill={RED}
					opacity='0.55'
					filter='url(#edge-glow)'
				/>
				<rect
					x='1434'
					y='0'
					width='6'
					height='900'
					fill={BLUE}
					opacity='0.55'
					filter='url(#edge-glow)'
				/>
			</svg>
		</div>
	);
};

export default CyberBackdrop;
