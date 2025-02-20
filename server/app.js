


const express=require("express");
const app=express();
require('dotenv').config();
const path=require("path");
const bodyParser=require("body-parser")
const cors=require('cors');
const ADMINROUTES=require("./Routes/AdminRoutes")
const PRODUCTROUTES=require("./Routes/ProductRoutes")
const USERROUTES=require("./Routes/UserRoutes")
const PAYMENTROUTES=require("./Routes/payment");
const DB=require("./db");
DB();


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use(cors());

app.use("/admin", ADMINROUTES);
app.use("/product", PRODUCTROUTES);
app.use("/user", USERROUTES);

// Payment Routes
app.use("/api/payment/",PAYMENTROUTES);

const port=process.env.PORT
app.listen(port, ()=>{
    console.log(`Server Run on port ${port}`)
});