/* Example in Node.js ES6 using request-promise */

const rp = require("request-promise");
const requestOptions = {
  method: "GET",
  uri: "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest",
  qs: {
    start: "1",
    limit: "1",
    convert: "USD,BTC"
  },
  headers: {
    "X-CMC_PRO_API_KEY": "1d67e321-9a75-4d46-8c7b-bc2f87bad382"
  },
  json: true,
  gzip: true
};

rp(requestOptions)
  .then(response => {
    console.log("API call response:", response);
  })
  .catch(err => {
    console.log("API call error:", err.message);
  });
