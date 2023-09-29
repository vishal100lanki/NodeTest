import express from "express";
import Router from "./routes/api.js";

const app = express();
app.use(express.json())

app.use(Router);
const port = 5000



app.listen(port,()=>{
    console.log(`server running on the port ${port}`)
})