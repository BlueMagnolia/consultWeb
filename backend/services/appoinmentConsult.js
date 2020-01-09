const passport = require("passport");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;


module.exports = (app, db) => {
    app.post('/appointConsultRoom', passport.authenticate('jwtConsult', { session: false }),
    function (req, res) {
      console.log('REQUEST_BODY', req.body);
      db.appointmentConsult.create({
        // id: req.user.id,
        date: req.body.date,
        time: req.body.time,
        status: req.body.status,
        consult_id: req.user.id
      })
        .then(result => {
          res.status(201).send(result)
        })
        .catch(err => {
          res.status(400).send("something went wrong.")
        })
    })

    app.get("/appointPatientRoomTable", async function(req, res) {
      try {
        let result = await db.appointmentConsult.findAll({
          attributes: ["consult_id", "date", "time","status","id"]
        });
        res.status(200).send(result);
      } catch (error) {
        console.log(error)
        res.status(400).send({ message: error.message });
      }
    });
  }