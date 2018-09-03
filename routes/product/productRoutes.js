/*created by Pranav Gupta (pg07codes) on 11-08-2018 */

const route=require("express").Router()
const ctrl=require("../../controllers/itemctrl")
const collegeCtrl=require("../../controllers/collegectrl")

route.get("/getAllProducts",(r,s)=>{
    ctrl.getAllItems(r,s,function (products){
        s.send(products)
    })
})

route.get("/getAllColleges",(r,s)=>{
    collegeCtrl.getAllColleges(r,s,function (colleges){
        s.send(colleges)
    })
})
route.get("/buy/:id",(r,s)=>{
    ctrl.getParticularItem(r.params.id,function(data){
        s.render("buying",{p:data})
    })
})
route.get("/sameCollegeProducts",(r,s)=>{
    ctrl.getInfoOfItemsExceptOne(r.query.cId,r.query.pId,function(products){
            s.send(products)
    })
})
route.post("/filter",(r,s)=>{
    ctrl.getItemByCollege(r.body.college,function (items){
        s.send(items)
    })
})
route.get("/mycart",(r,s)=>{
    s.render("cart")
})

route.get("/details/:id",(r,s)=>{
    ctrl.getParticularItem(r.params.id,function(data){
        s.render("productDetails",{p:data,StringifiedP:JSON.stringify(data)})
    })
})

module.exports=route

