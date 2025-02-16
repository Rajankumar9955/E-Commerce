

const mongoose=require("mongoose");

module.exports=()=>{
    try {
        mongoose.connect(process.env.DATABASE)
        console.log("DATABASE CONNECTED!")
    } catch (error) {
        console.log(error);
        console.log("Couldn't Connect to DATABASE");
    }
}