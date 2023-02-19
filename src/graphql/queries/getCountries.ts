import { gql, TypedDocumentNode } from "@apollo/client";
import { COUNTRIES_FRAGMENT } from "graphql/fragment/country";
import { Countries } from "./types/countries";

export const GET_COUNTRIES: TypedDocumentNode<Countries> = gql`
  ${COUNTRIES_FRAGMENT}
  query {
    countries {
      ...Country
    }
  }
`;
