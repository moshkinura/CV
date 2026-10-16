import { FC, useEffect, useState } from 'react';

interface Props {
	text: string;
}

const TypingText: FC<Props> = ({ text }) => {
	const [sourceText, setSourceText] = useState(text);
	const [displayText, setDisplayText] = useState('');

	if (sourceText !== text) {
		setSourceText(text);
		setDisplayText('');
	}

	useEffect(() => {
		let currentIndex = 0;
		const interval = setInterval(() => {
			if (currentIndex <= text.length) {
				setDisplayText(text.slice(0, currentIndex));
				currentIndex++;
			} else {
				clearInterval(interval);
			}
		}, 100);

		return () => clearInterval(interval);
	}, [text]);

	return (
		<span className='inline-block border-r-2 border-primary animate-typing'>
			{displayText}
		</span>
	);
};

export default TypingText;
