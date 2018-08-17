/*created by Pranav Gupta (pg07codes) on 11-08-2018 */

const route=require("express").Router()
const ctrl=require("../../controllers/itemctrl")
const collegeCtrl=require("../../controllers/collegectrl")
const orderCtrl=require("../../controllers/orderctrl")


route.get("/",(r,s)=>{
    s.render("auth")
})

route.post("/",)


module.exports=route

