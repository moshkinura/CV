import { FC } from 'react';

import Box from './ui/Box';
import SectionShell from './ui/SectionShell';

const PersonalInfoSkeleton: FC = () => (
	<SectionShell>
		<div className='mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2'>
			<div className='rounded-xl border p-6'>
				<Box className='h-5 w-40' />
				<Box className='mt-3 h-4 w-full' />
				<Box className='mt-2 h-4 w-10/12' />
				<Box className='mt-2 h-4 w-9/12' />
			</div>
			<div className='rounded-xl border p-6'>
				<Box className='h-5 w-44' />
				<Box className='mt-3 h-4 w-full' />
				<Box className='mt-2 h-4 w-10/12' />
				<Box className='mt-2 h-4 w-9/12' />
			</div>
		</div>
	</SectionShell>
);
export default PersonalInfoSkeleton;
