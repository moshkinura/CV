import { Suspense, lazy, memo } from 'react';

import Navbar from '@/widgets/Navbar/Navbar';

import {
	GIT_COMMIT_DATE,
	GIT_COMMIT_HASH,
	GIT_COMMIT_HASH_FULL,
	GIT_TAG,
} from '@/shared/config';

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
			<Navbar />

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

			{/* Build meta */}
			<footer className='mt-8 border-t'>
				<div className='container mx-auto px-4 py-4 text-xs text-muted-foreground'>
					<div className='flex flex-wrap items-center justify-center gap-x-4 gap-y-2 font-mono'>
						{GIT_TAG && <span>tag: {GIT_TAG}</span>}
						{GIT_COMMIT_HASH && (
							<span title={GIT_COMMIT_HASH_FULL || GIT_COMMIT_HASH}>
								commit: {GIT_COMMIT_HASH}
							</span>
						)}
						{GIT_COMMIT_DATE && <span>date: {GIT_COMMIT_DATE}</span>}
					</div>
				</div>
			</footer>
		</div>
	);
};

export default memo(Index);
