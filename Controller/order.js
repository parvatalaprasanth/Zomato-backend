const Order = require('../Models/order');

const order = async (req, res) => {
  try {
    const neworder = new Order(req.body);
    await neworder.save();
    res.send('success');
  } catch (err) {
    res.send('fail');
  };
};

const userOrderList = (req, res) => {
  console.log('userorderlist');
  const useremail=req.query.useremail;
  console.log(useremail);
  Order.find({'useremail': useremail}, function(err, orderdb) {
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
  order,
  userOrderList,
};
