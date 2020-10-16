const express = require("express");
const http = require("http");
const path = require("path");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

app.use(express.static(path.resolve(__dirname, "../build")));

app.use("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../build/", "index.html"));
});

app.listen(process.env.PORT, () =>
  console.log(`Server is listening on port ${process.env.PORT}`)
);
