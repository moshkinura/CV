import Hero from '@/components/Hero';
import SkillsSection from '@/components/SkillsSection';
import ExperienceSection from '@/components/ExperienceSection';
import PersonalInfo from '@/components/PersonalInfo';
import ContactSection from '@/components/ContactSection';
import LanguageSwitcher from '@/components/LanguageSwitcher';

const Index = () => {
  return (
    <div className="min-h-screen">
      <LanguageSwitcher />
      <Hero />
      <SkillsSection />
      <ExperienceSection />
      <PersonalInfo />
      <ContactSection />
    </div>
  );
};

export default Index;
