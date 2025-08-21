import { useQuery } from '@tanstack/react-query';

export type TConversionRates = Record<string, number>;

export interface TExchangerateApiResponse {
	result: 'success' | 'error';
	base_code: string;
	time_last_update_unix: number;
	time_next_update_unix: number;
	conversion_rates: TConversionRates;
}

const API_URL =
	'https://v6.exchangerate-api.com/v6/0c5283f1630afea7002267d7/latest';

export function useFxRates(base: string = 'RUB') {
	return useQuery<TExchangerateApiResponse>({
		queryKey: ['fx-rates', base],
		queryFn: async () => {
			const res = await fetch(`${API_URL}/${encodeURIComponent(base)}`, {
				cache: 'no-store',
			});
			if (!res.ok) throw new Error('Failed to fetch FX rates');
			const data = (await res.json()) as TExchangerateApiResponse;
			if (data.result !== 'success' || !data.conversion_rates) {
				throw new Error('Invalid FX payload');
			}
			return data;
		},
		staleTime: 1000 * 60 * 60 * 12, // 12h – курс обновляется раз в сутки
		gcTime: 1000 * 60 * 60 * 24, // держим в кэше сутки
		refetchOnWindowFocus: false,
		retry: 1,
	});
}
