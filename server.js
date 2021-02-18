const express = require("express");
const bodyParser = require("body-parser");
const { databaseConnection } = require("./db/utils");
const cors = require("cors");

const accountRoutes = require("./app/routes/account/routes");

const PORT = process.env.PORT || 3000;

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());

app.get("/", (req, res) => {
  res.json({ msg: "Test" });
});
// Inject app to route
accountRoutes(app);

// database connection
databaseConnection();

app.listen(PORT, () => {
  console.log("[Server] Node server listening on " + PORT);
});
