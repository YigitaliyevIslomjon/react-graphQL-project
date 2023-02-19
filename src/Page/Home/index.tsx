import { Box, CircularProgress, Typography } from "@mui/material";
import { Country } from "graphql/queries/types/countries";
import { APP } from "Constatns/App";
import { CountryCard } from "./Components";
import { useHomeForm } from "./Hooks";
import "./index.scss";

function Home() {
  const { countryList, loading, hangleChangeInput } = useHomeForm();

  if (loading) {
    return (
      <Box
        display={"flex"}
        justifyContent="center"
        alignItems={"center"}
        minHeight="100vh"
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <div className="App">
      <form>
        <Box display="flex" flexDirection={"column"} gap="20px">
          <Typography variant="h5">{APP.COUNTRIES}</Typography>
          <input className="input" type="text" onChange={hangleChangeInput} />
          <Box className="content">
            {countryList.map((item: Country) => (
              <CountryCard data={item} key={item.code} />
            ))}
          </Box>
        </Box>
      </form>
    </div>
  );
}

export default Home;
