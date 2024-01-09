import express from "express";
import http from "http";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compression from "compression";
import cors from "cors";
import mongoose from "mongoose";
import router from "./router";

const dotenv = require('dotenv');

const app = express();
dotenv.config();
app.use(
  cors({
    credentials: true,
  })
);

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

const server = http.createServer(app);

server.listen(process.env.PORT || 8080, () => {
  console.log("Server running at port 8080");
});

// Mongo DB Connection string
const MONGO_URL = process.env.ConnectionString;

mongoose.Promise = Promise;
mongoose.connect(MONGO_URL); // Connect Mongo DB with connection string
mongoose.connection.on('error', (error: Error) => console.log(error)); // Use call back here, If error comes it will display on console

// app.use('/', router());

app.get('/',(req,res)=>{
  res.send("Hello world..")
})
