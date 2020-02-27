const express = require("express");
const bodyParser = require("body-parser");
const teamRouter = require("./Team/router");
const playerRouter = require("./Player/router");

const app = express();
const port = process.env.PORT || 4000;
app.use(bodyParser.json());
app.use(teamRouter);
app.use(playerRouter);

app.listen(port, () => console.log("Listening to " + port));
