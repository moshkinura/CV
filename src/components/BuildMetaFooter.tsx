import { FC } from 'react';

import {
	GIT_COMMIT_DATE,
	GIT_COMMIT_HASH,
	GIT_COMMIT_HASH_FULL,
	GIT_TAG,
} from '@/shared/config';

const BuildMetaFooter: FC = () => {
	return (
		<footer className='mt-8 border-t'>
			<div className='container mx-auto px-4 py-4 text-xs text-muted-foreground'>
				<div className='flex flex-wrap items-center justify-center gap-x-4 gap-y-2 font-mono'>
					{GIT_TAG && <span>tag: {GIT_TAG}</span>}
					{GIT_COMMIT_HASH && (
						<span title={GIT_COMMIT_HASH_FULL || GIT_COMMIT_HASH}>
							commit: {GIT_COMMIT_HASH}
						</span>
					)}
					{GIT_COMMIT_DATE && <span>date: {GIT_COMMIT_DATE}</span>}
				</div>
			</div>
		</footer>
	);
};

export default BuildMetaFooter;
