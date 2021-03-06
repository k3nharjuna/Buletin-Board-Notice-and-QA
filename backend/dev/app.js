if (process.env.NODE_ENV !== 'production') {
  require("dotenv").config()
}

const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const cors = require('cors')
const routes = require('./routes')
const errorHandler = require("./middlewares/errorhandler.js")

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(routes)

app.use(errorHandler)

app.listen(PORT, () => {
  console.log('listening on port ', PORT)
})
