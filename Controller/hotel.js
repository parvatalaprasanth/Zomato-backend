const Hotel = require('../Models/hotel');


const createHotel = async (req, res) => {
  try {
    const hotel = await Hotel.find({'email': req.body.email});
    if (hotel.length===0) {
      const newhotel = await new Hotel(req.body);
      await newhotel.save();
      res.send('success');
    } else {
      res.send('fail');
    }
  } catch (err) {
    console.log(err);
    res.send(err);
  }
};

const gethotel = (req, res) => {
  console.log('hi');
  const email=req.query.email;
  const password=req.query.password;
  console.log(email[0]);
  console.log(password[0]);
  Hotel.find(
      {'email': email[0],
        'password': password[0],
      }, function(err, hoteldb) {
        if (err) {
          res.send('not ok');
          console.log('not ok ');
          res.end();
        } else {
          console.log(hoteldb.length);
          if (hoteldb.length!==0) {
            res.send(hoteldb);
          } else {
            res.send('fail');
          }
        }
      });
};

const hotellist = (req, res) => {
  console.log('hotellist');
  Hotel.find({}, function(err, hoteldb) {
    if (err) {
      res.send('not ok');
      console.log('not ok ');
      res.end();
    } else {
      console.log(hoteldb.length);
      if (hoteldb.length!==0) {
        res.send(hoteldb);
      } else {
        res.send('fail');
      }
    }
  });
};

const hotelOrderList = (req, res) => {
  console.log('userorderlist');
  const hotelemail=req.query.hotelemail;
  console.log(hotelemail);
  Order.find({'hotelemail': hotelemail}, function(err, orderdb) {
    if (err) {
      res.send('not ok');
      console.log('not ok ');
      res.end();
    } else {
      console.log(orderdb.length);
      if (orderdb.length!==0) {
        res.send(orderdb);
      } else {
        res.send('fail');
      }
    }
  });
};


module.exports = {
  createHotel,
  gethotel,
  hotellist,
  hotelOrderList,
};
