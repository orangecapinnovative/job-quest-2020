const express = require("express");
const bodyParser = require("body-parser");
const { databaseConnection } = require("./db/utils");
const cors = require("cors");

const accountRoutes = require("./app/routes/account/routes");
const jokeRoutes = require("./app/routes/joke/routes");
const { responseSkeleton } = require("./db/utils");
const PORT = process.env.PORT || 3000;

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());

// Inject app to route
accountRoutes(app);
jokeRoutes(app);

// database connection
databaseConnection();

app.use((req, res) => {
  const response = responseSkeleton();
  response.status = 404;
  response.message =
    "Path not found, if you sure that path is exist please check spelling.";

  return res.status(response.status).json(response);
});

app.listen(PORT, () => {
  console.log("[Server] Node server listening on " + PORT);
});
