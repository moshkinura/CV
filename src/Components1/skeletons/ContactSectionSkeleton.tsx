import Box from './ui/Box';
import SectionShell from './ui/SectionShell';

const ContactSectionSkeleton = () => (
	<SectionShell>
		<div className='flex flex-wrap justify-center gap-3 sm:gap-4'>
			<Box className='h-10 w-40 rounded-full' />
			<Box className='h-10 w-44 rounded-full' />
			<Box className='h-10 w-36 rounded-full' />
		</div>
	</SectionShell>
);

export default ContactSectionSkeleton;
