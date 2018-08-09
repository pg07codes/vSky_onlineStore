
const express = require("express")
const path = require("path")
const PORT=process.env.PORT || 8888
const app = express()


app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use("/public", express.static(path.join(__dirname, "public")))

app.get("/", (r, s) => {
    s.send("home page")
})

app.listen(PORT, () =>
    console.log("up at http://localhost:"+PORT)
)