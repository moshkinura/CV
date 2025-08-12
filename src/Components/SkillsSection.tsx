import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { TSkill } from '@/interfaces/skills.types';

interface Skill {
	name: string;
	level: number;
}

// const skills: Skill[] = [
// 	{ name: 'Node.JS', level: 85, category: 'Backend' },
// 	{ name: 'Express.JS', level: 95, category: 'Backend' },
// 	{ name: 'Nest.JS', level: 90, category: 'Backend' },
// 	{ name: 'TypeScript', level: 85, category: 'Languages' },
// 	{ name: 'PostgreSQL', level: 90, category: 'Database' },
// 	{ name: 'TypeORM', level: 85, category: 'Database' },
// 	{ name: 'MySQL', level: 65, category: 'Database' },
// 	{ name: 'MongoDB', level: 50, category: 'Database' },
// 	{ name: 'Docker / Compose', level: 60, category: 'DevOps' },
// 	{ name: 'GIT', level: 90, category: 'Tools' },
// 	{ name: 'GitLab CI/CD', level: 35, category: 'DevOps' },
// 	{ name: 'React.JS', level: 45, category: 'Frontend' },
// 	{ name: 'HTML5 / CSS3', level: 60, category: 'Frontend' },
// 	{ name: 'Bootstrap >= 5.0', level: 50, category: 'Frontend' },
// 	{ name: 'Electron.JS', level: 30, category: 'Desktop' },
// 	{ name: 'React Native/Expo', level: 15, category: 'Mobile' },
// 	{ name: 'Jest.js', level: 20, category: 'Testing' },
// 	{ name: 'PC ownership', level: 95, category: 'General' },
// 	{ name: 'Bash / Console', level: 40, category: 'Tools' },
// ];

const SkillBar = ({
	skill,
	isVisible,
}: {
	skill: TSkill;
	isVisible: boolean;
}) => {
	const [animatedLevel, setAnimatedLevel] = useState(0);

	useEffect(() => {
		if (isVisible) {
			const timer = setTimeout(() => {
				setAnimatedLevel(skill.percent);
			}, 200);
			return () => clearTimeout(timer);
		}
	}, [isVisible, skill.percent]);

	const getColorClass = (percent: number) => {
		if (percent >= 80) return 'bg-success';
		if (percent >= 60) return 'bg-primary';
		if (percent >= 40) return 'bg-warning';
		return 'bg-destructive';
	};

	return (
		<div className='space-y-2'>
			<div className='flex justify-between items-center'>
				<span className='text-sm font-medium'>{skill.name}</span>
				<span className='text-sm text-muted-foreground'>{skill.percent}%</span>
			</div>
			<div className='h-2 bg-secondary rounded-full overflow-hidden'>
				<div
					className={`h-full ${getColorClass(skill.percent)} transition-all duration-1000 ease-out`}
					style={{ width: `${animatedLevel}%` }}
				/>
			</div>
		</div>
	);
};

const SkillsSection = () => {
	const { t } = useTranslation();
	const [isVisible, setIsVisible] = useState(false);
	const sectionRef = useRef<HTMLElement>(null);

	//eslint-disable-next-line
	const skills = t('skills', { returnObjects: true }) as any;

	//eslint-disable-next-line
	const learns = t('learns', { returnObjects: true }) as any;

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
						{skills.name}
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
						<Card
							key={category}
							className='glass-effect p-6 transition-all duration-500 hover:shadow-glow animate-slide-up'
							style={{ animationDelay: `${categoryIndex * 0.1}s` }}
						>
							<div className='flex items-center gap-3 mb-6'>
								<Badge
									variant='secondary'
									className='text-primary font-semibold'
								>
									{skills.categories[category].name}
								</Badge>
							</div>

							<div className='space-y-4'>
								{skills.categories[category].data.map((skill, index) => (
									<SkillBar key={index} skill={skill} isVisible={isVisible} />
								))}
							</div>
						</Card>
					))}
				</div>

				{/* Learning Goals */}
				<div className='mt-16'>
					<Card className='glass-effect p-8 max-w-4xl mx-auto text-center animate-fade-in'>
						<h3 className='text-2xl font-bold mb-6 text-gradient'>
							{learns.name}
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
