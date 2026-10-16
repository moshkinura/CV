import {
	type ReactNode,
	createContext,
	useCallback,
	useContext,
	useLayoutEffect,
	useMemo,
	useState,
} from 'react';

export const VISUAL_THEME_STORAGE_KEY = 'cv-visual-theme';
export const CYBER_DISCLAIMER_STORAGE_KEY = 'cv-cyber-disclaimer';

type VisualTheme = 'default' | 'cyber';

type CyberThemeContextValue = {
	theme: VisualTheme;
	enabled: boolean;
	toggle: () => void;
	chooseTheme: (theme: VisualTheme) => void;
};

const CyberThemeContext = createContext<CyberThemeContextValue | null>(null);

const themeColor = (theme: VisualTheme) => {
	switch (theme) {
		case 'default':
			return '#ffffff';
		case 'cyber':
			return '#05080c';
		default: {
			const unexpected: never = theme;
			return unexpected;
		}
	}
};

export const isCyberDisclaimerSeen = () => {
	try {
		return localStorage.getItem(CYBER_DISCLAIMER_STORAGE_KEY) === '1';
	} catch {
		return true;
	}
};

const acknowledgeDisclaimer = () => {
	try {
		localStorage.setItem(CYBER_DISCLAIMER_STORAGE_KEY, '1');
	} catch {
		/* приватный режим может запретить storage */
	}
};

const readTheme = (): VisualTheme => {
	try {
		const stored = localStorage.getItem(VISUAL_THEME_STORAGE_KEY);
		if (!isCyberDisclaimerSeen()) return 'cyber';
		return stored === 'default' ? 'default' : 'cyber';
	} catch {
		return 'cyber';
	}
};

const applyTheme = (theme: VisualTheme) => {
	document.documentElement.classList.toggle('cyber', theme === 'cyber');
	document
		.querySelector('meta[name="theme-color"]')
		?.setAttribute('content', themeColor(theme));
	try {
		localStorage.setItem(VISUAL_THEME_STORAGE_KEY, theme);
	} catch {
		/* приватный режим может запретить storage */
	}
};

const CyberThemeProvider = ({ children }: { children: ReactNode }) => {
	const [theme, setTheme] = useState<VisualTheme>(readTheme);

	useLayoutEffect(() => {
		applyTheme(theme);
	}, [theme]);

	const chooseTheme = useCallback((next: VisualTheme) => {
		acknowledgeDisclaimer();
		setTheme(next);
	}, []);

	const toggle = useCallback(() => {
		acknowledgeDisclaimer();
		setTheme(current => (current === 'cyber' ? 'default' : 'cyber'));
	}, []);

	const value = useMemo(
		() => ({
			theme,
			enabled: theme === 'cyber',
			toggle,
			chooseTheme,
		}),
		[theme, toggle, chooseTheme],
	);

	return (
		<CyberThemeContext.Provider value={value}>
			{children}
		</CyberThemeContext.Provider>
	);
};

export const useCyberTheme = () => {
	const context = useContext(CyberThemeContext);
	if (!context) {
		throw new Error('useCyberTheme must be used within CyberThemeProvider');
	}
	return context;
};

/** Безопасный вариант для компонентов, которые могут рендериться вне провайдера (тесты). */
export const useCyberThemeEnabled = () =>
	useContext(CyberThemeContext)?.enabled ?? false;

export default CyberThemeProvider;
