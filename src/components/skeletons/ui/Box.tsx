import { FC } from 'react';

interface Props {
	className?: string;
}

const Box: FC<Props> = ({ className = '' }) => (
	<div
		className={`animate-pulse rounded-md bg-muted ${className}`}
		aria-hidden='true'
	/>
);

export default Box;
