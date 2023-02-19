import { gql, TypedDocumentNode } from "@apollo/client";
import { Countries } from "./types/countries";

export const GET_COUNTRIES: TypedDocumentNode<Countries> = gql`
  query {
    countries {
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
