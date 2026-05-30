import { FC, memo } from 'react';

interface Props {
	text: string;
}

const ProtectedContactText: FC<Props> = ({ text }) => (
	<span className='inline break-all select-none'>
		{Array.from(text).map((char, index) => (
			<span key={`${char}-${index}`} aria-hidden='true'>
				{char}
			</span>
		))}
	</span>
);

export default memo(ProtectedContactText);
