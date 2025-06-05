import express from "express";
import dotenv from "dotenv";
import {connectDB} from './config/db.js';


dotenv.config();

const app = express();

app.get("/products", (req,res) => {});

console.log(process.env.MONGO_URI);



app.listen(5000, () => {
    connectDB();
    console.log("Server started at 5000 hello");
});



// mongo creds
// username: chauhanajayvikram1992
// mdlmU9SbGm3OaR3N
// connection string: mongodb+srv://chauhanajayvikram1992:mdlmU9SbGm3OaR3N@cluster0.qrbruid.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0