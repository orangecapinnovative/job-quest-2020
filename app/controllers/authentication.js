const model = require("../models/account/model");
const { responseSkeleton } = require("../../db/utils");
const jwt = require("jsonwebtoken");
const { key } = require("../../config/jwtkey");
const bcrypt = require("bcryptjs");

module.exports = {
  login: (req, res) => {
    const body = req.body;
    const response = responseSkeleton();

    if (!body.username || !body.password) {
      response.status = 400;
      response.message = "Username and password are required.";
      return res.status(response.status).json(response);
    }

    const query = {};
    query.username = body.username;
    model.findOne(query, (err, result) => {
      if (err) {
        response.status = 500;
        response.message = err;
        return res.status(response.status).json(response);
      } else {
        if (result) {
          if (bcrypt.compareSync(body.password, result.password)) {
            const { username, _id } = result;
            const token = jwt.sign({ username, _id }, key, { expiresIn: "1h" });
            return res.json({ token });
          } else {
            response.status = 401;
            response.message = "Unauthorized";
            return res.status(response.status).json(response);
          }
        } else {
          response.status = 404;
          response.message = "User not found";
          return res.status(response.status).json(response);
        }
      }
    });
  },
  checkToken: (req, res, next) => {
    const token = req.headers["authorization"];
    const response = responseSkeleton();

    try {
      const decoded = jwt.verify(token, key);
      req.user = { userid: decoded._id, username: decoded.username };
      next();
    } catch (error) {
      response.status = 500;
      response.message = error;
      return res.status(response.status).json(response);
    }
  },
};
