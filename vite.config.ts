import terser from '@rollup/plugin-terser';
import react from '@vitejs/plugin-react';
import path from 'path';
import { visualizer } from 'rollup-plugin-visualizer';
import { defineConfig, loadEnv } from 'vite';
import Inspect from 'vite-plugin-inspect';

// https://vitejs.dev/config/
export default ({ mode }: { mode: string }) => {
	process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
	console.log(`NODE_ENV is ${process.env.NODE_ENV}, `, `mode is ${mode}, `);
	return defineConfig({
		plugins: [
			terser(),
			react(),
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
			rollupOptions: {
				output: {
					assetFileNames: assetInfo => {
						if (assetInfo.name === 'index.css') {
							return 'assets/[name]-[hash].css';
						}
						return 'assets/[name][extname]';
					},
					entryFileNames: 'assets/[name]-[hash].js',
					chunkFileNames: 'assets/[name]-[hash].js',
					manualChunks(id) {
						if (id.includes('node_modules')) {
							if (id.includes('node_modules/react')) return 'react';
							if (id.includes('node_modules/react-dom')) return 'react-dom';

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
