import '@testing-library/jest-dom';
import { act, render } from '@testing-library/react';

import TypingText from '@/widgets/TypingText/TypingText';

describe('TypingText', () => {
	beforeEach(() => {
		jest.useFakeTimers();
	});
	afterEach(() => {
		jest.useRealTimers();
	});

	it('печатает по одному символу каждые 100мс', () => {
		const { container } = render(<TypingText text='ABC' />);
		const span = container.querySelector('span.animate-typing') as HTMLElement;

		// 0мс — пусто
		expect(span).toHaveTextContent('');

		// 100мс — всё ещё пусто (первый тик выставляет slice(0,0))
		act(() => {
			jest.advanceTimersByTime(100);
		});
		expect(span).toHaveTextContent('');

		// 200мс — 1 символ
		act(() => {
			jest.advanceTimersByTime(100);
		});
		expect(span).toHaveTextContent('A');

		// 300мс — 2 символа
		act(() => {
			jest.advanceTimersByTime(100);
		});
		expect(span).toHaveTextContent('AB');

		// 400мс — весь текст
		act(() => {
			jest.advanceTimersByTime(100);
		});
		expect(span).toHaveTextContent('ABC');
	});

	it('сбрасывает вывод при смене prop text и печатает новый', () => {
		const { container, rerender } = render(<TypingText text='Hi' />);
		const span = container.querySelector('span.animate-typing') as HTMLElement;

		// Полностью напечатаем "Hi" (длина 2 → полный вывод на 300мс)
		act(() => {
			jest.advanceTimersByTime(300);
		});
		expect(span).toHaveTextContent('Hi');

		// Меняем текст — должен сброситься до пустой строки
		rerender(<TypingText text='Yo' />);
		expect(span).toHaveTextContent('');

		// 200мс → появится первый символ "Y"
		act(() => {
			jest.advanceTimersByTime(200);
		});
		expect(span).toHaveTextContent('Y');

		// 300мс → "Yo" полностью
		act(() => {
			jest.advanceTimersByTime(100);
		});
		expect(span).toHaveTextContent('Yo');
	});

	it('имеет визуальный курсор (классы border-r-2 и animate-typing)', () => {
		const { container } = render(<TypingText text='A' />);
		const span = container.querySelector('span.animate-typing') as HTMLElement;
		expect(span).toHaveClass('border-r-2', 'animate-typing');
	});
});
