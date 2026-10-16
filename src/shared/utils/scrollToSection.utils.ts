const NAVBAR_OFFSET = 80;

export const scrollToSection = (sectionId: string, offset = NAVBAR_OFFSET) => {
	const element = document.getElementById(sectionId);
	if (!element) return;

	window.scrollTo({
		top: element.offsetTop - offset,
		behavior: 'smooth',
	});
};
