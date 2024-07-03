import mongoose from "mongoose";

export const  connectDB = async () =>{

    await mongoose.connect('mongodb+srv://elmeftahioussama:aU7tlHujQPUmDn1e@cluster0.yisejny.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0//food-del').then(()=>console.log("DB Connected"));
   
}