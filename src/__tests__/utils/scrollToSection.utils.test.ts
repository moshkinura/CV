import { scrollToSection } from '@/shared/utils/scrollToSection.utils';

describe('scrollToSection', () => {
	const scrollTo = jest
		.spyOn(window, 'scrollTo')
		.mockImplementation(() => undefined);

	afterEach(() => {
		scrollTo.mockClear();
		document.body.replaceChildren();
	});

	afterAll(() => {
		scrollTo.mockRestore();
	});

	it('скроллит к секции с отступом высоты навбара', () => {
		const element = document.createElement('div');
		element.id = 'skills';
		Object.defineProperty(element, 'offsetTop', { value: 400 });
		document.body.appendChild(element);

		scrollToSection('skills');

		expect(scrollTo).toHaveBeenCalledWith({ top: 320, behavior: 'smooth' });
	});

	it('не скроллит, если секции нет', () => {
		scrollToSection('missing');

		expect(scrollTo).not.toHaveBeenCalled();
	});
});
