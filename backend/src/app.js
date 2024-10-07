import express from "express"
import cors from "cors"
import cookieParser from "cookie-parse"
const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))
//app.use(cookieParser())


import productsRouter from  './routes/products.route.js'
import usersRouter from "./routes/users.route.js"

app.use("/api/v1/product", productsRouter)
app.use("/api/v1/users", usersRouter)

export { app }