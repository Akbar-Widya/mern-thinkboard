import express from "express"
import notesRoutes from "./routes/notesRoutes.js"
import { connectDB } from "./config/db.js"
import dotenv from "dotenv"
import rateLimiter from "./middleware/rateLimiter.js"

import cors from "cors"

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5001

// middleware
app.use(cors({
   origin: "http://localhost:5173"
}))
app.use(express.json()) // this middleware will parse JSON bodies: req.body
app.use(rateLimiter)

// before send a response, you can do something, that's what middleware is
// app.use((req,res,next) => {
//    // middleware codes here
//    console.log(`Req method is ${req.method} & Req URL is ${req.url}`)

//    // the endpoint codes
//    next()
// })

app.use("/api/notes", notesRoutes)

// start server after DB connection
connectDB().then(() => {
   console.log("Connected to DB, starting server...")
   app.listen(PORT, () => {
      console.log("Server started on PORT:", PORT)
   })
})