export type TExpirience = {
	month: string;
	years: string;
	responsibility: string;
	technologies: string;
	total: {
		title: string;
		description: string;
	};
	main: TWorkExpirience;
	more: TWorkExpirience;
};

export type TWorkExpirience = {
	title: string;
	subtitle: string;
	data: TWorkExpirienceData[];
};

export type TWorkExpirienceData = {
	company: string;
	position: string;
	location: string;
	period: [
		`${string}/${string}/${string}`,
		`${string}/${string}/${string}` | null,
	];
	projects: TWorkExpirienceProject[];
};

export type TWorkExpirienceProject = {
	name: string;
	description: string;
	responsibilities?: string[];
	technologies?: string[];
};
