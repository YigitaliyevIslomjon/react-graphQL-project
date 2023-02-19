import { gql, TypedDocumentNode } from "@apollo/client";
import { Countries, SearchCodeVariable } from "./types/countries";

type NewType = Countries;

export const SEARCH_COUNTRIES: TypedDocumentNode<
  NewType,
  SearchCodeVariable
> = gql`
  query searchCountryByCode($searchCode: [String]!) {
    countries(filter: { code: { in: $searchCode } }) {
      code
      name
      native
      phone
      capital
      currency
      languages {
        name
        native
      }
      continent {
        name
      }
      emoji
      states {
        name
      }
    }
  }
`;
