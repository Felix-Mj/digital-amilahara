import express  from "express"
import route from "./routes/user.routes.js"
import dotenv from "dotenv"
import bodyParser from "body-parser"
import connectDB from "./config/db.js"
import paymentRoute from "./routes/payment.routes.js"
import  localtunnel  from "localtunnel";
import blogRoute from "./routes/blog.routes.js"
import sliderRoute from "./routes/slider.routes.js"
dotenv.config()

const port = 3000
const app = express()
app.use(bodyParser.json())
connectDB()



app.use("/api/v1", route)
app.use("/api/v1", sliderRoute)
app.use("/api/v1", blogRoute)
app.use("/api/v2", paymentRoute)

app.listen(port, async ()=>{
    console.log(`app runing port http://localhost:${port}`)
    // only payment test purpose use this code
    // const tunnel = await  localtunnel({ port: 3000 });
    // console.log(tunnel.url)
}) 
