import { Menu, X } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';

import { useTranslation } from '@/shared/i18n/useTranslation';
import { Button } from '@/shared/ui/button';
import { scrollToSection } from '@/shared/utils/scrollToSection.utils';

import LanguageSwitcher from '@/components/LanguageSwitcher';
import ThemeSwitcher from '@/components/ThemeSwitcher';

const Navbar = () => {
	const { t } = useTranslation();
	const [isOpen, setIsOpen] = useState(false);
	const [activeSection, setActiveSection] = useState('home');

	const navItems = useMemo(() => {
		return [
			{ id: 'home', label: t('nav.home') },
			{ id: 'skills', label: t('nav.skills') },
			{ id: 'experience', label: t('nav.experience') },
			{ id: 'projects', label: t('nav.projects') },
			{ id: 'personal', label: t('nav.personal') },
			{ id: 'contacts', label: t('nav.contacts') },
		];
	}, [t]);

	useEffect(() => {
		const handleScroll = () => {
			const sections = navItems.map(item => item.id);
			const scrollPosition = window.scrollY + 100;

			for (const sectionId of sections) {
				const element = document.getElementById(sectionId);
				if (element) {
					const { offsetTop, offsetHeight } = element;
					if (
						scrollPosition >= offsetTop &&
						scrollPosition < offsetTop + offsetHeight
					) {
						setActiveSection(sectionId);
						break;
					}
				}
			}
		};

		window.addEventListener('scroll', handleScroll);
		handleScroll(); // Check initial position

		return () => window.removeEventListener('scroll', handleScroll);
	}, [navItems]);

	const handleNavClick = (sectionId: string) => {
		scrollToSection(sectionId);
		setIsOpen(false);
	};

	return (
		<nav className='fixed top-0 left-0 right-0 z-50 glass-effect border-b border-primary/10'>
			<div className='container mx-auto px-4'>
				<div className='flex items-center justify-between h-16'>
					{/* Logo/Brand */}
					<div className='nav-brand min-w-0 truncate font-bold text-xl text-gradient'>
						{t('nav.brand')}
					</div>

					{/* Desktop Navigation */}
					<div className='hidden md:flex items-center space-x-1'>
						{navItems.map(item => (
							<button
								key={item.id}
								type='button'
								data-active={activeSection === item.id}
								onClick={() => handleNavClick(item.id)}
								className={`nav-link px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
									activeSection === item.id
										? 'bg-primary/10 text-primary border border-primary/20'
										: 'text-muted-foreground hover:text-foreground hover:bg-secondary/50'
								}`}
							>
								{item.label}
							</button>
						))}
					</div>

					{/* Language Switcher & Mobile Menu Button */}
					<div className='flex shrink-0 items-center gap-2'>
						<ThemeSwitcher />
						<LanguageSwitcher />

						{/* Mobile Menu Button */}
						<Button
							variant='ghost'
							size='sm'
							onClick={() => setIsOpen(!isOpen)}
							className='md:hidden'
						>
							{isOpen ? (
								<X className='w-4 h-4' />
							) : (
								<Menu className='w-4 h-4' />
							)}
						</Button>
					</div>
				</div>

				{/* Mobile Navigation */}
				{isOpen && (
					<div className='md:hidden border-t border-primary/10 py-4 animate-fade-in'>
						<div className='flex flex-col space-y-2'>
							{navItems.map(item => (
								<button
									key={item.id}
									type='button'
									data-active={activeSection === item.id}
									onClick={() => handleNavClick(item.id)}
									className={`nav-link px-4 py-2 text-left rounded-lg text-sm font-medium transition-all duration-300 ${
										activeSection === item.id
											? 'bg-primary/10 text-primary border border-primary/20'
											: 'text-muted-foreground hover:text-foreground hover:bg-secondary/50'
									}`}
								>
									{item.label}
								</button>
							))}
						</div>
					</div>
				)}
			</div>
		</nav>
	);
};

export default Navbar;
