/*created by Pranav Gupta (pg07codes) on 11-08-2018 */

const route=require("express").Router()
const ctrl=require("../../controllers/itemctrl")

route.get("/getAllProducts",(r,s)=>{
    ctrl.getAllItems(r,s,function (products){
        s.send(products)
    })

})

module.exports=route

