const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const corsOptions = {
  origin: "*",
  optionSuccessStatus: 200,
};

const db = require("./database");
const armorRouter = require("./equipment/armor/routes/armor-router");
const abilityRouter = require("./character/abilities/routes/ability-router");

const app = express();
const apiPort = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors(corsOptions));
app.use(bodyParser.json());

db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api", armorRouter);
app.use("/api", abilityRouter);

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`));
