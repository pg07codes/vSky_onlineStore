/*created by Pranav Gupta (pg07codes) on 11-08-2018 */

const route=require("express").Router()
const ctrl=require("../../controllers/itemctrl")
const collegeCtrl=require("../../controllers/collegectrl")
const orderCtrl=require("../../controllers/orderctrl")


route.get("/",(r,s)=>{
    s.render("admin")
})
route.post("/add",(r,s)=>{
    ctrl.insertNewItem(r,s)
    s.redirect("/admin")
})
route.post("/addCollege",(r,s)=>{
    collegeCtrl.insertNewCollege(r,s)
    s.redirect("/admin")
})
route.get("/orders",(r,s)=>{
    orderCtrl.getAllOrders(r,s,function(orders){
        s.send(orders)
    })
})


module.exports=route

