import express  from "express"
import route from "./routes/user.routes.js"
import dotenv from "dotenv"
import bodyParser from "body-parser"
dotenv.config()

const port = 3000
const app = express()
app.use(bodyParser.json())

app.use("/api/v1", route)
app.listen(port,()=>{
    console.log(`app runing port http://localhost:${port}`)
}) 