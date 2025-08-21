import { FC } from 'react';

import profilePhoto from '@/shared/assets/photo.jpg';

const Avatar: FC = () => {
	return (
		<div className='relative inline-block animate-fade-in'>
			<div className='w-48 h-48 mx-auto rounded-full overflow-hidden shadow-glow transition-bounce hover:scale-105'>
				<img
					src={profilePhoto}
					alt='Photo'
					className='w-full h-full object-cover'
				/>
			</div>
			<div className='absolute -bottom-2 -right-2 w-6 h-6 bg-success rounded-full border-4 border-background animate-pulse-glow' />
		</div>
	);
};
export default Avatar;
