import express  from "express"
const port = 3000
const app = express()
app.listen(port,()=>{
    console.log(`your app runing port ${port}`)
}) 