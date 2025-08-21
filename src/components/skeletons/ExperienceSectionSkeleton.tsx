import { FC } from 'react';

import Box from './ui/Box';
import SectionShell from './ui/SectionShell';

const ExperienceSectionSkeleton: FC = () => (
	<SectionShell className='bg-gradient-to-b from-secondary/20 to-background'>
		<div className='mx-auto mb-12 max-w-4xl'>
			<div className='rounded-xl border-2 p-6'>
				<Box className='mx-auto h-5 w-56' />
				<Box className='mx-auto mt-3 h-8 w-40' />
				<Box className='mx-auto mt-2 h-4 w-64' />
			</div>
		</div>
		<div className='mx-auto max-w-4xl space-y-6'>
			{Array.from({ length: 3 }).map((_, i) => (
				<div key={i} className='rounded-xl border p-6'>
					<Box className='h-5 w-52' />
					<Box className='mt-2 h-4 w-40' />
					<Box className='mt-4 h-4 w-full' />
					<Box className='mt-2 h-4 w-11/12' />
					<Box className='mt-2 h-4 w-10/12' />
				</div>
			))}
		</div>
	</SectionShell>
);

export default ExperienceSectionSkeleton;
