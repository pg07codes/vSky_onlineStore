/*created by Pranav Gupta (pg07codes) on 11-08-2018 */

const route=require("express").Router()

route.get("/",(r,s)=>{
    s.render("admin")
})

route.post("/",(r,s)=>{

})

module.exports=route

