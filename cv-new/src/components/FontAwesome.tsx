// import the library
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import {
	FontAwesomeIcon,
	FontAwesomeIconProps,
} from '@fortawesome/react-fontawesome';

library.add(fas, far, fab);

export const FontAwesome = (props: FontAwesomeIconProps) => {
	return <FontAwesomeIcon {...props} />;
};
