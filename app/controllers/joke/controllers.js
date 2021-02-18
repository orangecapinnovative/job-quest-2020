const model = require("../../models/joke/model");
const { responseSkeleton } = require("../../../db/utils");

module.exports = {
  onGet: (req, res) => {
    const response = responseSkeleton();
    const jokeId = req.params.id;
    try {
      model.findById(jokeId, (err, result) => {
        if (err) {
          response.status = 500;
          response.message = err;
          return res.status(response.status).json(response);
        } else {
          response.status = 200;
          response.data = result;
          response.message = "OK";
          return res.status(response.status).json(response);
        }
      });
    } catch (error) {
      response.status = 500;
      response.message = error;
      return res.status(response.status).json(response);
    }
  },
  onGetAll: (req, res) => {
    const response = responseSkeleton();
    try {
      model.find({}, (err, results) => {
        if (err) {
          response.status = 500;
          response.message = err;
          return res.status(response.status).json(response);
        } else {
          response.status = 200;
          response.data = results;
          response.message = "OK";
          return res.status(response.status).json(response);
        }
      });
    } catch (error) {
      response.status = 500;
      response.message = error;
      return res.status(response.status).json(response);
    }
  },
  onCreate: (req, res) => {
    const response = responseSkeleton();
    try {
      const body = req.body;
      if (!body) {
        response.status = 400;
        response.message = "Bad Request, This api provied body";
        return res.status(response.status).json(response);
      }

      const newJoke = new model(body);

      newJoke.save((err, result) => {
        if (err) {
          response.status = 500;
          response.message = err;
          return res.status(response.status).json(response);
        } else {
          response.status = 200;
          response.data = result;
          response.message = "Created!";

          return res.status(response.status).json(response);
        }
      });
    } catch (error) {
      response.status = 500;
      response.message = error;
      return res.status(response.status).json(response);
    }
  },
  onDelete: (req, res) => {
    const response = responseSkeleton();
    const jokeId = req.params.id;

    try {
      model.findByIdAndDelete(jokeId, (err, result) => {
        if (err) {
          response.status = 500;
          response.message = err;
          return res.status(response.status).json(response);
        } else {
          response.status = 200;
          response.message = "Accepted!";
          return res.status(response.status).json(response);
        }
      });
    } catch (error) {
      response.status = 500;
      response.message = error;
      return res.status(response.status).json(response);
    }
  },
  onLiked: (req, res, next) => {
    const response = responseSkeleton();
    const jokeId = req.params.id;

    try {
      model.findById(jokeId, (err, result) => {
        if (err) {
          response.status = 500;
          response.message = err;
          return res.status(response.status).json(response);
        } else {
          result.like++;
          result.save((err, doc) => {
            if (err) {
              response.status = 500;
              response.message = err;
              return res.status(response.status).json(response);
            } else {
              req.status = true;
              next();
            }
          });
        }
      });
    } catch (error) {
      response.status = 500;
      response.message = err;
      return res.status(response.status).json(response);
    }
  },
  onDisliked: (req, res, next) => {
    const response = responseSkeleton();
    const jokeId = req.params.id;

    try {
      model.findById(jokeId, (err, result) => {
        if (err) {
          response.status = 500;
          response.message = err;
          return res.status(response.status).json(response);
        } else {
          result.dislike++;
          result.save((err, doc) => {
            if (err) {
              response.status = 500;
              response.message = err;
              return res.status(response.status).json(response);
            } else {
              req.status = false;
              next();
            }
          });
        }
      });
    } catch (error) {
      response.status = 500;
      response.message = err;
      return res.status(response.status).json(response);
    }
  },
};
