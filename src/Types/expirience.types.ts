export type TExpirience = {
  main: TWorkExpirience;
  more: TWorkExpirience;
};

export type TWorkExpirience = {
  name: string;
  data: TWorkExpirienceData[];
};

export type TWorkExpirienceData = {
  position: string;
  company: string;
  city: string;
  period: [
    `${string}/${string}/${string}`,
    `${string}/${string}/${string}` | null,
  ];
  details: string;
  skills?: string[];
};
