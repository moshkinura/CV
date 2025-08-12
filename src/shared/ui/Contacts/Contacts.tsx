import {
	CheckCircle,
	Copy,
	ExternalLink,
	Github,
	Gitlab,
	Mail,
	Phone,
	Send,
} from 'lucide-react';
import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { TContacts } from '@/interfaces/contacts.types';

interface Contact {
	icon: React.ElementType;
	label: string;
	value: string;
	href: string;
	type: 'phone' | 'email' | 'social';
	copyable?: boolean;
}

interface Props {
	variant: 'short' | 'card' | 'cta';
}

const Contacts: FC<Props> = ({ variant = 'short' }) => {
	const { t } = useTranslation();
	const contacts = t('contacts', { returnObjects: true }) as TContacts;

	const [copied, setCopied] = useState(false);

	const contactItems: Contact[] = [
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
			icon: Send,
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
			icon: Gitlab,
			label: contacts.gitlab.name,
			value: `@${contacts.gitlab.value}`,
			href: `https://gitlab.com/${contacts.gitlab.value}`,
			type: 'social',
		},
	];

	if (variant === 'short') {
		return (
			<>
				{contactItems.map((contact, i) => {
					return (
						<Button
							key={i}
							variant='outline'
							size='lg'
							asChild
							className='transition-bounce hover:shadow-glow'
						>
							<a href={contact.href} className='flex items-center gap-2'>
								<contact.icon className='w-5 h-5' />
								{contact.label}
							</a>
						</Button>
					);
				})}
			</>
		);
	}

	if (variant === 'card') {
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
			<>
				{contactItems.map((contact, i) => {
					return (
						<Card
							key={i}
							className='glass-effect p-6 transition-all duration-500 hover:shadow-glow animate-slide-up group'
							style={{ animationDelay: `${i * 0.1}s` }}
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
												contact.type === 'social'
													? 'noopener noreferrer'
													: undefined
											}
										>
											<ExternalLink className='w-4 h-4' />
										</a>
									</Button>
								</div>
							</div>
						</Card>
					);
				})}
			</>
		);
	}

	if (variant === 'cta') {
		const targetEmail = new Set([contacts.email.name]);
		const targetTelegram = new Set([contacts.telegram.name]);
		const findEmail = contactItems.filter(({ label }) =>
			targetEmail.has(label),
		)[0];
		const findTelegram = contactItems.filter(({ label }) =>
			targetTelegram.has(label),
		)[0];

		return (
			<div className='flex flex-wrap justify-center gap-4'>
				<Button
					size='lg'
					asChild
					className='transition-bounce hover:shadow-glow'
				>
					<a
						href={findEmail.href}
						target={findEmail.type === 'social' ? '_blank' : undefined}
						rel={
							findEmail.type === 'social' ? 'noopener noreferrer' : undefined
						}
					>
						<findEmail.icon className='w-5 h-5 mr-2' />
						{contacts.sendEmail}
					</a>
				</Button>

				<Button
					variant='outline'
					size='lg'
					asChild
					className='transition-bounce hover:shadow-accent'
				>
					<a
						href={findTelegram.href}
						target={findTelegram.type === 'social' ? '_blank' : undefined}
						rel={
							findTelegram.type === 'social' ? 'noopener noreferrer' : undefined
						}
					>
						<findTelegram.icon className='w-5 h-5 mr-2' />
						{contacts.sendTelegram}
					</a>
				</Button>
			</div>
		);
	}

	return null;
};

export default Contacts;
