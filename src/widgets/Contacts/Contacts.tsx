import { CheckCircle, Copy, ExternalLink, Mail, Phone } from 'lucide-react';
import {
	FC,
	memo,
	useCallback,
	useEffect,
	useMemo,
	useRef,
	useState,
} from 'react';
import { useTranslation } from 'react-i18next';

import { useCyberThemeEnabled } from '@/shared/theme/CyberThemeProvider';
import {
	GithubLogo,
	GitlabLogo,
	NpmLogo,
	TelegramLogo,
} from '@/shared/ui/brand-logo';
import { Button } from '@/shared/ui/button';
import { Card } from '@/shared/ui/card';
import {
	decodeContact,
	openEmail,
	openPhone,
} from '@/shared/utils/decodeContact.utils';

import ProtectedContactText from './ProtectedContactText';
import { TContacts } from '@/interfaces/contacts.types';

interface Contact {
	icon: React.ElementType;
	label: string;
	value: string;
	type: 'phone' | 'email' | 'social';
	copyable?: boolean;
	protected?: boolean;
	href?: string;
}

interface Props {
	variant: 'short' | 'card' | 'cta';
}

const Contacts: FC<Props> = ({ variant = 'short' }) => {
	const { t } = useTranslation();
	const contacts = t('contacts', { returnObjects: true }) as TContacts;
	const cyberEnabled = useCyberThemeEnabled();

	const [copiedKey, setCopiedKey] = useState<string | null>(null);
	const copiedTimer = useRef<number | null>(null);

	const phoneValue = useMemo(
		() => decodeContact(contacts?.phone?.encoded ?? ''),
		[contacts?.phone?.encoded],
	);
	const emailValue = useMemo(
		() => decodeContact(contacts?.email?.encoded ?? ''),
		[contacts?.email?.encoded],
	);

	const contactItems: Contact[] = useMemo(() => {
		const items: (Contact | null)[] = [
			phoneValue
				? {
						icon: Phone,
						label: contacts?.phone?.name ?? 'Phone',
						value: phoneValue,
						type: 'phone',
						copyable: true,
						protected: true,
					}
				: null,
			emailValue
				? {
						icon: Mail,
						label: contacts?.email?.name ?? 'Email',
						value: emailValue,
						type: 'email',
						copyable: true,
						protected: true,
					}
				: null,
			contacts?.telegram?.value
				? {
						icon: TelegramLogo,
						label: contacts?.telegram?.name ?? 'Telegram',
						value: `@${contacts?.telegram?.value}`,
						href: `https://t.me/${contacts?.telegram?.value}`,
						type: 'social',
					}
				: null,
			contacts?.github?.value
				? {
						icon: GithubLogo,
						label: contacts?.github?.name ?? 'GitHub',
						value: `@${contacts?.github?.value}`,
						href: `https://github.com/${contacts?.github?.value}`,
						type: 'social',
					}
				: null,
			contacts?.gitlab?.value
				? {
						icon: GitlabLogo,
						label: contacts?.gitlab?.name ?? 'GitLab',
						value: `@${contacts?.gitlab?.value}`,
						href: `https://gitlab.com/${contacts?.gitlab?.value}`,
						type: 'social',
					}
				: null,
			contacts?.npm?.value
				? {
						icon: NpmLogo,
						label: contacts?.npm?.name ?? 'npm',
						value: `~${contacts?.npm?.value}`,
						href: `https://www.npmjs.com/~${contacts?.npm?.value}`,
						type: 'social',
					}
				: null,
		];

		return items.filter((x): x is Contact => Boolean(x));
	}, [contacts, emailValue, phoneValue]);

	useEffect(
		() => () => {
			if (copiedTimer.current !== null) {
				window.clearTimeout(copiedTimer.current);
			}
		},
		[],
	);

	const handleCopy = useCallback(async (text: string) => {
		try {
			if (navigator.clipboard?.writeText) {
				await navigator.clipboard.writeText(text);
			} else {
				const ta = document.createElement('textarea');
				ta.value = text;
				ta.setAttribute('readonly', '');
				ta.style.position = 'fixed';
				ta.style.opacity = '0';
				document.body.appendChild(ta);
				ta.select();
				document.execCommand('copy');
				document.body.removeChild(ta);
			}
			setCopiedKey(text);
			if (copiedTimer.current !== null) {
				window.clearTimeout(copiedTimer.current);
			}
			copiedTimer.current = window.setTimeout(() => {
				setCopiedKey(null);
				copiedTimer.current = null;
			}, 1600);
		} catch {
			// no-op
		}
	}, []);

	const handleOpen = useCallback((contact: Contact) => {
		if (contact.type === 'phone') {
			openPhone(contact.value);
			return;
		}

		if (contact.type === 'email') {
			openEmail(contact.value);
		}
	}, []);

	const getContactColor = useCallback((type: Contact['type']) => {
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
	}, []);

	const getContactKey = useCallback(
		(contact: Contact) => contact.href ?? `${contact.type}-${contact.label}`,
		[],
	);

	if (variant === 'short') {
		return (
			<div className='flex w-full flex-wrap justify-center gap-2'>
				{contactItems.map(contact => {
					const Icon = contact.icon;

					if (contact.protected) {
						return (
							<Button
								key={getContactKey(contact)}
								variant='outline'
								size='lg'
								type='button'
								onClick={() => handleOpen(contact)}
								className='w-full sm:w-auto transition-bounce hover:shadow-glow'
								aria-label={contact.label}
							>
								<Icon className='h-5 w-5 shrink-0' aria-hidden='true' />
								<span className='truncate'>{contact.label}</span>
							</Button>
						);
					}

					return (
						<Button
							key={getContactKey(contact)}
							variant='outline'
							size='lg'
							asChild
							className='w-full sm:w-auto transition-bounce hover:shadow-glow'
						>
							<a
								href={contact.href}
								className='flex min-w-0 items-center justify-center gap-2'
								aria-label={contact.label}
								target='_blank'
								rel='noopener noreferrer'
							>
								<Icon className='h-5 w-5 shrink-0' aria-hidden='true' />
								<span className='truncate'>{contact.label}</span>
							</a>
						</Button>
					);
				})}
				<span className='sr-only' aria-live='polite'>
					{copiedKey ? 'Copied' : ''}
				</span>
			</div>
		);
	}

	if (variant === 'card' && cyberEnabled) {
		return (
			<div
				className='cyber-terminal-box cyber-contacts w-full'
				role='group'
				aria-label='contacts'
			>
				<div className='cyber-terminal-head'>
					<span />
					<span />
					<span />
					<span className='cyber-terminal-title'>
						{t('hud.contactsTerminal')}
					</span>
				</div>
				<ul className='cyber-contacts-list'>
					{contactItems.map(contact => {
						const Icon = contact.icon;
						const copied = copiedKey === contact.value;

						return (
							<li key={getContactKey(contact)} className='cyber-contacts-row'>
								<span className='cyber-contacts-prompt' aria-hidden='true'>
									{'> '}
								</span>
								<Icon className='cyber-contacts-icon' aria-hidden='true' />
								<span className='cyber-contacts-label'>{contact.label}</span>
								<span className='cyber-contacts-value'>
									{contact.protected ? (
										<ProtectedContactText text={contact.value} />
									) : (
										contact.value
									)}
								</span>
								<span className='cyber-contacts-actions'>
									{contact.copyable && (
										<button
											type='button'
											onClick={() => handleCopy(contact.value)}
											aria-label={`Copy ${contact.label}`}
											className='cyber-contacts-btn'
										>
											{copied ? (
												<CheckCircle
													className='h-3.5 w-3.5'
													aria-hidden='true'
												/>
											) : (
												<Copy className='h-3.5 w-3.5' aria-hidden='true' />
											)}
											<span>{copied ? t('hud.copied') : t('hud.copy')}</span>
										</button>
									)}
									{contact.protected ? (
										<button
											type='button'
											onClick={() => handleOpen(contact)}
											aria-label={`Open ${contact.label}`}
											className='cyber-contacts-btn'
										>
											<ExternalLink
												className='h-3.5 w-3.5'
												aria-hidden='true'
											/>
											<span>{t('hud.open')}</span>
										</button>
									) : (
										<a
											href={contact.href}
											target='_blank'
											rel='noopener noreferrer'
											aria-label={`Open ${contact.label}`}
											className='cyber-contacts-btn'
										>
											<ExternalLink
												className='h-3.5 w-3.5'
												aria-hidden='true'
											/>
											<span>{t('hud.open')}</span>
										</a>
									)}
								</span>
							</li>
						);
					})}
				</ul>
				<span className='sr-only' aria-live='polite'>
					{copiedKey ? 'Copied' : ''}
				</span>
			</div>
		);
	}

	if (variant === 'card') {
		return (
			<div className='grid w-full grid-cols-1 gap-3 sm:grid-cols-2'>
				{contactItems.map((contact, i) => {
					const Icon = contact.icon;
					const color = getContactColor(contact.type);

					return (
						<Card
							key={getContactKey(contact)}
							className='glass-effect hud-panel contact-card group p-5 transition-all duration-500 hover:shadow-glow animate-slide-up motion-reduce:transition-none motion-reduce:animate-none'
							style={{ animationDelay: `${i * 0.08}s` }}
							data-testid='card'
						>
							<div className='flex items-center justify-between gap-3'>
								<div className='flex min-w-0 items-center gap-4'>
									<div
										className={`contact-icon rounded-full bg-secondary/50 p-3 ${color} group-hover:scale-110 transition-transform duration-300 motion-reduce:transition-none`}
									>
										<Icon className='h-6 w-6' aria-hidden='true' />
									</div>
									<div className='min-w-0'>
										<h3
											className='contact-label text-lg font-semibold leading-tight text-balance'
											data-prefix={t('hud.channel')}
										>
											{contact.label}
										</h3>
										<p className='contact-value text-sm text-muted-foreground break-all'>
											{contact.protected ? (
												<ProtectedContactText text={contact.value} />
											) : (
												contact.value
											)}
										</p>
									</div>
								</div>

								<div className='contact-actions flex items-center gap-1 sm:gap-2'>
									{contact.copyable && (
										<Button
											variant='ghost'
											size='sm'
											onClick={() => handleCopy(contact.value)}
											className='h-10 px-3 transition-bounce hover:shadow-accent'
											aria-label={`Copy ${contact.label}`}
										>
											{copiedKey === contact.value ? (
												<CheckCircle
													className='h-4 w-4 text-success'
													aria-hidden='true'
												/>
											) : (
												<>
													<Copy className='mr-1 h-4 w-4' aria-hidden='true' />
													<span className='hidden lg:inline'>
														{contacts?.copy ?? 'Copy'}
													</span>
												</>
											)}
										</Button>
									)}
									{contact.protected ? (
										<Button
											variant='ghost'
											size='sm'
											type='button'
											onClick={() => handleOpen(contact)}
											className='h-10 px-3 transition-bounce hover:shadow-glow'
											aria-label={`Open ${contact.label}`}
										>
											<ExternalLink className='h-4 w-4' aria-hidden='true' />
										</Button>
									) : (
										<Button
											variant='ghost'
											size='sm'
											asChild
											className='h-10 px-3 transition-bounce hover:shadow-glow'
										>
											<a
												href={contact.href}
												target='_blank'
												rel='noopener noreferrer'
												aria-label={`Open ${contact.label}`}
											>
												<ExternalLink className='h-4 w-4' aria-hidden='true' />
											</a>
										</Button>
									)}
								</div>
							</div>
						</Card>
					);
				})}
				<span className='sr-only' aria-live='polite'>
					{copiedKey ? 'Copied' : ''}
				</span>
			</div>
		);
	}

	if (variant === 'cta') {
		const findEmail = contactItems.find(
			c => c.label === contacts?.email?.name,
		)!;
		const findTelegram = contactItems.find(
			c => c.label === contacts?.telegram?.name,
		)!;

		const EmailIcon = findEmail.icon;
		const TelegramIcon = findTelegram.icon;

		return (
			<div className='flex flex-wrap justify-center gap-3 sm:gap-4'>
				<Button
					size='lg'
					type='button'
					onClick={() => handleOpen(findEmail)}
					className='w-full sm:w-auto transition-bounce hover:shadow-glow'
					aria-label={contacts?.sendEmail}
				>
					<EmailIcon className='mr-2 h-5 w-5' aria-hidden='true' />
					{contacts?.sendEmail}
				</Button>

				<Button
					variant='outline'
					size='lg'
					asChild
					className='w-full sm:w-auto transition-bounce hover:shadow-accent'
				>
					<a
						href={findTelegram.href}
						target='_blank'
						rel='noopener noreferrer'
						aria-label={contacts?.sendTelegram}
						className='flex items-center justify-center'
					>
						<TelegramIcon className='mr-2 h-5 w-5' aria-hidden='true' />
						{contacts?.sendTelegram}
					</a>
				</Button>

				<span className='sr-only' aria-live='polite'>
					{copiedKey ? 'Copied' : ''}
				</span>
			</div>
		);
	}

	return null;
};

export default memo(Contacts);
