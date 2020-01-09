const env = process.env.NODE_ENV || 'development'
const config = require('../config.json')[env];

const bcrypt = require('bcryptjs')
const BCRYPT_SALT_ROUNDS = config.salt_length

const passport = require('passport')
const localStrategy = require('passport-local').Strategy
const JWTStrategy = require('passport-jwt').Strategy
const extractJwt = require('passport-jwt').ExtractJwt
const db = require('../../models')

let jwtOptions = {}
jwtOptions.secretOrKey = 'c0d3c4mp4'

passport.use('registerConsult', new localStrategy(
  {
    usernameField: 'email',
    passwordField: 'password',
    session: false,
  },
  (email, password, done) => {          
    db.consult.findOne({
      where: { email: email }
    }).then(user => {
      // done(error, user, info)
      if (user !== null) {
        console.log('Email already taken')
        return done(null, false, { message: 'email already taken' });
      } else {
        let salt = bcrypt.genSaltSync(BCRYPT_SALT_ROUNDS);
        let hashedPassword = bcrypt.hashSync(password, salt);
        db.consult.create({ email, password: hashedPassword })
          .then(user => {
            console.log("user created")
            return done(null, user)
          })
          .catch(err => {
            console.error(err)
            done(err)
          })
      }
    })
  }
))

passport.use('loginConsult', new localStrategy(
  {
    usernameField: 'email',
    passwordField: 'password',
    session: false,
  }, async (email, password, done) => {
    // Wait for find username
    let user = await db.consult.findOne({ where: { email } })
    // Then, after find username go to condition
    if (user === null) {
      return done(null, false, { message: 'email or password is incorrect. First' })
    }
    bcrypt.compare(password, user.password, function (err, response) {
      if (err) {
        console.error(err)
        done(err)
      }
      if (!response) {
        return done(null, false, { message: 'email or password is incorrect. Second' })
      }
      console.log(`email ${user.id} is found  & authenticated`)
      return done(null, user)
    })
  }
))

passport.use('registerPatient', new localStrategy(
  {
    usernameField: 'email',
    passwordField: 'password',
    session: false,
  },
  (email, password, done) => {
    db.patient.findOne({
      where: { email: email }
    }).then(user => {
      // done(error, user, info)
      if (user !== null) {
        console.log('Email already taken')
        return done(null, false, { message: 'email already taken' });
      } else {
        let salt = bcrypt.genSaltSync(BCRYPT_SALT_ROUNDS);
        let hashedPassword = bcrypt.hashSync(password, salt);
        db.patient.create({ email, password: hashedPassword })
          .then(user => {
            console.log("user created")
            return done(null, user)
          })
          .catch(err => {
            console.error(err)
            done(err)
          })
      }
    })
  }
))


passport.use('loginPatient', new localStrategy(
  {
    usernameField: 'email',
    passwordField: 'password',
    session: false,
  }, async (email, password, done) => {
    // Wait for find username
    let user = await db.patient.findOne({ where: { email } })
    // Then, after find username go to condition
    if (user === null) {
      return done(null, false, { message: 'email or password is incorrect. First' })
    }
    bcrypt.compare(password, user.password, function (err, response) {
      if (err) {
        console.error(err)
        done(err)
      }
      if (!response) {
        return done(null, false, { message: 'email or password is incorrect. Second' })
      }
      console.log(`email ${user.id} is found  & authenticated`)
      return done(null, user)
    })
  }
))

const opts = {
  jwtFromRequest: extractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: jwtOptions.secretOrKey
}

passport.use('jwtConsult', new JWTStrategy(opts, (jwt_payload, done) => {
  console.log('jwt-payload', jwt_payload)
  db.consult.findOne({ where: {id: jwt_payload.id}})
  .then(user => {
    if (user) {
      console.log("user found")
      done(null,user)
    } else {
      console.log("user is not found")
      done(null,false)
    }
  })
}))

passport.use('jwtPatient', new JWTStrategy(opts, (jwt_payload, done) => {
  console.log(jwt_payload)
  db.patient.findOne({ where: {id: jwt_payload.id}})
  .then(user => {
    if (user) {
      console.log("user found")
      done(null,user)
    } else {
      console.log("user is not found")
      done(null,false)
    }
  })
}))

module.exports = { jwtOptions, BCRYPT_SALT_ROUNDS };

