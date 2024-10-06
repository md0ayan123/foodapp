const mongoose = require('mongoose');
const url = 'mongodb+srv://mdayan835:YT3uP7v9dYkeWYi6@foodengine.zy9ur7j.mongodb.net/foodenginemern?retryWrites=true&w=majority&appName=foodengine'



    //  mongoose.connect(url).then((res)=>{
    //   console.log(" Connected successfully to MongoDB!");
   
    //     const connection=mongoose.connection.collection("food_items")
    //     connection.find({}).toArray(function(err,data){
    //           console.log(data);
    //     })
    //  .catch (err =>{
    //     console.error("Error connecting to MongoDB:", err);
         
    // })    
const mongodb=async()=>{
    console.log("1")
try{
    await mongoose.connect(url)
    console.log("connected mongoose successfully")
    let foodItems=await mongoose.connection.db.collection("food_items");
    let foodCategory=await mongoose.connection.db.collection("foodCategory");
    // console.log("3")
    // let data=foodItems.find({}).toArray(function(err,data){
    //     console.log("4",err)
    //     if(err) console.log(err)
    //     else{
    //         global.food_items=data
    //         console.log(global.food_items)
    //         console.log("5")
    //     }
    // })
    let data=await foodItems.find({}).toArray();
    let categoryData=await foodCategory.find({}).toArray();
    
    global.food_items=data;
    global.foodCategory=categoryData;
    // console.log(global.foodCategory);
    // console.log(global.food_items);
}catch(err){
    console.log(err)
}
}
mongodb()
     
    

      
    
     
   


 

module.exports=mongoose;