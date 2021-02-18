const controllers = require("../../controllers/joke/controllers");
const authentication = require("../../controllers/authentication");
const utils = require("../../../db/utils");

module.exports = (app) => {
  const urlPrefix = "/api/joke";

  app.get(urlPrefix, controllers.onGetAll);

  app.get(urlPrefix + "/:id", controllers.onGet);

  app.delete(
    urlPrefix + "/:id",
    authentication.checkToken,
    controllers.onDelete
  );

  app.post(urlPrefix, authentication.checkToken, controllers.onCreate);

  app.post(
    urlPrefix + "/:id/like",
    authentication.checkToken,
    controllers.onLiked,
    utils.UserGiven
  );

  app.post(
    urlPrefix + "/:id/dislike",
    authentication.checkToken,
    controllers.onDisliked,
    utils.UserGiven
  );
};
