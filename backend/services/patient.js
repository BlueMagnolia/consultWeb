const jwt = require("jsonwebtoken");
const passport = require("passport");
const config = require("../config/passport/passport");
const bcrypt = require("bcryptjs");

module.exports = (app, db) => {
  app.post("/registerPatient", (req, res, next) => {
    passport.authenticate("registerPatient", (err, user, info) => {
      if (err) {
        console.error(err);
      }
      if (info !== undefined) {
        console.error(info.message);
        res.status(403).send(info.message);
      } else {
        const data = {
          email: req.body.email,
          password: req.body.password,
          pin_number: req.body.pin_number,
          patient_name: req.body.patient_name,
          birthday: req.body.birthday,
          gender: req.body.gender,
          address: req.body.address,
          tel: req.body.tel,
          role: "patient",
          parent_name: req.body.parent_name,
          parent_rel: req.body.parent_rel,
          parent_tel: req.body.parent_tel
        };
        console.log(data);
        db.patient
          .findOne({
            where: {
              email: data.email
            }
          })
          .then(patient => {
            console.log(patient);
            patient
              .update({
                email: data.email,
                pin_number: data.pin_number,
                patient_name: data.patient_name,
                birthday: data.birthday,
                gender: data.gender,
                address: data.address,
                tel: data.tel,
                role: data.role,
                parent_name: data.parent_name,
                parent_rel: data.parent_rel,
                parent_tel: data.parent_tel
              })
              .then(() => {
                console.log("new patient created in db");
                res.status(200).send({ message: "new patient created" });
              });
          })
          .catch(err => {
            console.log(err);
          });
      }
    })(req, res, next);
  });

  app.post("/loginPatient", (req, res, next) => {
    console.log("login patient");
    passport.authenticate("loginPatient", (err, users, info) => {
      // console.log(info);
      if (err) {
        console.error(`error ${err}`);
      }
      if (info !== undefined) {
        console.error(info.message);
        if (info.message === "wrong email") {
          res.status(401).send(info.message);
        } else {
          res.status(403).send(info.message);
        }
      } else {
        db.patient
          .findOne({
            where: {
              email: req.body.email
            }
          })
          .then(patient => {
            const token = jwt.sign(
              {
                id: patient.id,
                role: patient.role,
                patient_name: patient.patient_name
              },
              config.jwtOptions.secretOrKey,
              {
                expiresIn: 3600
              }
            );
            res.status(200).send({
              auth: true,
              token,
              message: "email found & logged in"
            });
          });
      }
    })(req, res, next);
  });

  async function getPatientInfo(patient_id) {
    const patient = await db.patient.findOne({
      attributes: ["id", "name"],
      where: { id: patient_id },
      raw: true
    });
    return patient;
  }
};
