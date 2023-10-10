import { TNameAndValue } from './NameAndValue.types';

export type TDetails = {
  name: string;
  driver: TNameAndValue;
  free: TNameAndValue;
  qualities: TQualities;
};

export type TQualities = {
  name: string;
  value: string[];
};
