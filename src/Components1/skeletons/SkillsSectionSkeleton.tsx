import { FC } from 'react';

import Box from './ui/Box';
import SectionShell from './ui/SectionShell';

const SkillsSectionSkeleton: FC = () => (
	<SectionShell>
		<div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3'>
			{Array.from({ length: 6 }).map((_, i) => (
				<div key={i} className='rounded-xl border p-6'>
					<Box className='h-5 w-40' />
					<Box className='mt-4 h-4 w-full' />
					<Box className='mt-2 h-4 w-5/6' />
					<Box className='mt-2 h-4 w-2/3' />
				</div>
			))}
		</div>
	</SectionShell>
);

export default SkillsSectionSkeleton;
