const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/api/stuff", (req, res) => {
  res.send("stuff");
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
