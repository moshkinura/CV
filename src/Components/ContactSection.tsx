import { memo, useId, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import Contacts from '@/widgets/Contacts/Contacts';

import { Card } from '@/shared/ui/card';

import { TContacts } from '@/interfaces/contacts.types';
import { TCta } from '@/interfaces/cta.types';

const ContactSection = () => {
	const { t } = useTranslation();
	const titleId = useId();

	const contacts = useMemo(
		() => t('contacts', { returnObjects: true }) as TContacts,
		[t],
	);
	const cta = useMemo(() => t('cta', { returnObjects: true }) as TCta, [t]);

	return (
		<section
			id='contacts'
			aria-labelledby={titleId}
			className='py-16 md:py-20 bg-linear-to-b from-secondary/20 to-background'
		>
			<div className='container mx-auto px-4'>
				<div className='text-center mb-12 md:mb-16'>
					<h2
						id={titleId}
						className='text-3xl md:text-5xl font-bold text-gradient mb-4'
					>
						{contacts.title}
					</h2>
					<p className='text-base md:text-xl text-muted-foreground max-w-2xl mx-auto'>
						{contacts.subtitle}
					</p>
				</div>

				<div className='max-w-4xl mx-auto space-y-6'>
					<Contacts variant='card' />
				</div>

				{/* Quick Contact CTA */}
				<div className='mt-12 md:mt-16 text-center'>
					<Card className='glass-effect p-6 md:p-8 max-w-2xl mx-auto motion-safe:animate-fade-in motion-reduce:animate-none'>
						<h3 className='text-xl md:text-2xl font-bold mb-4 text-gradient'>
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

export default memo(ContactSection);
