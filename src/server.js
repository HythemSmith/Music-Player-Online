const express = require("express")
const app = express()
const db = require('./database/index')
const route = require('./routes/index')

const port = 3000

db.connect()

route(app)

app.listen(port, () => console.log("SERVER STARTED"))