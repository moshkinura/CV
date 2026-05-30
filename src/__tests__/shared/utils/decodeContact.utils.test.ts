import { decodeContact } from '@/shared/utils/decodeContact.utils';

describe('decodeContact.utils', () => {
	it('декодирует base64 контакт', () => {
		expect(decodeContact(btoa('dev@example.com'))).toBe('dev@example.com');
	});

	it('возвращает пустую строку для некорректных данных', () => {
		expect(decodeContact('not-base64!!!')).toBe('');
		expect(decodeContact('')).toBe('');
	});
});
