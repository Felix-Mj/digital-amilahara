import express  from "express"
import route from "./routes/user.routes.js"
import dotenv from "dotenv"
import bodyParser from "body-parser"
import connectDB from "./config/db.js"
import paymentRoute from "./routes/payment.routes.js"
dotenv.config()

const port = 3000
const app = express()
app.use(bodyParser.json())
connectDB()



app.use("/api/v1", route)
app.use("/api/v2", paymentRoute)

app.listen(port,()=>{
    console.log(`app runing port http://localhost:${port}`)
}) 