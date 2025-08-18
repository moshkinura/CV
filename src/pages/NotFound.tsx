import { ArrowLeft, Home, SearchX } from 'lucide-react';
import { FC, memo, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import { Button } from '@/shared/ui/button';

const NotFound: FC = () => {
	const location = useLocation();
	const navigate = useNavigate();

	useEffect(() => {
		console.error(
			'404 Error: User attempted to access non-existent route:',
			location.pathname,
		);
		if (typeof document !== 'undefined') {
			document.title = '404 — Page not found';
		}
	}, [location.pathname]);

	return (
		<main className='min-h-[100svh] grid place-items-center bg-linear-to-b from-background to-secondary/20 px-4'>
			<section className='text-center max-w-md'>
				<div className='inline-flex items-center justify-center rounded-2xl bg-primary/10 p-4 mb-4 motion-safe:animate-pulse motion-reduce:animate-none'>
					<SearchX className='w-8 h-8 text-primary' aria-hidden='true' />
				</div>

				<h1 className='text-6xl md:text-7xl font-black tracking-tight text-gradient'>
					404
				</h1>
				<p className='mt-3 text-base md:text-lg text-muted-foreground'>
					Oops! Page not found.
				</p>
				<p className='mt-2 text-xs md:text-sm text-muted-foreground/80'>
					Requested path:{' '}
					<code className='px-1.5 py-0.5 rounded bg-muted text-foreground'>
						{location.pathname}
					</code>
				</p>

				<div className='mt-6 flex flex-col sm:flex-row items-center justify-center gap-3'>
					<Button
						variant='outline'
						size='lg'
						className='w-full sm:w-auto'
						onClick={() => navigate(-1)}
					>
						<ArrowLeft className='w-4 h-4 mr-2' aria-hidden='true' />
						Go back
					</Button>

					<Button size='lg' asChild className='w-full sm:w-auto'>
						<Link to='/CV' aria-label='Return to Home'>
							<Home className='w-4 h-4 mr-2' aria-hidden='true' />
							Return to Home
						</Link>
					</Button>
				</div>
			</section>
		</main>
	);
};

export default memo(NotFound);
