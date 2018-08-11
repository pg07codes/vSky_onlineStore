
const express = require("express")
const path = require("path")
const hbs=require("express-hbs")
const base64=require("base-64")

const PORT=process.env.PORT || 8888
const app = express()

const orderCtrl=require("./controllers/orderctrl")


app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use("/public", express.static(path.join(__dirname, "public")))

//setting up of the view engine
app.set("view engine","hbs")
app.set("views","views")
app.engine("hbs",hbs.express4({
    defaultLayout: path.join(__dirname, 'views/layouts/default.hbs'),
    partialsDir: path.join(__dirname, 'views/partials'),
    layoutsDir: path.join(__dirname, 'views/layouts')
}))

app.get("/", (r, s) => {
    s.render("home")
})
app.get("/contactus",(r,s)=>{
    s.render("contacts")
})
app.get("/aboutus",(r,s)=>{
    s.render("about")
})

app.post("/placeOrder",(r,s)=>{
    orderCtrl.insertNewOrder(r,s,function(orderSummary){
        let summary=JSON.stringify(orderSummary)
        summary=base64.encode(summary)
        s.redirect(`/?info=${summary}`)
    })

})

app.use("/admin",require("./routes/admin/adminRoutes"))
app.use("/prod",require("./routes/product/productRoutes"))

app.listen(PORT, () =>
    console.log("up at http://localhost:"+PORT)
)