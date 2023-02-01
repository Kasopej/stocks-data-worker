import { DATABASE, set, ref } from "../../firebase_config.js";

fetch(
  "https://api.polygon.io/v3/reference/tickers?market=stocks&exchange=XNAS&active=true",
  {
    method: "GET",
    headers: {
      Authorization: "Bearer YtTjMC3PISJ78qtZOK7W2zGcTsNfpK9x",
    },
  }
)
  .then((res) => res.json())
  .then((result) => console.log(result))
  .catch((err) => console.log(err));
