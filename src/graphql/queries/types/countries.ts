type Language = {
  name: string;
  native: string;
  __typename: "Language";
};

type Continent = {
  name: string;
  __typename: "Continent";
};

export type Country = {
  code: string;
  name: string;
  native: string;
  phone: string;
  capital: string;
  currency: string;
  languages: Language[];
  continent: Continent;
  emoji: string;
  states: { name: string }[];
  __typename: "Country";
};

export type Countries = {
  countries: Country[];
};

export type SearchCodeVariable = {
  searchCode: string;
};
