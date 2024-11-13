import terser from '@rollup/plugin-terser';
import react from '@vitejs/plugin-react';
import path from 'path';
import { visualizer } from 'rollup-plugin-visualizer';
import { defineConfig, loadEnv } from 'vite';
import viteImagemin from 'vite-plugin-imagemin';
import Inspect from 'vite-plugin-inspect';

// https://vitejs.dev/config/
export default ({ mode }: { mode: string }) => {
	process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
	console.log(`NODE_ENV is ${process.env.NODE_ENV}, `, `mode is ${mode}, `);
	return defineConfig({
		base: '/CV',
		plugins: [
			terser(),
			react(),
			viteImagemin({
				gifsicle: {
					optimizationLevel: 7,
					interlaced: false,
				},
				optipng: {
					optimizationLevel: 7,
				},
				mozjpeg: {
					quality: 20,
				},
				pngquant: {
					quality: [0.8, 0.9],
					speed: 4,
				},
				svgo: {
					plugins: [
						{
							name: 'removeViewBox',
						},
						{
							name: 'removeEmptyAttrs',
							active: false,
						},
					],
				},
			}),
			Inspect(),
			{
				...(mode === 'development'
					? [
							visualizer({
								open: true,
								filename: 'analysis/bundle.html',
							}),
						]
					: []),
			},
		],
		build: {
			assetsInlineLimit: 0,
			minify: 'terser',
			rollupOptions: {
				output: {
					assetFileNames: assetInfo => {
						if (assetInfo.names && assetInfo.names.includes('index.css')) {
							return 'assets/[name]-[hash].css';
						}

						return 'assets/[name]-[hash][extname]';
					},
					entryFileNames: 'assets/[name]-[hash].js',
					chunkFileNames: 'assets/[name]-[hash].js',
					manualChunks(id) {
						if (id.includes('node_modules')) {
							if (id.includes('node_modules/react')) return 'react';
							if (id.includes('node_modules/react-dom')) return 'react-dom';
							if (id.includes('node_modules/bootstrap')) return 'bootstrap';

							return 'vendor';
						}
					},
					minifyInternalExports: true,
				},
			},
		},
		resolve: {
			alias: {
				'@': path.resolve(__dirname, './src/'),
			},
		},
	});
};
