const controllers = require("../../controllers/account/controllers");
const authentication = require("../../controllers/authentication");
const utils = require("../../../db/utils");
module.exports = (app) => {
  const urlPrefix = "/api/account";

  // Create account route.
  app.post(urlPrefix + "/", utils.checkDuplicate, controllers.onRegister);

  //   Authentication Route
  app.post("/login", authentication.login);
};
