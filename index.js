import dotenv from "dotenv";
import axios from "axios";
import * as url from "url";
const __dirname = url.fileURLToPath(new URL(".", import.meta.url));
dotenv.config({ path: __dirname + "/.env" });
global.axios = axios;

import("./firebase_config.js").then((module) => {
  module.loginUser.then(() => {
    import("./database/operations/update_stock_trends.js");
  });
});
