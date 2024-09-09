import express from "express";
import AuthRoutes from "./routes/auth.routes.js";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from 'cors';
const app = express();
const port =3040;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

mongoose.connect("mongodb+srv://srmuhil06:06dec2004@cluster0.ypazd7t.mongodb.net/data?retryWrites=true&w=majority&appName=Cluster0", 
        { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Database connected");
    })
    .catch((err) => {
        console.log(err.message);
    });
app.get("/", (req, res) => {
    res.send("Welcome to server");
});
app.use("/", AuthRoutes)
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
