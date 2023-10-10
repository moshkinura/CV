import { TBio } from './bio.types';
import { TComputer } from './computer.types';
import { TContacts } from './contacts.types';
import { TDetails, TQualities } from './details.types';
import { TEmployments } from './employments.types';
import {
  TExpirience,
  TWorkExpirience,
  TWorkExpirienceData,
} from './expirience.types';
import { TLanguages, TLanguage } from './languages.types';
import { TLearns, TLearn } from './learns.types';
import { TPay } from './pay.types';
import { TPersonal } from './personal.types';
import { TShedules } from './shedules.types';
import { TSkills, TSkill } from './skills.types';
import { TSoftware } from './software.types';
import { TNameAndValue } from './NameAndValue.types';
import { UEnumerate, UNumberRange } from './NumberRange.types';

export interface ITranslation {
  bio: TBio;
  contacts: TContacts;
  pay: TPay;
  shedules: TShedules;
  employments: TEmployments;
  languages: TLanguages;
  skills: TSkills;
  learns: TLearns;
  computer: TComputer;
  software: TSoftware;
  personal: TPersonal;
  expirience: TExpirience;
  details: TDetails;
}

export type {
  TBio,
  TComputer,
  TContacts,
  TDetails,
  TQualities,
  TEmployments,
  TExpirience,
  TWorkExpirience,
  TWorkExpirienceData,
  TLanguages,
  TLanguage,
  TLearns,
  TLearn,
  TPay,
  TPersonal,
  TShedules,
  TSkills,
  TSkill,
  TSoftware,
  TNameAndValue,
  UEnumerate,
  UNumberRange,
};
