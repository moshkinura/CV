import { Suspense, lazy, memo } from 'react';

import Navbar from '@/widgets/Navbar/Navbar';

import CyberBackdrop from '@/shared/ui/cyber-backdrop';
import CyberSectionFx from '@/shared/ui/cyber-section-fx';

import BuildMetaFooter from '@/components/BuildMetaFooter';
import Hero from '@/components/Hero';
import ContactSectionSkeleton from '@/components/skeletons/ContactSectionSkeleton';
import ExperienceSectionSkeleton from '@/components/skeletons/ExperienceSectionSkeleton';
import PersonalInfoSkeleton from '@/components/skeletons/PersonalInfoSkeleton';
import PersonalProjectsSectionSkeleton from '@/components/skeletons/PersonalProjectsSectionSkeleton';
import SkillsSectionSkeleton from '@/components/skeletons/SkillsSectionSkeleton';

const SkillsSection = lazy(() => import('@/components/SkillsSection'));
const ExperienceSection = lazy(() => import('@/components/ExperienceSection'));
const PersonalProjectsSection = lazy(
	() => import('@/components/PersonalProjectsSection'),
);
const PersonalInfo = lazy(() => import('@/components/PersonalInfo'));
const ContactSection = lazy(() => import('@/components/ContactSection'));

const Index = () => {
	return (
		<div className='min-h-screen'>
			<CyberBackdrop />
			<CyberSectionFx />
			<div className='relative z-10'>
				<Navbar />

				<Hero />

				<Suspense fallback={<SkillsSectionSkeleton />}>
					<SkillsSection />
				</Suspense>

				<Suspense fallback={<ExperienceSectionSkeleton />}>
					<ExperienceSection />
				</Suspense>

				<Suspense fallback={<PersonalProjectsSectionSkeleton />}>
					<PersonalProjectsSection />
				</Suspense>

				<Suspense fallback={<PersonalInfoSkeleton />}>
					<PersonalInfo />
				</Suspense>

				<Suspense fallback={<ContactSectionSkeleton />}>
					<ContactSection />
				</Suspense>

				<BuildMetaFooter />
			</div>
		</div>
	);
};

export default memo(Index);
