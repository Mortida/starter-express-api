const express = require("express");
const db = require("./db");
const router = require("./Router");
const cors = require("cors");

require("dotenv").config();

const app = express();

app.set("view engine", "ejs");
app.use("/images", express.static("images"));
app.use(express.json());
app.use(cors());
app.use(router);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
