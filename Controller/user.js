const User = require('../Models/user');

const createUser = async (req, res) => {
  try {
    const user = await User.find({'email': req.body.email});
    if (user.length===0) {
      const newuser = new User(req.body);
      await newuser.save();
      await res.send('success');
    } else {
      res.send('fail');
    }
  } catch (err) {
    res.send('fail');
  }
};

const getUser = (req, res) => {
  console.log('hi');
  const email=req.query.email;
  const password=req.query.password;
  console.log(email[0]);
  console.log(password[0]);
  User.find(
      {'email': email[0],
        'password': password[0],
      }, function(err, userdb) {
        if (err) {
          res.send('not ok');
          console.log('not ok ');
          res.end();
        } else {
          console.log(userdb.length);
          if (userdb.length!==0) {
            res.send(userdb);
          } else {
            res.send('fail');
          }
        }
      });
};

module.exports = {
  createUser,
  getUser,
};

