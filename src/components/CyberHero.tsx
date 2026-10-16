import { MapPin } from 'lucide-react';
import { FC, useMemo } from 'react';

import Contacts from '@/widgets/Contacts/Contacts';

import { useTranslation } from '@/shared/i18n/useTranslation';
import { formatBirthday } from '@/shared/utils/formatBirthday.utils';
import { getDateFnsLocale } from '@/shared/utils/getDateFnsLocale.utils';

import CyberPortrait from '@/components/CyberPortrait';
import { useReplayClip } from '@/components/useReplayClip';
import { TBio } from '@/interfaces/bio.types';
import { TPersonals } from '@/interfaces/personals.types';
import { TSkills } from '@/interfaces/skills.types';

interface Props {
	salaryTitle: string;
	salaryText: string;
}

type DataRow = { key: string; name: string; value: string };

const TERMINAL_SKILLS = 12;

const CyberHero: FC<Props> = ({ salaryTitle, salaryText }) => {
	const { t, i18n } = useTranslation();
	const videoRef = useReplayClip();

	const bio = useMemo(() => t('bio', { returnObjects: true }) as TBio, [t]);
	const skills = useMemo(
		() => t('skills', { returnObjects: true }) as TSkills,
		[t],
	);
	const personals = useMemo(
		() => t('personals', { returnObjects: true }) as TPersonals,
		[t],
	);

	const stackLine = useMemo(() => {
		if (typeof skills !== 'object' || !skills?.categories) return '';
		const names = Object.values(skills.categories)
			.flatMap(category => category.data)
			.sort((a, b) => b.percent - a.percent)
			.slice(0, TERMINAL_SKILLS)
			.map(skill => skill.name);
		return Array.from(new Set(names)).join(', ');
	}, [skills]);

	const personalRows = useMemo<DataRow[]>(() => {
		if (typeof personals !== 'object' || !personals?.personal?.data) return [];
		const { nationality, education, birthday, gender, marital } =
			personals.personal.data;
		return [
			{ key: 'nationality', ...nationality },
			{ key: 'education', ...education },
			{
				key: 'birthday',
				name: birthday.name,
				value: formatBirthday(
					birthday.value,
					getDateFnsLocale(i18n.resolvedLanguage),
				),
			},
			{ key: 'gender', ...gender },
			{ key: 'marital', ...marital },
		];
	}, [personals, i18n.resolvedLanguage]);

	const personalTitle =
		typeof personals === 'object' && personals?.personal?.title
			? personals.personal.title
			: 'personal';

	return (
		<div className='cyber-hero'>
			<CyberPortrait
				videoRef={videoRef}
				label={`${t('hud.unit')} ${bio.fio}`}
				rec={t('hud.rec')}
				cam={t('hud.cam')}
			/>

			<div className='cyber-hero-info'>
				<p className='cyber-hero-label'>{t('hud.identity')}</p>
				<p className='cyber-hero-name' data-text={bio.fio}>
					{bio.fio}
				</p>
				<p className='cyber-hero-role'>{bio.position}</p>

				<div className='cyber-hero-geo' data-prefix={t('hud.geo')}>
					<MapPin className='h-4 w-4' aria-hidden='true' />
					<span>{bio.geo}</span>
				</div>

				<div className='cyber-terminal-box' role='group' aria-label='terminal'>
					<div className='cyber-terminal-head'>
						<span />
						<span />
						<span />
						<span className='cyber-terminal-title'>{t('hud.terminal')}</span>
					</div>
					<pre className='cyber-terminal-body'>
						<span className='cyber-terminal-prompt'>$ </span>
						{'cat /proc/skills\n'}
						<span className='cyber-terminal-out'>{stackLine}</span>
						{'\n'}
						<span className='cyber-terminal-prompt'>$ </span>
						{'echo $SALARY\n'}
						<span className='cyber-terminal-out'>
							{salaryTitle} {salaryText}
						</span>
						<span className='cyber-terminal-caret' aria-hidden='true' />
					</pre>
				</div>
			</div>

			<div className='cyber-hero-actions'>
				<p className='cyber-hero-label'>{t('hud.uplink')}</p>
				<Contacts variant='short' />
			</div>

			<div
				className='cyber-hero-personal'
				role='group'
				aria-label={personalTitle}
			>
				<p className='cyber-hero-label'>{t('hud.personal')}</p>
				<dl className='cyber-data-list'>
					{personalRows.map(row => (
						<div key={row.key} className='cyber-data-row'>
							<dt className='cyber-data-name'>{row.name}</dt>
							<dd className='cyber-data-value'>{row.value}</dd>
						</div>
					))}
				</dl>
			</div>
		</div>
	);
};

export default CyberHero;
