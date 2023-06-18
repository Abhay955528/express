const User = require('../models/user');
console.log(User.findAll);


const addUsers = async (req, res, next) => {
  try {
    const Name = req.body.name;
    const Email = req.body.email;
    const phone = req.body.number;

    const uId = await User.create({
      name: Name,
      email: Email,
      phonenumber: phone,
    });

    console.log(uId);

    res.status(201).json({ newUserDetail: uId });
  } catch (err) {
    res.status(500).json({
      error: err,
    });
  }
};
const getUsers = async (req, res, next) => {
  try {
    const user = await User.findAll();
    res.status(200).json({ allUsers: user });
  } catch (error) {
    console.log("Get user is falling", JSON.stringify(error));
    res.status(500).json({ error: error });
  }
};
const deleteUsers = async (req, res, next) => {
  try {
    const uId = req.params.id;
    console.log(uId);
    await User.destroy({ where: { id: uId } });
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

module.exports = {
  addUsers,
  getUsers,
  deleteUsers,
};
