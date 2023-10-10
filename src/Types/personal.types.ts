import { TNameAndValue } from './NameAndValue.types';

export type TPersonal = {
  name: string;
  nationality: TNameAndValue;
  education: TNameAndValue;
  birthday: TNameAndValue;
  gender: TNameAndValue;
  marital: TNameAndValue;
};
