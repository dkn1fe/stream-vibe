const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { validationResult } = require("express-validator");
const dotenv = require("dotenv");
dotenv.config();
const jwtSecret = process.env.JWT_SECRET;

const generateAccessToken = (userId) => {
  const payload = {
    user: {
      id: userId,
    },
  };
  return jwt.sign(payload, jwtSecret, { expiresIn: "24h" });
};

class AuthController {
  async registration(req, res) {
    const { username, email, password } = req.body;

    try {
      let user = await User.findOne({ email });

      if (user) {
        return res.status(400).json({ message: "User already exists" });
      }

      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      user = new User({
        username,
        email,
        password: hashedPassword,
      });

      await user.save();

      const token = generateAccessToken(user._id);

      res.status(201).json({ token, user: { id: user._id, username: user.username, email: user.email } });
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error");
    }
  }

  async login(req, res) {
    const { email, password } = req.body;

    try {
      let user = await User.findOne({ email });

      if (!user) {
        return res.status(400).json({ message: "Invalid credentials" });
      }

      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res.status(400).json({ message: "Invalid credentials" });
      }

      const token = generateAccessToken(user._id);

      res.json({ token, user: { id: user._id, username: user.username, email: user.email } });
    } catch (err) {
      console.error(err.message);
      res.status(500).json({ message: "Server Error" });
    }
  }
  async getUsers(req, res) {
    try {
        const users = await User.find()
        res.json(users)
    } catch (e) {
        console.log(e)
    }
}
}

module.exports = new AuthController();