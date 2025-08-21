/** @type {import('jest').Config} */
module.exports = {
	testEnvironment: 'jsdom',
	setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
	coverageProvider: 'v8',
	coverageDirectory: '<rootDir>/coverage',
	coverageReporters: ['text', 'lcov', 'html', 'json-summary'],
	collectCoverageFrom: [
		'src/**/*.{ts,tsx}',
		'!src/app/App.{ts,tsx}',
		'!src/app/main.{ts,tsx}',
		'!src/app/index.{ts,tsx}',
		'!src/interfaces/**.{ts,tsx}',
		'!src/**/*.d.ts',
		'!src/**/index.{ts,tsx}',
		'!src/**/*.stories.{ts,tsx}',
		'!src/**/__mocks__/**',
		'!src/**/test-utils.{ts,tsx}',
	],
	transform: {
		'^.+\\.(t|j)sx?$': [
			'@swc/jest',
			{
				sourceMaps: true, // корректные мапы строк в отчёте
				jsc: {
					parser: { syntax: 'typescript', tsx: true },
					transform: { react: { runtime: 'automatic' } },
				},
				module: { type: 'commonjs' },
			},
		],
	},
	moduleNameMapper: {
		'^@/(.*)$': '<rootDir>/src/$1',
		'\\.(css|sass|scss)$': 'identity-obj-proxy',
	},
};
