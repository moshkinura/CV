import { useTranslation } from 'react-i18next';

import Contacts from '@/widgets/Contacts/Contacts';

import { Card } from '@/shared/ui/card';

const ContactSection = () => {
	const { t } = useTranslation();

	//eslint-disable-next-line
	const contacts = t('contacts', { returnObjects: true }) as any;
	//eslint-disable-next-line
	const cta = t('cta', { returnObjects: true }) as any;

	return (
		<section className='py-20 bg-linear-to-b from-secondary/20 to-background'>
			<div className='container mx-auto px-4'>
				<div className='text-center mb-16'>
					<h2 className='text-4xl md:text-5xl font-bold text-gradient mb-4'>
						{contacts.title}
					</h2>
					<p className='text-xl text-muted-foreground max-w-2xl mx-auto'>
						{contacts.subtitle}
					</p>
				</div>

				<div className='max-w-4xl mx-auto space-y-6'>
					<Contacts variant='card' />
				</div>

				{/* Quick Contact CTA */}
				<div className='mt-16 text-center'>
					<Card className='glass-effect p-8 max-w-2xl mx-auto animate-fade-in'>
						<h3 className='text-2xl font-bold mb-4 text-gradient'>
							{cta.title}
						</h3>
						<p className='text-muted-foreground mb-6'>{cta.subtitle}</p>
						<Contacts variant='cta' />
					</Card>
				</div>
			</div>
		</section>
	);
};

export default ContactSection;
