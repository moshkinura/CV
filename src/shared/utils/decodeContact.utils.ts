export function decodeContact(encoded: string): string {
	if (!encoded) return '';

	try {
		return decodeURIComponent(
			Array.from(
				atob(encoded),
				char => `%${char.charCodeAt(0).toString(16).padStart(2, '0')}`,
			).join(''),
		);
	} catch {
		return '';
	}
}

export function openPhone(phone: string): void {
	if (phone) window.location.href = `tel:${phone}`;
}

export function openEmail(email: string): void {
	if (email) window.location.href = `mailto:${email}`;
}
