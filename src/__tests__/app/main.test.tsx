import '@testing-library/jest-dom';

jest.mock('@/app/App', () => ({ __esModule: true, App: () => null }));
jest.mock('@/app/modules/i18n', () => ({}));
jest.mock('@/app/styles/index.css', () => ({}));

const renderMock = jest.fn();
jest.mock('react-dom/client', () => {
	const createRoot = jest.fn(() => ({ render: renderMock }));
	return { __esModule: true, default: { createRoot }, createRoot };
});

beforeEach(() => {
	document.body.innerHTML = '<div id="root"></div>';
	jest.resetModules();
	renderMock.mockClear();
});

it('монтирует App в #root без падений', async () => {
	const { createRoot } = await import('react-dom/client');
	await import('@/app/main');

	expect(createRoot).toHaveBeenCalledTimes(1);
	const rootEl = (createRoot as jest.Mock).mock.calls[0][0] as HTMLElement;
	expect(rootEl).toBeInstanceOf(HTMLElement);
	expect(rootEl.id).toBe('root');

	expect(renderMock).toHaveBeenCalledTimes(1);
});
