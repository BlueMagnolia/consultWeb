
const passport = require("passport");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

module.exports = (app, db) => {
  app.post(
    "/reserveTime",
    passport.authenticate("jwtPatient", { session: false }),
    function (req, res) {
      console.log("🎈🎈🎈🎈🎈", req.body.consult_id);
      console.log("🎈🎈🎈🎈🎈", req.user.id);
      db.reserve
        .create({
          consult_id: req.body.consult_id,
          patient_id: req.user.id,
          time: req.body.time,
          date: req.body.date
        })
        .then(result => {
          res.status(201).send(result);
        })
        .catch(err => {
          console.log(err);
          res.status(400).send({ message: "something went wrong." });
        });
    }
  );
}