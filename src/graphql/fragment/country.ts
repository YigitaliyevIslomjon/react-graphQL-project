import { gql } from "@apollo/client";

export const COUNTRIES_FRAGMENT = gql`
  fragment Country on Country {
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
`;
