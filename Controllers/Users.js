const model = require("../models/Users");
const Users = model.Users;
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.signUp = async (req, res) => {
  try {
    let alreadyUser = await Users.findOne({ email: req.body.email });
    if (alreadyUser) {
      return res.status(400).json({
        success: false,
        errors: "User already exists",
      });
    }
    
    const hashedPassword = await bcrypt.hash(req.body.password, 12);

    const user = new Users({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });

    await user.save();

    const data = {
      user: {
        id: user.id,
      },
    };

    const token = jwt.sign(data, 'Secret-ecom', { expiresIn: '1h' });

    res.status(201).json({
      success: true,
      token,
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
