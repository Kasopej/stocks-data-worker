import { DATABASE, get, set, remove, ref } from "../../firebase_config.js";
import { loadStocksData } from "./read_stocks.js";

let stocksData,
  stocksTrends = {};
loadStocksData
  .then((snapShot) => {
    if (!snapShot.exists()) throw new Error("No stocks data");
    stocksData = snapShot.val();
  })
  .catch((error) => {
    throw error;
  });

const STOCKS_TRENDS_REF = ref(DATABASE, "/stocksTrends");
get(STOCKS_TRENDS_REF).then((snapShot) => {
  stocksTrends = snapShot.val();
  generateStockTrends(stocksTrends);
});

function generateStockTrends(stocksTrends) {
  const currentMonth = new Date().getMonth();
  if (stocksTrends?.currentMonth == currentMonth) {
    console.log("current month trends");
    if (stocksTrends.stocks.length == stocksData.length) return;
    else {
      // fill in missing stocks
    }
  } else {
    stocksTrends = {};
    stocksTrends.currentMonth = currentMonth;
    const stockTickersEntries = stocksData.map((stockData) => {
      const { ticker } = stockData;
      return [ticker, { trends: [] }];
    });
    stocksTrends.stocks = Object.fromEntries(stockTickersEntries);

    Object.entries(stocksTrends.stocks).forEach(([ticker, data]) => {
      const numberOfDaysInMonth = getNumberOfDaysInMonth(
        new Date().getFullYear(),
        stocksTrends.currentMonth
      );

      for (let index = 0; index < numberOfDaysInMonth; index++) {
        data.trends.push({
          price: Math.random() * 500,
          timestamp: new Date(
            new Date().getFullYear(),
            stocksTrends.currentMonth,
            index + 1
          ).valueOf(),
        });
      } //end of daily trends loop
    }); //end of stocks foreach loop

    set(STOCKS_TRENDS_REF, stocksTrends)
      .then(() => {
        console.log("trends set");
      })
      .catch((error) => {
        throw error;
      });
  }
}

function getNumberOfDaysInMonth(year, month) {
  return new Date(year, month, 0).getDate();
}
