import { UNumberRange } from './NumberRange.types';

export type TSkill = {
	name: string;
	percent: UNumberRange<0, 100>;
};

export type TSkillsCategory = {
	name: string;
	data: TSkill[];
};

export type TSkills = {
	title: string;
	description: string;
	disclamer: string;
	categories: Record<string, TSkillsCategory>;
};
