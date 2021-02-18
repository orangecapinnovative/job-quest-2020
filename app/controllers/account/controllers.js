const model = require("../../models/account/model");

const { responseSkeleton } = require("../../../db/utils");

module.exports = {
  onRegister: (req, res) => {
    const response = responseSkeleton();
    try {
      const body = req.body;
      const newAccount = new model(body);

      newAccount.save((err, result) => {
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
};
