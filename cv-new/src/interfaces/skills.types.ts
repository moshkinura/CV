import { UNumberRange } from './NumberRange.types';

export type TSkills = {
	name: string;
	skill: TSkill[];
	information: string;
};

export type TSkill = {
	name: string;
	percent: UNumberRange<0, 100>;
};
