import { gql, TypedDocumentNode } from "@apollo/client";
import { COUNTRIES_FRAGMENT } from "graphql/fragment/country";
import { Countries, SearchCodeVariable } from "./types/countries";

type NewType = Countries;

export const SEARCH_COUNTRIES: TypedDocumentNode<
  NewType,
  SearchCodeVariable
> = gql`
  ${COUNTRIES_FRAGMENT}
  query searchCountryByCode($searchCode: [String]!) {
    countries(filter: { code: { in: $searchCode } }) {
      ...Country
    }
  }
`;
