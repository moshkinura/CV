import { useTranslation } from 'react-i18next';

import { TContacts } from '@/interfaces/contacts.types';

export const Contacts = () => {
	const { t } = useTranslation();

	const contacts: TContacts = t('contacts', {
		returnObjects: true,
	}) as TContacts;

	return (
		<>
			<div className='text-center details'>
				<div className='details_label'>{contacts.name}</div>
				<p className='details_line'>
					<a href={'tel:' + contacts.tel}>{contacts.tel}</a>
				</p>
				<p className='details_line'>
					<a href={'mailto:' + contacts.email}>{contacts.email}</a>
				</p>
				<p className='details_line'>
					VK:&nbsp;
					<a
						href={'https://vk.com/' + contacts.vk}
						target='_blank'
						rel='noopener noreferrer'
					>
						{'@' + contacts.vk}
					</a>
				</p>
				<p className='details_line'>
					Telegram:&nbsp;
					<a
						href={'https://t.me/' + contacts.tg}
						target='_blank'
						rel='noopener noreferrer'
					>
						{'@' + contacts.tg}
					</a>
				</p>
				<p className='details_line'>
					GitHub:&nbsp;
					<a
						href={'https://github.com/' + contacts.github}
						target='_blank'
						rel='noopener noreferrer'
					>
						{'@' + contacts.github}
					</a>
				</p>
				<p className='details_line'>
					GitLab:&nbsp;
					<a
						href={'https://gitlab.com/' + contacts.gitlab}
						target='_blank'
						rel='noopener noreferrer'
					>
						{'@' + contacts.gitlab}
					</a>
				</p>
			</div>
		</>
	);
};
