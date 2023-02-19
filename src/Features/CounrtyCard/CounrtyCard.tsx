import { Fragment } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import RecordVoiceOverIcon from "@mui/icons-material/RecordVoiceOver";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import { Country } from "graphql/queries/types/countries";
import InterestsIcon from "@mui/icons-material/Interests";
import "./CountryCard.scss";
import { CardActions } from "@mui/material";

type CountryCardProp = {
  data: Country;
};

export const CountryCard = ({
  data: { code, name, capital, continent, phone, currency, languages },
}: CountryCardProp) => {
  return (
    <Card variant="outlined" sx={{ overflow: "unset", borderRadius: "4px" }}>
      <CardContent className="body">
        <Box className="body__header">
          <img
            crossOrigin="anonymous"
            src={`https://countryflagsapi.com/png/${code.toLowerCase()}`}
            alt="Andorra flag"
            width={"60px"}
            height={"42px"}
          />
          <Box className="body__country">
            <Typography variant="h6">{name}</Typography>
            <Typography variant="body2">{capital}</Typography>
          </Box>
        </Box>
        <Box className="body__continent">{continent.name}</Box>
      </CardContent>{" "}
      <CardActions className="footer">
        <Box className="footer__desc">
          <LocalPhoneIcon className="footer__icon" />
          <Typography variant="body2">{phone}</Typography>
        </Box>
        <Box className="footer__desc">
          <InterestsIcon className="footer__icon" />
          <Typography variant="body2">{currency}</Typography>
        </Box>
        <Box className="footer__desc">
          <RecordVoiceOverIcon className="footer__icon" />
          <Box className="footer__languages">
            {languages.map(({ name, native }) => (
              <Fragment key={name}>
                <Typography variant="body2">{name}</Typography>,
                <Typography variant="body2">{native}</Typography>
              </Fragment>
            ))}
          </Box>
        </Box>
      </CardActions>
    </Card>
  );
};
