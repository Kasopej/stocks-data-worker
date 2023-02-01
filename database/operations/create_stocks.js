import { DATABASE, set, ref } from "../../firebase_config.js";

const commentsLocationRef = ref(DATABASE, "/stocks");
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
  .then(({ results }) => set(commentsLocationRef, results))
  .catch((err) => console.log(err));
