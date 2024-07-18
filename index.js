const express = require("express");
const app = express();
const port = 3000;

// rooutes / url / endpoint utama dari method  GET
app.get("/", (req, res) => {
  res.send("utama");
});

app.get("/hello", (req, res) => {
  res.send("haaloo welcome rafi");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
