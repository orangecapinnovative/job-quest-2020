const mongoose = require("mongoose");
const { options, stringConnection, host } = require("./config");
const account = require("../app/models/account/model");
const joke = require("../app/models/joke/model");

module.exports = {
  databaseConnection: () => {
    mongoose.connect(stringConnection, options, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("[DB] connected to : " + host);
      }
    });
  },
  responseSkeleton: () => {
    const response = {
      status: null,
      data: [],
      message: null,
    };
    return response;
  },
  checkDuplicate: (req, res, next) => {
    const response = {
      status: null,
      data: [],
      message: null,
    };
    const body = req.body;
    if (body) {
      response.status = 400;
      response.message = "Bad Request, This api provied body";
      return res.status(response.status).json(response);
    }
    var pathName = req.originalUrl.split("/")[2];

    const avaliable_method = [
      {
        path: "account",
        name: "username",
        schema: account,
      },
      {
        path: "joke",
        name: "name",
        schema: joke,
      },
    ];

    var matched = avaliable_method.filter((item) => item.path == pathName)[0];

    if (!matched) {
      response.status = 404;
      response.message = "Path not found";
      res.status(response.status).json(response);
    }

    try {
      const query = {};
      query[matched.name] = body[matched.name];

      matched["schema"].find(query, (err, result) => {
        if (err) {
          response.status = 500;
          response.message = err;
          return res.status(response.status).json(response);
        }

        if (result.length > 0) {
          response.status = 409;
          response.message =
            "Conflict, It already have " + matched.name + " in database.";
          return res.status(response.status).json(response);
        }

        next();
      });
    } catch (error) {
      response.status = 500;
      response.message = error;
      return res.status(response.status).json(response);
    }
  },
  UserGiven: (req, res) => {
    const response = {
      status: null,
      data: [],
      message: null,
    };

    const jokeId = req.params.id;
    const status = req.status;
    const { userid } = req.user;

    try {
      if (status) {
        response.message = "You must been laughing a lot :D !";
      } else {
        response.message = "Maybe It's not bad.. :C";
      }

      account.findById(userid, (err, result) => {
        if (err) {
          response.status = 500;
          response.message = err;
          return res.status(response.status).json(response);
        } else {
          const action = result.action;
          const duplicatedId = action.filter((item) => item.jokeId == jokeId);
          const jokeStatus = { jokeId: jokeId, status: status };

          if (duplicatedId.length > 0) {
            response.status = 409;
            response.message = "You already done it!";
            return res.status(response.status).json(response);
          } else {
            action.push(jokeStatus);
            result.markModified("action");
            result.save((err) => {
              if (err) {
                response.status = 500;
                response.message = err;
                return res.status(response.status).json(response);
              } else {
                response.status = 200;
                return res.status(response.status).json(response);
              }
            });
          }
        }
      });
    } catch (error) {
      response.status = 500;
      response.message = error;
      return res.status(response.status).json(response);
    }
  },
};
