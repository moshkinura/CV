import { Users } from 'lucide-react';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

interface Props {
	responsibilityText: string;
	responsibilities: string[];
}

const Responsibilities: FC<Props> = ({
	responsibilityText,
	responsibilities,
}) => {
	const { t } = useTranslation();

	return (
		<div className='mb-4'>
			<div className='exp-sub-head flex items-center gap-2 mb-3'>
				<Users className='w-4 h-4 text-primary' />
				<h6
					className='exp-sub cyber-relabel font-medium text-sm'
					data-cyber={t('hud.taskResponsibilities')}
				>
					{responsibilityText}
				</h6>
			</div>
			<ul className='exp-list space-y-2'>
				{responsibilities.map((r, idx) => (
					<li key={idx} className='flex items-start gap-3'>
						<div className='w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0' />
						<span className='text-muted-foreground text-sm leading-relaxed'>
							{r}
						</span>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Responsibilities;
