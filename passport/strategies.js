/*created by Pranav Gupta (pg07codes) on 17-08-2018 */

const LocalStrategy = require('passport-local').Strategy
const passport=require('passport')
//const credentials=require("../config").CREDENTIALS

const localStrategy = new LocalStrategy(
    (username, password, done) => {
        if((username===process.env.LOGIN_USER)&&(password===process.env.LOGIN_PASS)){
            let user={
                username:process.env.LOGIN_USER,
                password:process.env.LOGIN_PASS
            }
            done(null,user)
        }
        else
            done(null,false)
    })

exports = module.exports = {
    localStrategy
}