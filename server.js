const cors=require( "cors");
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');


mongoose.connect('mongodb+srv://spark:spark@cluster0.eu88m.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});

const Hotel = mongoose.model('Hotel', { email: String, password: String, type: String , name :String, longitude:String, latitude:String,imageURL:String,rating:String});
const User = mongoose.model('User', { email: String, password: String, address: String ,longitude:String, latitude:String});
const Food = mongoose.model('Food', { email: String, name: String, price: String ,type:String, imageURL:String,rating:String});
const Order = mongoose.model('Order', {useremail:String,useraddress:String,hotelemail:String,hotelname:String,time:String,obj:Object});
//[{_id:String,email:String,type:String,name:String,imageURL:String,rating:String,price:String,__v:Number}]


const app = express();
const port = process.env.PORT || 9000;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => res.status(200).send("hello world"));

app.delete("/fooddelete", (req, res) => {
    console.log(req.body);
    Food.remove(req.body, function (err, fooddb) {
        if (err){
            res.send("not ok");
            console.log("not ok ");
            res.end();
        }
        else{
            console.log(fooddb.length)
            if(fooddb.length!==0){
                res.send(fooddb);
                console.log("success");
            }
            else{
                res.send("fail");
            }
        }
        
    })
    
  });

  app.get("/hotelorderlist", (req, res) => {
    console.log("userorderlist");
    const hotelemail=req.query.hotelemail;
    console.log(hotelemail);
    Order.find({"hotelemail":hotelemail}, function (err, orderdb) {
        if (err){
            res.send("not ok");
            console.log("not ok ");
            res.end();
        }
        else{
            console.log(orderdb.length)
            if(orderdb.length!==0){
                res.send(orderdb);
            }
            else{
                res.send("fail");
            }
        }
        
    })
    
  }); 

  app.get("/userorderlist", (req, res) => {
    console.log("userorderlist");
    const useremail=req.query.useremail;
    console.log(useremail);
    Order.find({"useremail":useremail}, function (err, orderdb) {
        if (err){
            res.send("not ok");
            console.log("not ok ");
            res.end();
        }
        else{
            console.log(orderdb.length)
            if(orderdb.length!==0){
                res.send(orderdb);
            }
            else{
                res.send("fail");
            }
        }
        
    })
    
  }); 

app.get("/foodlist", (req, res) => {
    console.log("foodlist");
    const email=req.query.email;
    console.log(email);
    Food.find({"email":email}, function (err, fooddb) {
        if (err){
            res.send("not ok");
            console.log("not ok ");
            res.end();
        }
        else{
            console.log(fooddb.length)
            if(fooddb.length!==0){
                res.send(fooddb);
            }
            else{
                res.send("fail");
            }
        }
        
    })
    
  });



app.get("/getuser", (req, res) => {
    console.log("hi");
    const email=req.query.email;
    const password=req.query.password;
    console.log(email[0]);
    console.log(password[0]);
    User.find({"email":email[0],"password":password[0]}, function (err, userdb) {
        if (err){
            res.send("not ok");
            console.log("not ok ");
            res.end();
        }
        else{
            console.log(userdb.length)
            if(userdb.length!==0){
                res.send(userdb);
            }
            else{
                res.send("fail");
            }
        }
        
    })
    
  });

  app.get("/hotellist", (req, res) => {
    console.log("hotellist");
    Hotel.find({}, function (err, hoteldb) {
        if (err){
            res.send("not ok");
            console.log("not ok ");
            res.end();
        }
        else{
            console.log(hoteldb.length)
            if(hoteldb.length!==0){
                res.send(hoteldb);
            }
            else{
                res.send("fail");
            }
        }
        
    })
    
  });


app.get("/gethotel", (req, res) => {
    console.log("hi");
    const email=req.query.email;
    const password=req.query.password;
    console.log(email[0]);
    console.log(password[0]);
    Hotel.find({"email":email[0],"password":password[0]}, function (err, hoteldb) {
        if (err){
            res.send("not ok");
            console.log("not ok ");
            res.end();
        }
        else{
            console.log(hoteldb.length)
            if(hoteldb.length!==0){
                res.send(hoteldb);
            }
            else{
                res.send("fail");
            }
        }
        
    })
    
  });

  app.post("/order", function(req, res){
    console.log(req.body);            
    const neworder = new Order(req.body);
    neworder.save().then(() => console.log('success'));
    res.send("success");
    console.log("ok")
  });

  app.post("/createfood", function(req, res){
    console.log(req.body);
    Food.find({"name":req.body.name }, function (err, fooddb) {
        if (err){
            res.send("not ok");
            console.log("not ok ");
            res.end();
        }
        else{
            console.log(fooddb.length)
            if(fooddb.length===0){
                const newfood = new Food(req.body);
                newfood.save().then(() => console.log('success'));
                res.send("success");
            }
            else{
                res.send("fail");
            }
        }
        
    })
  });

app.post("/createuser", function(req, res){
    console.log(req.body);
    User.find({"email":req.body.email }, function (err, userdb) {
        if (err){
            res.send("not ok");
            console.log("not ok ");
            res.end();
        }
        else{
            console.log(userdb.length)
            if(userdb.length===0){
                const newuser = new User(req.body);
                newuser.save().then(() => console.log('success'));
                res.send("success");
            }
            else{
                res.send("fail");
            }
        }
        
    })
  });



app.post("/createhotel", function(req, res){
    console.log(req.body);
    Hotel.find({"email":req.body.email }, function (err, hoteldb) {
        if (err){
            res.send("not ok");
            console.log("not ok ");
            res.end();
        }
        else{
            console.log(hoteldb.length)
            if(hoteldb.length===0){
                const newhotel = new Hotel(req.body);
                newhotel.save().then(() => console.log('success'));
                res.send("success");
            }
            else{
                res.send("fail");
            }
        }
        
    })
  });

app.listen(port, () => console.log(`Listening on localhost:${port}`));