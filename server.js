
const express = require("express")
const session = require("express-session")
const path = require("path")
const hbs=require("express-hbs")
const base64=require("base-64")
const config=require("./config.json").SECRET
const randomGen=require("./controllers/itemctrl").randomGen
const passport=require("./passport")


const PORT=process.env.PORT || 8888
const app = express()

const orderCtrl=require("./controllers/orderctrl")


app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(session({
    secret: config.secret,
    resave: false,
    saveUninitialized:false,
}))
app.use("/public", express.static(path.join(__dirname, "public")))
app.use(passport.initialize())
app.use(passport.session())





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
        let summary=base64.encode(JSON.stringify(orderSummary))
        s.redirect(`/orderDetails?info=${summary}`)
    })

})
app.get("/orderDetails",(r,s)=>{
    let temp;
    if(r.query.info===undefined)
        s.redirect("/")
    else{
        try{
            temp=JSON.parse(base64.decode(r.query.info)).refNumber
            console.log(temp)
        }
        catch(e){
            console.log("error")
            s.redirect("/")
        }
        s.send(`<div style="width:600px; margin:15% auto;">
                <h1 >PLEASE NOTE YOUR PURCHASE REFERENCE NUMBER: <i>${temp}</i> </h1>
                <p>close this tab for security reasons.</p>
                </div>
`)
    }

})

app.use("/auth",require("./routes/auth/authRoutes"))
app.use("/admin",require("./routes/admin/adminRoutes"))
app.use("/prod",require("./routes/product/productRoutes"))

// in case of invalid request redirect to home
app.use((r,s)=>{
    s.redirect("/")
})
app.listen(PORT, () =>
    console.log("up at http://localhost:"+PORT)
)