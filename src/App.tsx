import { useQuery, useLazyQuery } from "@apollo/client";
import { GET_COUNTRIES } from "graphql/queries/getCountries";
import {
  Countries,
  Country,
  SearchCodeVariable,
} from "graphql/queries/types/countries";
import { SEARCH_COUNTRIES } from "graphql/queries/searchCountries";
import { CountryCard } from "Features/CounrtyCard";
import { Box, Typography } from "@mui/material";
import { ChangeEvent, useCallback, useEffect, useState } from "react";
import "./App.css";

function App() {
  const [countryList, setCountryList] = useState<Country[] | [] | undefined>(
    []
  );
  const { data } = useQuery<Countries>(GET_COUNTRIES);
  const [searchCountryByCode, { data: newData }] = useLazyQuery<
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
    if (newData && newData.countries.length > 0) {
      setCountryList(newData.countries);
    } else {
      setCountryList(data?.countries);
    }
  }, [data, newData]);

  return (
    <div className="App">
      <Box display="flex" flexDirection={"column"} gap="20px">
        <Typography variant="h5">Countries</Typography>
        <form>
          <input className="input" type="text" onChange={hangleChangeInput} />
        </form>
        <Box className="content">
          {countryList?.map((item: Country) => (
            <CountryCard data={item} key={item.code} />
          ))}
        </Box>
      </Box>
    </div>
  );
}

export default App;
