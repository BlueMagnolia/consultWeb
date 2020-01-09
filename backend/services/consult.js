const jwt = require("jsonwebtoken");
const passport = require("passport");
const config = require("../config/passport/passport");
const bcrypt = require("bcryptjs");


module.exports = (app, db) => {
  app.post("/registerConsult", (req, res, next) => {
    passport.authenticate("registerConsult", (err, user, info) => {
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
          consult_name: req.body.consult_name,
          tel: req.body.tel,
          certificate: req.body.certificate,
          no_certificate: req.body.no_certificate,
          role: req.body.role,
          ref_name: req.body.ref_name,
          ref_position: req.body.ref_position,
          ref_tel: req.body.ref_tel,
          ref_letter: req.body.ref_letter
        };
        console.log(data);
        db.consult
          .findOne({  
            where: {
              email: data.email
            }
          })
          .then(consult => {
            console.log(consult);
            consult
              .update({
                consult_name: data.consult_name,
                email: data.email,
                tel: data.tel,
                certificate: data.certificate,
                no_certificate: data.no_certificate,
                role: data.role,
                ref_name: data.ref_name,
                ref_position: data.ref_position,
                ref_tel: data.ref_tel,
                ref_letter: data.ref_letter
              })
              .then(() => {
                console.log("new consult created in db");
                res.status(200).send({ message: "new consult created" });
              });
            })
            .catch(err => {
              console.log(err);
            });
          }
        })(req, res, next);
      });
      
  app.post("/registerConsult/:id", (req, res, next) => {
    console.log(req.body)
  });

  app.post("/loginConsult", (req, res, next) => {
    passport.authenticate("loginConsult", (err, user, info) => {
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
        db.consult
          .findOne({  
            where: {
              email: req.body.email
            }
          })
          .then(consult => {
            const token = jwt.sign(
              {
                id: consult.id,
                role: consult.role,
                consult_name: consult.consult_name
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

  app.get('/appointPatientRoomList',
    async function (req, res) {
      try {
        let result = await db.consult.findAll({
          attributes: ["id", "consult_name","role"]
        });
        res.status(200).send(result)
      } catch (error) {
        res.status(400).send({ message: error.message });
      }
    });


  async function getConsultInfo(consult_id) {
    const consult = await db.consult.findOne({
      attributes: ["id", "name"],
      where: { id: consult_id },
      raw: true
    });
    return consult;
  }
};
