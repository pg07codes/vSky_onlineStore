
const express = require("express")
const path = require("path")
const hbs=require("express-hbs")
const PORT=process.env.PORT || 8888
const app = express()


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
app.use("/admin",require("./routes/admin/adminRoutes"))

app.listen(PORT, () =>
    console.log("up at http://localhost:"+PORT)
)