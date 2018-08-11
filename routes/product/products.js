/*created by Pranav Gupta (pg07codes) on 11-08-2018 */

const route=require("express").Router()
const ctrl=require("../../controllers/itemctrl")

route.get("/getAllProducts",(r,s)=>{
    ctrl.getAllItems(r,s,function (products){
        s.send(products)
    })
})

route.get("/details/:id",(r,s)=>{
    ctrl.getParticularItem(r.params.id,function(data){
        s.render("productDetails",{p:data})
    })
})

module.exports=route

