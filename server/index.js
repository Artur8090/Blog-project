import express, { json } from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import authRouter from "./routes/auth.js";

const app = express();

dotenv.config();


// Constants
const PORT = process.env.PORT || 3001;
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_NAME = process.env.DB_NAME;

// Middleware
app.use(cors())
app.use(express.json());
app.get("/", (req, res) => {
    res.json({ message: "All is fine" });
})

//Routes

app.use("/api/auth", authRouter)

app.use("/api/post", postRouter)
async function start() {
    try{
        await mongoose.connect(
            `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_NAME}.gaxvoxd.mongodb.net/?retryWrites=true&w=majority&appName=${DB_NAME}`
            
        )

        app.listen(PORT, () => {
            console.log(`Server started on port ${PORT}`);
        });
    } catch (error) {
        console.log(error);
    }
    
}
start()