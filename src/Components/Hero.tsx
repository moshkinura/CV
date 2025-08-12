import { MapPin } from 'lucide-react';
import { useTranslation } from 'react-i18next';

import Avatar from '@/shared/ui/Avatar/Avatar';
import Contacts from '@/shared/ui/Contacts/Contacts';
import TypingText from '@/shared/ui/TypingText/TypingText';

import { TBio } from '@/interfaces/bio.types';
import { TPay } from '@/interfaces/pay.types';

const Hero = () => {
	const { t } = useTranslation();

	const bio: TBio = t('bio', { returnObjects: true }) as TBio;
	const pay: TPay = t('pay', { returnObjects: true }) as TPay;

	return (
		<section className='relative min-h-screen flex items-center justify-center py-20 overflow-hidden'>
			<div className='absolute inset-0 gradient-hero opacity-30' />

			<div className='container mx-auto px-4 relative z-10'>
				<div className='max-w-4xl mx-auto text-center space-y-8'>
					{/* Profile Photo */}
					<Avatar />
					{/* Name and Title */}
					<div
						className='space-y-4 animate-slide-up'
						style={{ animationDelay: '0.2s' }}
					>
						<h1 className='text-5xl md:text-7xl font-bold text-gradient'>
							{bio.fio}
						</h1>
						<div className='text-xl md:text-2xl text-muted-foreground font-mono'>
							<TypingText text={bio.position} />
						</div>
					</div>

					{/* Location */}
					<div
						className='flex items-center justify-center gap-2 text-muted-foreground animate-fade-in'
						style={{ animationDelay: '0.4s' }}
					>
						<MapPin className='w-5 h-5' />
						<span>{bio.geo}</span>
					</div>

					{/* Salary Expectation */}
					<div
						className='glass-effect rounded-2xl p-6 max-w-md mx-auto animate-scale-in'
						style={{ animationDelay: '0.6s' }}
					>
						<h3 className='text-lg font-semibold mb-2'>{pay.name}</h3>
						<p className='text-2xl font-bold text-primary'>
							{pay.from} {pay.rub} / {pay.usd} / {pay.eur}
						</p>
						{/* <p className='text-sm text-muted-foreground mt-1'>
							{t('hero.salary.monthly')}
						</p> */}
					</div>

					{/* Quick Contact */}
					<div
						className='flex flex-wrap justify-center gap-4 animate-slide-up'
						style={{ animationDelay: '0.8s' }}
					>
						<Contacts variant='short' />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
