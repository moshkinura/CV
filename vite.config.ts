import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { execSync } from 'child_process';
import path from 'path';
import { visualizer } from 'rollup-plugin-visualizer';
import { defineConfig, loadEnv } from 'vite';
import viteImagemin from 'vite-plugin-imagemin';
import Inspect from 'vite-plugin-inspect';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default ({ command, mode }: { command: string; mode: string }) => {
	process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

	const exec = (cmd: string) => execSync(cmd).toString().trim();

	process.env.VITE_GIT_COMMIT_HASH = exec('git rev-parse --short HEAD');
	process.env.VITE_GIT_COMMIT_HASH_FULL = exec('git rev-parse HEAD');
	process.env.VITE_GIT_COMMIT_DATE = exec('git log -1 --format=%cd');
	try {
		process.env.VITE_GIT_TAG = exec('git describe --tags --abbrev=0');
	} catch {
		process.env.VITE_GIT_TAG = '';
	}

	console.log(
		`NODE_ENV is ${process.env.NODE_ENV}, `,
		`command is ${command}, `,
		`mode is ${mode}, `,
		`commit is ${process.env.VITE_GIT_COMMIT_HASH}, `,
		`commit full is ${process.env.VITE_GIT_COMMIT_HASH_FULL}, `,
		`commit date is ${process.env.VITE_GIT_COMMIT_DATE}, `,
		`tag is ${process.env.VITE_GIT_TAG}, `,
	);

	const isProd = command === 'build' && mode === 'production';

	return defineConfig({
		base: '/CV',
		plugins: [
			// terser(),
			react(),
			tailwindcss(),
			tsconfigPaths(),
			mode === 'development' && Inspect(),
			isProd &&
				viteImagemin({
					gifsicle: {
						optimizationLevel: 3,
						interlaced: true,
					},
					optipng: {
						optimizationLevel: 9,
					},
					mozjpeg: {
						quality: 70,
					},
					pngquant: {
						quality: [0.65, 0.9],
						speed: 3,
					},
					svgo: {
						multipass: true,
						plugins: [
							{
								name: 'removeViewBox',
								active: false,
							},
							{
								name: 'removeEmptyAttrs',
								active: false,
							},
						],
					},
				}),
			...(mode === 'development'
				? [
						visualizer({
							filename: 'analysis/bundle.html',
							template: 'treemap', // Формат визуализации: 'treemap', 'sunburst', 'network'
							open: true, // Автоматически открывает график в браузере
							gzipSize: true, // Показывает размер после gzip-компрессии
							brotliSize: true, // Показывает размер после brotli-компрессии
						}),
					]
				: []),
		].filter(Boolean),
		build: {
			minify: isProd ? 'terser' : false,
			cssMinify: isProd ? 'lightningcss' : false,
			chunkSizeWarningLimit: 1024,
			assetsInlineLimit: 1024,
			rollupOptions: {
				output: {
					assetFileNames: assetInfo => {
						if (assetInfo.names && assetInfo.names.includes('index.css')) {
							return 'assets/[name]-[hash].css';
						}
						return 'assets/[name][extname]';
					},
					entryFileNames: 'assets/[name]-[hash].js',
					chunkFileNames: 'assets/[name]-[hash].js',
					manualChunks(id) {
						if (id.includes('node_modules')) {
							if (id.includes('@fortawesome')) return 'fortawesome';

							return 'vendor'; // Остальные библиотеки
						}
					},
					minifyInternalExports: true,
				},
			},
		},
		resolve: { alias: { '@': path.resolve(__dirname, './src/') } },
	});
};
