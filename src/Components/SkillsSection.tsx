import { FC, useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

import SkillCard from '@/widgets/SkillCard/SkillCard';

import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { TLearns } from '@/interfaces/learns.types';
import { TSkills } from '@/interfaces/skills.types';

const SkillsSection: FC = () => {
	const { t } = useTranslation();
	const [isVisible, setIsVisible] = useState(false);
	const sectionRef = useRef<HTMLElement>(null);

	const skills = t('skills', { returnObjects: true }) as TSkills;
	const learns = t('learns', { returnObjects: true }) as TLearns;

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setIsVisible(true);
				}
			},
			{ threshold: 0.3 },
		);

		if (sectionRef.current) {
			observer.observe(sectionRef.current);
		}

		return () => observer.disconnect();
	}, []);

	const skillCategories = Object.keys(skills.categories);

	return (
		<section
			ref={sectionRef}
			className='py-20 bg-linear-to-b from-background to-secondary/20'
		>
			<div className='container mx-auto px-4'>
				<div className='text-center mb-16'>
					<h2 className='text-4xl md:text-5xl font-bold text-gradient mb-4'>
						{skills.title}
					</h2>
					<p className='text-xl text-muted-foreground max-w-2xl mx-auto'>
						{skills.description}
					</p>
					<div className='mt-4 text-sm text-muted-foreground'>
						{skills.disclamer}
					</div>
				</div>

				<div className='grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto'>
					{skillCategories.map((category, categoryIndex) => (
						<SkillCard
							key={categoryIndex}
							index={categoryIndex}
							category={skills.categories[category]}
							isVisible={isVisible}
						/>
					))}
				</div>

				{/* Learning Goals */}
				<div className='mt-16'>
					<Card className='glass-effect p-8 max-w-4xl mx-auto text-center animate-fade-in'>
						<h3 className='text-2xl font-bold mb-6 text-gradient'>
							{learns.title}
						</h3>
						<div className='flex flex-wrap justify-center gap-3'>
							{learns.learn.map((tech, i) => (
								<Badge
									key={i}
									variant='outline'
									className='text-accent border-accent hover:bg-accent hover:text-accent-foreground transition-smooth'
								>
									{tech.name}
								</Badge>
							))}
						</div>
					</Card>
				</div>
			</div>
		</section>
	);
};

export default SkillsSection;
