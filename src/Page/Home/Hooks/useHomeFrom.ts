import { useLazyQuery, useQuery } from "@apollo/client";
import { GET_COUNTRIES } from "graphql/queries/getCountries";
import { SEARCH_COUNTRIES } from "graphql/queries/searchCountries";
import {
  Countries,
  Country,
  SearchCodeVariable,
} from "graphql/queries/types/countries";
import { ChangeEvent, useCallback, useEffect, useState } from "react";

export const useHomeForm = () => {
  const [countryList, setCountryList] = useState<Country[] | []>([]);

  const { loading, data } = useQuery<Countries>(GET_COUNTRIES);

  const [searchCountryByCode, { data: searchCountry }] = useLazyQuery<
    Countries,
    SearchCodeVariable
  >(SEARCH_COUNTRIES);

  const hangleChangeInput = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      searchCountryByCode({
        variables: { searchCode: e.target.value.toUpperCase() },
      });
    },
    [searchCountryByCode]
  );

  useEffect(() => {
    if (searchCountry && searchCountry.countries.length > 0) {
      setCountryList(searchCountry.countries);
    } else {
      setCountryList(data?.countries || []);
    }
  }, [data, searchCountry]);

  return { countryList, hangleChangeInput, loading };
};
