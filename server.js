import express from "express";
import mongoose, { mongo } from "mongoose";
import cors from 'cors'
import dotenv from 'dotenv';
import bodyparser from 'body-parser'
import noteRouter from "./routes/note.js";
dotenv.config()
mongoose.connect(process.env.mongoConnectionUrl)
const app = express()
app.use(bodyparser.json())
app.use(cors())
app.use('/', noteRouter)
app.listen(process.env.port, () => {
    console.log(`started on http://localhost:${process.env.port}`)
})