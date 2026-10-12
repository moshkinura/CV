export type TPortfolioLink = {
	name: string;
	url: string;
};

export type TPortfolioScreenshot = {
	src: string;
	alt: string;
};

export type TPortfolioProject = {
	name: string;
	description: string;
	technologies: string[];
	links?: TPortfolioLink[];
	screenshots?: TPortfolioScreenshot[];
};

export type TPortfolio = {
	title: string;
	description: string;
	technologies: string;
	items: TPortfolioProject[];
};
