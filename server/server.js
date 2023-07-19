const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const mongoose = require('mongoose')
const router = require('./route/route')
require('dotenv').config()


const PORT = process.env.PORT || 5800
const app = express()

app.use(express.json())
app.use(cookieParser())
app.use(cors({
    credentials:true,
    origin: process.env.CLIENT_URL,

}))
app.use('/quiz', router)

const start = async () => {
    try {
        await mongoose.connect(process.env.DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        app.listen(PORT, () => console.log(`Сервер запущен на порту - ${PORT}`))

    } catch (e) {
        console.log(e)
    }
}

start()