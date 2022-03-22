import dotenv from 'dotenv'
import express from 'express'
import http from './middleware/http.js'
import v1 from './routes/v1.js'
dotenv.config()

const app = express()
app.use(express.json())

// midlewares loading
app.use(http)

// routes loading
v1(app)

app.listen(process.env.PORT)