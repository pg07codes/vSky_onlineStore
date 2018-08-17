/*created by Pranav Gupta (pg07codes) on 11-08-2018 */

const route=require("express").Router()
const ctrl=require("../../controllers/itemctrl")
const collegeCtrl=require("../../controllers/collegectrl")
const orderCtrl=require("../../controllers/orderctrl")


route.get("/",(r,s)=>{
    if(r.isAuthenticated())
        s.render("admin")
    else
        s.redirect("/")
})
route.post("/add",(r,s)=>{
    if(r.isAuthenticated())
    {
        ctrl.insertNewItem(r,s)
        s.redirect("/admin")
    }
    else
        s.redirect("/")


})
route.post("/addCollege",(r,s)=>{
    if(r.isAuthenticated())
    {
        collegeCtrl.insertNewCollege(r,s)
        s.redirect("/admin")
    }
    else
        s.redirect("/")
})

route.get("/orders",(r,s)=>{
    if(r.isAuthenticated())
    {
        orderCtrl.getAllOrders(r,s,function(orders){
            s.send(orders)
        })
    }
    else
        s.redirect("/")
})


module.exports=route

