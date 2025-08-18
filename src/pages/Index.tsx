import { Suspense, lazy, memo } from 'react';

import Hero from '@/components/Hero';
import LanguageSwitcher from '@/components/LanguageSwitcher';

const SkillsSection = lazy(() => import('@/components/SkillsSection'));
const ExperienceSection = lazy(() => import('@/components/ExperienceSection'));
const PersonalInfo = lazy(() => import('@/components/PersonalInfo'));
const ContactSection = lazy(() => import('@/components/ContactSection'));

const Index = () => {
	return (
		<div className='min-h-screen'>
			<LanguageSwitcher />
			<Hero />
			<Suspense fallback={<div aria-hidden='true' className='h-0' />}>
				<SkillsSection />
				<ExperienceSection />
				<PersonalInfo />
				<ContactSection />
			</Suspense>
		</div>
	);
};

export default memo(Index);
