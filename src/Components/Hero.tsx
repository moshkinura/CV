import { MapPin } from 'lucide-react';
import { memo, useId, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import Avatar from '@/widgets/Avatar/Avatar';
import Contacts from '@/widgets/Contacts/Contacts';
import TypingText from '@/widgets/TypingText/TypingText';

import { useFxRates } from '@/shared/hooks/useFxRates';

import { TBio } from '@/interfaces/bio.types';
import { TPay } from '@/interfaces/pay.types';

const ceilStep = (value: number, step = 10) => Math.ceil(value / step) * step;

const parseRub = (rub: string | number) => {
	if (typeof rub === 'number') return rub;
	// "300000₽" / "300 000 ₽" / "300,000₽"
	const n = Number(String(rub).replace(/[^\d.]/g, ''));
	return Number.isFinite(n) ? n : 0;
};

const fmt = (currency: 'USD' | 'EUR', value: number, locale?: string) =>
	new Intl.NumberFormat(locale || undefined, {
		style: 'currency',
		currency,
		maximumFractionDigits: 0,
	}).format(value);

const Hero = () => {
	const { t, i18n } = useTranslation();
	const titleId = useId();

	const bio = useMemo(() => t('bio', { returnObjects: true }) as TBio, [t]);
	const pay = useMemo(() => t('pay', { returnObjects: true }) as TPay, [t]);

	const rubAmount = useMemo(() => parseRub(pay.rub), [pay.rub]);

	// Курс RUB→{USD,EUR}
	const { data, isLoading, isFetching } = useFxRates('RUB');

	const usd = useMemo(() => {
		const rate = data?.conversion_rates?.USD;
		if (!rate || !rubAmount) return null;
		return ceilStep(rubAmount * rate, 10);
	}, [data, rubAmount]);

	const eur = useMemo(() => {
		const rate = data?.conversion_rates?.EUR;
		if (!rate || !rubAmount) return null;
		return ceilStep(rubAmount * rate, 10);
	}, [data, rubAmount]);

	const usdText =
		usd !== null ? fmt('USD', usd, i18n.resolvedLanguage) : pay.usd;
	const eurText =
		eur !== null ? fmt('EUR', eur, i18n.resolvedLanguage) : pay.eur;

	const loadingRates =
		(isLoading || isFetching) && (usd === null || eur === null);

	return (
		<section
			id='home'
			role='banner'
			aria-labelledby={titleId}
			className='relative min-h-[100svh] flex items-center justify-center py-16 md:py-20 overflow-hidden'
		>
			<div className='absolute inset-0 gradient-hero opacity-30 pointer-events-none' />

			<div className='container mx-auto px-4 relative z-10'>
				<div className='max-w-4xl mx-auto text-center space-y-8'>
					{/* Profile Photo */}
					<Avatar />

					{/* Name and Title */}
					<div
						className='space-y-4 motion-safe:animate-slide-up motion-reduce:animate-none'
						style={{ animationDelay: '0.2s' }}
					>
						<h1
							id={titleId}
							className='text-4xl md:text-6xl font-bold text-gradient pb-5'
						>
							{bio.fio}
						</h1>
						<div className='text-xl md:text-2xl text-muted-foreground font-mono'>
							<TypingText text={bio.position} />
						</div>
					</div>

					{/* Location */}
					<div
						className='flex items-center justify-center gap-2 text-muted-foreground motion-safe:animate-fade-in motion-reduce:animate-none'
						style={{ animationDelay: '0.4s' }}
					>
						<MapPin className='w-5 h-5' aria-hidden='true' />
						<span>{bio.geo}</span>
					</div>

					{/* Salary Expectation */}
					<div
						className='glass-effect rounded-2xl p-6 max-w-md mx-auto motion-safe:animate-scale-in motion-reduce:animate-none'
						style={{ animationDelay: '0.6s' }}
						aria-busy={loadingRates || undefined}
					>
						<h3 className='text-lg font-semibold mb-2'>{pay.title}</h3>
						<p className='text-2xl font-bold text-primary'>
							{pay.from} {pay.rub} / {usdText} / {eurText}
						</p>
						{loadingRates && (
							<span
								className='mt-2 block h-3 w-28 mx-auto rounded bg-muted animate-pulse'
								aria-hidden='true'
							/>
						)}
					</div>

					{/* Quick Contact */}
					<div
						className='flex flex-wrap justify-center gap-4 motion-safe:animate-slide-up motion-reduce:animate-none'
						style={{ animationDelay: '0.8s' }}
					>
						<Contacts variant='short' />
					</div>
				</div>
			</div>
		</section>
	);
};

export default memo(Hero);
