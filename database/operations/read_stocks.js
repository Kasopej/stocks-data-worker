import { DATABASE, get, ref } from "../../firebase_config.js";

const stocksRef = ref(DATABASE, "/stocks");
export const loadStocksData = get(stocksRef);
