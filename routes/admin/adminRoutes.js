/*created by Pranav Gupta (pg07codes) on 11-08-2018 */

const route=require("express").Router()
const ctrl=require("../../controllers/itemctrl")


route.get("/",(r,s)=>{
    s.render("admin")
})
route.post("/add",(r,s)=>{
    ctrl.insertNewItem(r,s)
    s.redirect("/admin")
})





module.exports=route

