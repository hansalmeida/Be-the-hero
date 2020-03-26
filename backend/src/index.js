const express = require("express")
const routes = require("./routes.js")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json())

app.use(routes)

console.clear() // Only for clearing the nodemon console while in development mode
app.listen(3333)
