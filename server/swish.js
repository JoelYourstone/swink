const express = require("express");
const app = express();
const port = 3001;
var request = require("request");

app.get("/", async (req, res) => {
  const amount = req.query.amount;
  const text = req.query.text;
  const number = req.query.number;
  const url = "https://mpc.getswish.net/qrg-swish/api/v1/prefilled";
  request
    .post({
      url: url,
      json: true,
      body: {
        format: "png",
        size: 1000,
        message: {
          value: text,
          editable: false
        },
        payee: {
          value: number,
          editable: false
        },
        amount: {
          value: Number(amount),
          editable: false
        },
        transparent: true
      }
    })
    .pipe(res);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
