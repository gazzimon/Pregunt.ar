// INICIA EL SERVIDOR

const newLocal = require('express')
const express = newLocal
const app = express()
const path = require(path)


// SETEOS DE PARAMETROS DE LA APP

app.set(port,"8200")
app.set("views", path.join(__dirname, "views"))
app.set("view engine", ejs)

// ROUTES

app.use(require("./routes"))

// STATICS FILES

app.use(express.static(path.join(__dirname, "public")))

app.listen(app.set("port"), () => {
    console.log("SERVER IS RUNNING ON PORT: ", app.get("port"))

}