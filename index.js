const express = require("express")
const app = express();
const router = require('./routes/book.js')
const path = require('path')

const mongoose = require('mongoose')


app.use(express.json());

mongoose
.connect('mongodb://127.0.0.1:27017/bookify-express')
.then(()=>console.log("Mongodb connected..."))
.catch((err) => console.log("Error while connecting:", err.message))

app.set("view engine","ejs")
app.set("views",path.resolve("views"))
app.use(express.static(path.resolve("./public")))

app.use("/",router);

app.listen(8000,()=>{console.log("Server is running on the port 8000...")})