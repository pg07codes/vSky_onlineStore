/*created by Pranav Gupta (pg07codes) on 17-08-2018 */

const LocalStrategy = require('passport-local').Strategy
const passport=require('passport')
const credentials=require("../config").CREDENTIALS

const localStrategy = new LocalStrategy(
    (username, password, done) => {
        if((username===credentials.username)&&(password===credentials.password)){
            let user={
                username:credentials.username,
                password:credentials.password
            }
            done(null,user)
        }
        else
            done(null,false)
    })

exports = module.exports = {
    localStrategy
}