import { Suspense, lazy, memo } from 'react';

import Hero from '@/components/Hero';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import ContactSectionSkeleton from '@/components/skeletons/ContactSectionSkeleton';
import ExperienceSectionSkeleton from '@/components/skeletons/ExperienceSectionSkeleton';
import PersonalInfoSkeleton from '@/components/skeletons/PersonalInfoSkeleton';
import SkillsSectionSkeleton from '@/components/skeletons/SkillsSectionSkeleton';

const SkillsSection = lazy(() => import('@/components/SkillsSection'));
const ExperienceSection = lazy(() => import('@/components/ExperienceSection'));
const PersonalInfo = lazy(() => import('@/components/PersonalInfo'));
const ContactSection = lazy(() => import('@/components/ContactSection'));

const Index = () => {
	return (
		<div className='min-h-screen'>
			<LanguageSwitcher />
			<Hero />

			<Suspense fallback={<SkillsSectionSkeleton />}>
				<SkillsSection />
			</Suspense>

			<Suspense fallback={<ExperienceSectionSkeleton />}>
				<ExperienceSection />
			</Suspense>

			<Suspense fallback={<PersonalInfoSkeleton />}>
				<PersonalInfo />
			</Suspense>

			<Suspense fallback={<ContactSectionSkeleton />}>
				<ContactSection />
			</Suspense>
		</div>
	);
};

export default memo(Index);
