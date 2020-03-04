const express = require("express");
const fileUpload = require("express-fileupload");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const _ = require("lodash");

const db = require("./models");
const consultService = require("./services/consult");
const patientService = require("./services/patient")
const appointmentConsultService = require("./services/appoinmentConsult")
const reserveService = require("./services/reserve")

const app = express();

// import passport
const passport = require("passport");

app.use(cors());

// use the strategy
app.use(passport.initialize());

// parse application/json
app.use(bodyParser.json());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.use(morgan("dev"));

// import config of passport
require("./config/passport/passport");

db.sequelize.sync({ force: false, alter: false }).then(() => {
  consultService(app, db);
  patientService(app, db);
  appointmentConsultService(app,db);
  reserveService(app,db);
  app.listen(8080, () => console.log("Server is running on port 8080"));
});

