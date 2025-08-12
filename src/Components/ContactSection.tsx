import {
	CheckCircle,
	Copy,
	ExternalLink,
	GitlabIcon as GitLab,
	Github,
	Mail,
	MessageCircle,
	Phone,
} from 'lucide-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface Contact {
	icon: React.ElementType;
	label: string;
	value: string;
	href: string;
	type: 'phone' | 'email' | 'social';
	copyable?: boolean;
}

const ContactCard = ({
	contact,
	index,
	t,
}: {
	contact: Contact;
	index: number;
	t: (key: string) => string;
}) => {
	const [copied, setCopied] = useState(false);

	const handleCopy = async (text: string) => {
		try {
			await navigator.clipboard.writeText(text);
			setCopied(true);
			// toast({
			// 	title: t('contacts.copied'),
			// 	description: `${text} has been copied to your clipboard.`,
			// });
			setTimeout(() => setCopied(false), 2000);
		} catch (err) {
			// toast({
			// 	title: 'Copy failed',
			// 	description: 'Failed to copy to clipboard.',
			// 	variant: 'destructive',
			// });
		}
	};

	const getContactColor = (type: string) => {
		switch (type) {
			case 'phone':
				return 'text-success';
			case 'email':
				return 'text-primary';
			case 'social':
				return 'text-accent';
			default:
				return 'text-muted-foreground';
		}
	};

	return (
		<Card
			className='glass-effect p-6 transition-all duration-500 hover:shadow-glow animate-slide-up group'
			style={{ animationDelay: `${index * 0.1}s` }}
		>
			<div className='flex items-center justify-between'>
				<div className='flex items-center gap-4'>
					<div
						className={`p-3 rounded-full bg-secondary/50 ${getContactColor(contact.type)} group-hover:scale-110 transition-transform duration-300`}
					>
						<contact.icon className='w-6 h-6' />
					</div>
					<div>
						<h3 className='font-semibold text-lg'>{contact.label}</h3>
						<p className='text-muted-foreground'>{contact.value}</p>
					</div>
				</div>

				<div className='flex items-center gap-2'>
					{contact.copyable && (
						<Button
							variant='ghost'
							size='sm'
							onClick={() => handleCopy(contact.value)}
							className='transition-bounce hover:shadow-accent'
						>
							{copied ? (
								<CheckCircle className='w-4 h-4 text-success' />
							) : (
								<>
									<Copy className='w-4 h-4 mr-1' />
									{t('contacts.copy')}
								</>
							)}
						</Button>
					)}
					<Button
						variant='ghost'
						size='sm'
						asChild
						className='transition-bounce hover:shadow-glow'
					>
						<a
							href={contact.href}
							target={contact.type === 'social' ? '_blank' : undefined}
							rel={
								contact.type === 'social' ? 'noopener noreferrer' : undefined
							}
						>
							<ExternalLink className='w-4 h-4' />
						</a>
					</Button>
				</div>
			</div>
		</Card>
	);
};

const ContactSection = () => {
	const { t } = useTranslation();
	//eslint-disable-next-line
	const contacts = t('contacts', { returnObjects: true }) as any;
	//eslint-disable-next-line
	const cta = t('cta', { returnObjects: true }) as any;

	const contactsItems: Contact[] = [
		{
			icon: Phone,
			label: contacts.phone.name,
			value: contacts.phone.value,
			href: `tel:${contacts.phone.value}`,
			type: 'phone',
			copyable: true,
		},
		{
			icon: Mail,
			label: contacts.email.name,
			value: contacts.email.value,
			href: `mailto:${contacts.email.value}`,
			type: 'email',
			copyable: true,
		},
		{
			icon: MessageCircle,
			label: contacts.telegram.name,
			value: `@${contacts.telegram.value}`,
			href: `https://t.me/${contacts.telegram.value}`,
			type: 'social',
		},
		{
			icon: Github,
			label: contacts.github.name,
			value: `@${contacts.github.value}`,
			href: `https://github.com/${contacts.github.value}`,
			type: 'social',
		},
		{
			icon: GitLab,
			label: contacts.gitlab.name,
			value: `@${contacts.gitlab.value}`,
			href: `https://gitlab.com/${contacts.gitlab.value}`,
			type: 'social',
		},
	];
	return (
		<section className='py-20 bg-linear-to-b from-secondary/20 to-background'>
			<div className='container mx-auto px-4'>
				<div className='text-center mb-16'>
					<h2 className='text-4xl md:text-5xl font-bold text-gradient mb-4'>
						{t('contacts.title')}
					</h2>
					<p className='text-xl text-muted-foreground max-w-2xl mx-auto'>
						{t('contacts.subtitle')}
					</p>
				</div>

				<div className='max-w-4xl mx-auto space-y-6'>
					{contactsItems.map((contact, index) => (
						<ContactCard
							key={contact.label}
							contact={contact}
							index={index}
							t={t}
						/>
					))}
				</div>

				{/* Quick Contact CTA */}
				<div className='mt-16 text-center'>
					<Card className='glass-effect p-8 max-w-2xl mx-auto animate-fade-in'>
						<h3 className='text-2xl font-bold mb-4 text-gradient'>
							{cta.title}
						</h3>
						<p className='text-muted-foreground mb-6'>{cta.subtitle}</p>
						<div className='flex flex-wrap justify-center gap-4'>
							<Button
								size='lg'
								asChild
								className='transition-bounce hover:shadow-glow'
							>
								<a href={`mailto:${contacts.email.value}`}>
									<Mail className='w-5 h-5 mr-2' />
									{cta.sendEmail}
								</a>
							</Button>
							<Button
								variant='outline'
								size='lg'
								asChild
								className='transition-bounce hover:shadow-accent'
							>
								<a
									href={`https://t.me/${contacts.telegram.value}`}
									target='_blank'
									rel='noopener noreferrer'
								>
									<MessageCircle className='w-5 h-5 mr-2' />
									{cta.sendTelegram}
								</a>
							</Button>
						</div>
					</Card>
				</div>
			</div>
		</section>
	);
};

export default ContactSection;
