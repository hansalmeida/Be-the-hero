const express = require("express")
const routes = require("./routes.js")

const app = express()

app.use(express.json())

app.use(routes)

console.clear() // Only for clearing the nodemon console while in development mode
app.listen(3333)
