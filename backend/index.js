import express  from "express"
import route from "./routes/user.routes.js"
import DB from "./config/db.js"
import dotenv from "dotenv"
dotenv.config()

const port = 3000
const app = express()
DB()


app.use("/api/v1", route)
app.listen(port,()=>{
    console.log(`app runing port http://localhost:${port}`)
}) 