const cors=require( 'cors');
const express = require('express');
const mongoose = require('mongoose');
const {createHotel,
  gethotel,
  hotellist,
  hotelOrderList,
} = require('./Controller/hotel');
const {createUser, getUser} = require('./Controller/user');
const {createFood, foodlist, deleteFood} = require('./Controller/food');
const {order, userOrderList} = require('./Controller/order');
const {helloWorld} = require('./Controller/index');


mongoose.connect('mongodb+srv://spark:spark@cluster0.eu88m.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});


const app = express();
const port = process.env.PORT || 9000;
app.use(express.json());
app.use(cors());

app.get('/', helloWorld);
app.delete('/fooddelete', deleteFood);
app.get('/hotelorderlist', hotelOrderList);
app.get('/userorderlist', userOrderList);
app.get('/foodlist', foodlist);
app.get('/getuser', getUser);
app.get('/hotellist', hotellist);
app.get('/gethotel', gethotel);
app.post('/order', order);
app.post('/createfood', createFood);
app.post('/createuser', createUser);
app.post('/createhotel', createHotel);

app.listen(port, () => console.log(`Listening on localhost:${port}`));
