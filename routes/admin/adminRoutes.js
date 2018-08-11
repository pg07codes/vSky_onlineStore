/*created by Pranav Gupta (pg07codes) on 11-08-2018 */

const route=require("express").Router()
const item=require("../../db/models").item

route.get("/",(r,s)=>{
    s.render("admin")
})





module.exports=route

