/*created by Pranav Gupta (pg07codes) on 11-08-2018 */

const route=require("express").Router()
const ctrl=require("../../controllers/itemctrl")
const collegeCtrl=require("../../controllers/collegectrl")
const orderCtrl=require("../../controllers/orderctrl")
const passport=require("../../passport")


route.get("/",(r,s)=>{
    if(r.isAuthenticated())
        s.redirect("/admin")
    else
        s.render("auth")
})

route.post("/",passport.authenticate('local',{
    successRedirect:"/admin",
    failureRedirect:"/auth"
})
)


module.exports=route

