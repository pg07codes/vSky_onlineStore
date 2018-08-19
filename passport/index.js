/*created by Pranav Gupta (pg07codes) on 17-08-2018 */
const passport = require('passport')
const strategies = require('./strategies')
//const credentials=require("../config").CREDENTIALS

passport.use(strategies.localStrategy)

passport.serializeUser(function (user, done) {
    done(null, user.username)
})

passport.deserializeUser(function(userEmail, done) {
    let user={
        username:process.env.LOGIN_USER,
        password:process.env.LOGIN_PASS
    }
    done(null,user)
})

exports = module.exports = passport