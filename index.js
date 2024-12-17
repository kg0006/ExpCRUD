const express = require("express");

const app = express();

app.get("/", (req, res) => {});

app.listen(3450, (err) => {
  if (err) console.log(err);
  else console.log("server is running on 3450 port");
});
