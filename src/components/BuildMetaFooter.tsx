import { FC } from 'react';

import {
	GIT_COMMIT_DATE,
	GIT_COMMIT_HASH,
	GIT_COMMIT_HASH_FULL,
	GIT_TAG,
} from '@/shared/config';
import { useTranslation } from '@/shared/i18n/useTranslation';

const BuildMetaFooter: FC = () => {
	const { t } = useTranslation();

	return (
		<footer className='mt-8 border-t'>
			<div className='container mx-auto px-4 py-4 text-xs text-muted-foreground'>
				<div className='flex flex-wrap items-center justify-center gap-x-4 gap-y-2 font-mono'>
					<span className='cyber-sys'>{t('hud.sysBuild')}</span>
					{GIT_TAG && (
						<span className='build-kv'>
							<span className='build-key'>tag:</span> {GIT_TAG}
						</span>
					)}
					{GIT_COMMIT_HASH && (
						<span
							className='build-kv'
							title={GIT_COMMIT_HASH_FULL || GIT_COMMIT_HASH}
						>
							<span className='build-key'>commit:</span> {GIT_COMMIT_HASH}
						</span>
					)}
					{GIT_COMMIT_DATE && (
						<span className='build-kv'>
							<span className='build-key'>date:</span> {GIT_COMMIT_DATE}
						</span>
					)}
				</div>
			</div>
		</footer>
	);
};

export default BuildMetaFooter;
