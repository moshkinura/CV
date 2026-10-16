import { FC } from 'react';

import Box from './ui/Box';
import SectionShell from './ui/SectionShell';

const PersonalProjectsSectionSkeleton: FC = () => (
	<SectionShell className='bg-linear-to-b from-secondary/20 to-background'>
		<div className='mx-auto max-w-4xl space-y-6'>
			{Array.from({ length: 2 }).map((_, i) => (
				<div key={i} className='rounded-xl border p-6'>
					<Box className='h-6 w-48' />
					<Box className='mt-4 h-4 w-full' />
					<Box className='mt-2 h-4 w-10/12' />
					<Box className='mt-4 h-6 w-64' />
				</div>
			))}
		</div>
	</SectionShell>
);

export default PersonalProjectsSectionSkeleton;
