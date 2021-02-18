const { response } = require("express");
const mongoose = require("mongoose");
const { options, stringConnection, host } = require("./config");
const account = require("../app/models/account/model");
const joke = require("../app/models/joke/model");

const responseItem = {
  status: null,
  data: [],
  message: null,
};

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
    return responseItem;
  },
  checkDuplicate: (req, res, next) => {
    const response = responseItem;
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
      console.log(error);
      response.status = 500;
      response.message = error;
      return res.status(response.status).json(response);
    }
  },
};
