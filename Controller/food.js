const Food = require('../Models/food');

const createFood = async (req, res) => {
  try {
    const food = await Food.find({'name': req.body.name});
    if (food.length===0) {
      const newfood = new Food(req.body);
      await newfood.save();
      res.send('success');
    } else {
      res.send('fail');
    }
  } catch (err) {
    res.send('fail');
  }
};

const foodlist = (req, res) => {
  console.log('foodlist');
  const email=req.query.email;
  console.log(email);
  Food.find({'email': email}, function(err, fooddb) {
    if (err) {
      res.send('not ok');
      console.log('not ok ');
      res.end();
    } else {
      console.log(fooddb.length);
      if (fooddb.length!==0) {
        res.send(fooddb);
      } else {
        res.send('fail');
      }
    }
  });
};

const deleteFood = (req, res) => {
  console.log(req.body);
  Food.remove(req.body, function(err, fooddb) {
    if (err) {
      res.send('not ok');
      console.log('not ok ');
      res.end();
    } else {
      console.log(fooddb.length);
      if (fooddb.length!==0) {
        res.send(fooddb);
        console.log('success');
      } else {
        res.send('fail');
      }
    }
  });
};

module.exports = {
  createFood,
  foodlist,
  deleteFood,
};
