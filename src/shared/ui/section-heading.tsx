import { FC } from 'react';

import { useTranslation } from '@/shared/i18n/useTranslation';
import { cn } from '@/shared/utils/cn.utils';

interface Props {
	id?: string;
	index: string;
	title: string;
	className?: string;
}

const SectionHeading: FC<Props> = ({ id, index, title, className }) => {
	const { t } = useTranslation();

	return (
		<>
			<span
				className='cyber-kicker'
				data-index={index}
				data-prefix={t('hud.sector')}
				aria-hidden='true'
			/>
			<h2
				id={id}
				data-text={title}
				className={cn(
					'cyber-heading mb-4 text-3xl font-bold text-gradient md:text-5xl',
					className,
				)}
			>
				{title}
			</h2>
		</>
	);
};

export default SectionHeading;
