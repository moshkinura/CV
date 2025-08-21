import { FC, PropsWithChildren } from 'react';

import Box from './Box';

interface Props {
	titleWidth?: string;
	subWidth?: string;
	className?: string;
}

const SectionShell: FC<PropsWithChildren<Props>> = ({
	titleWidth = 'w-48',
	subWidth = 'w-72',
	children,
	className = '',
}) => (
	<section className={`py-20 ${className}`} aria-busy='true' role='status'>
		<div className='container mx-auto px-4'>
			<div className='mb-10 text-center'>
				<Box className={`mx-auto h-8 ${titleWidth}`} />
				<Box className={`mx-auto mt-4 h-4 ${subWidth}`} />
			</div>
			{children}
		</div>
	</section>
);

export default SectionShell;
