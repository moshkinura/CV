import { Github, Gitlab, Mail, MapPin, Phone, Send } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import profilePhoto from '@/assets/photo.jpg';
import { Button } from '@/components/ui/button';
import { TBio } from '@/interfaces/bio.types';
import { TContacts } from '@/interfaces/contacts.types';
import { TPay } from '@/interfaces/pay.types';

const Hero = () => {
	const { t } = useTranslation();
	const [displayText, setDisplayText] = useState('');
	const fullText = t('bio.position');

	useEffect(() => {
		setDisplayText(''); // Reset text when language changes
		let currentIndex = 0;
		const interval = setInterval(() => {
			if (currentIndex <= fullText.length) {
				setDisplayText(fullText.slice(0, currentIndex));
				currentIndex++;
			} else {
				clearInterval(interval);
			}
		}, 100);

		return () => clearInterval(interval);
	}, [fullText]);

	const bio: TBio = t('bio', { returnObjects: true }) as TBio;
	const pay: TPay = t('pay', { returnObjects: true }) as TPay;
	const contacts: TContacts = t('contacts', {
		returnObjects: true,
	}) as TContacts;

	return (
		<section className='relative min-h-screen flex items-center justify-center py-20 overflow-hidden'>
			{/* Background gradient overlay */}
			<div className='absolute inset-0 gradient-hero opacity-30' />

			<div className='container mx-auto px-4 relative z-10'>
				<div className='max-w-4xl mx-auto text-center space-y-8'>
					{/* Profile Photo */}
					<div className='relative inline-block animate-fade-in'>
						<div className='w-48 h-48 mx-auto rounded-full overflow-hidden shadow-glow transition-bounce hover:scale-105'>
							<img
								src={profilePhoto}
								alt={bio.fio}
								className='w-full h-full object-cover'
							/>
						</div>
						<div className='absolute -bottom-2 -right-2 w-6 h-6 bg-success rounded-full border-4 border-background animate-pulse-glow' />
					</div>

					{/* Name and Title */}
					<div
						className='space-y-4 animate-slide-up'
						style={{ animationDelay: '0.2s' }}
					>
						<h1 className='text-5xl md:text-7xl font-bold text-gradient'>
							{bio.fio}
						</h1>
						<div className='text-xl md:text-2xl text-muted-foreground font-mono'>
							<span className='inline-block border-r-2 border-primary animate-typing'>
								{displayText}
							</span>
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
						<Button
							variant='outline'
							size='lg'
							asChild
							className='transition-bounce hover:shadow-glow'
						>
							<a
								href={`tel:${contacts.phone.value}`}
								className='flex items-center gap-2'
							>
								<Phone className='w-5 h-5' />
								{contacts.phone.name}
							</a>
						</Button>
						<Button
							variant='outline'
							size='lg'
							asChild
							className='transition-bounce hover:shadow-accent'
						>
							<a
								href={`mailto:${contacts.email.value}`}
								className='flex items-center gap-2'
							>
								<Mail className='w-5 h-5' />
								{contacts.email.name}
							</a>
						</Button>
						<Button
							variant='outline'
							size='lg'
							asChild
							className='transition-bounce hover:shadow-accent'
						>
							<a
								href={`https://t.me/${contacts.telegram.value}`}
								target='_blank'
								rel='noopener noreferrer'
								className='flex items-center gap-2'
							>
								<Send className='w-5 h-5' />
								{contacts.telegram.value}
							</a>
						</Button>
						<Button
							variant='outline'
							size='lg'
							asChild
							className='transition-bounce hover:shadow-glow'
						>
							<a
								href={`https://github.com/${contacts.github.value}`}
								target='_blank'
								rel='noopener noreferrer'
								className='flex items-center gap-2'
							>
								<Github className='w-5 h-5' />
								{contacts.github.name}
							</a>
						</Button>
						<Button
							variant='outline'
							size='lg'
							asChild
							className='transition-bounce hover:shadow-glow'
						>
							<a
								href={`https://gitlab.com/${contacts.gitlab.value}`}
								target='_blank'
								rel='noopener noreferrer'
								className='flex items-center gap-2'
							>
								<Gitlab className='w-5 h-5' />
								{contacts.gitlab.name}
							</a>
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
