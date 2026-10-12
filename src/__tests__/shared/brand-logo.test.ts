import { resolveBrand } from '@/shared/ui/brand-logo';

describe('resolveBrand', () => {
	it('определяет сервис по имени и адресу', () => {
		expect(
			resolveBrand('npm', 'https://www.npmjs.com/package/@itcamel/text-kit'),
		).toBe('npm');
		expect(resolveBrand('GitHub', 'https://github.com/moshkinura')).toBe(
			'github',
		);
		expect(resolveBrand('GitLab', 'https://gitlab.com/moshkinura')).toBe(
			'gitlab',
		);
		expect(resolveBrand('Telegram', 'https://t.me/bikeauto')).toBe('telegram');
		expect(resolveBrand('Сайт', 'https://example.com')).toBeNull();
	});
});
