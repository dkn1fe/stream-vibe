const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const authMiddleware = require("../middleware/authMiddleware");
const { body, validationResult } = require("express-validator");
const User = require("../models/user");
const dotenv = require("dotenv");
const cors = require("cors");
const authController = require("../controller/authController");

dotenv.config();
const jwtSecret = process.env.JWT_SECRET;

router.use(cors());


// Register route
router.post(
  "/register",
  [
    body("username")
      .trim()
      .notEmpty()
      .withMessage("Username cannot be empty")
      .isLength({ min: 3 })
      .withMessage("Username must be at least 3 characters long"),
    body("email").isEmail().withMessage("Email is invalid"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters long"),
  ],
  async (req, res) => {
    const { username, email, password } = req.body;

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      let user = await User.findOne({ email });

      if (user) {
        return res.status(400).json({ msg: "User already exists" });
      }

      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      user = new User({
        username,
        email,
        password: hashedPassword,
      });

      await user.save();

      const payload = {
        user: {
          id: user.id,
        },
      };

      jwt.sign(payload, jwtSecret, { expiresIn: "24h" }, (err, token) => {
        if (err) console.log(err.message);
        res.json({ token, user });
      });
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error");
    }
  }
);

// Login route
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    let user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ msg: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ msg: "Invalid credentials" });
    }

    const payload = {
      user: {
        id: user.id,
      },
    };

    jwt.sign(payload, jwtSecret, { expiresIn: "24h" }, (err, token) => {
      if (err) console.log(err.message);
      res.json({ token, user: { id: user._id, username: user.username, phone: user.phone } });
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: "Server Error" });
  }
});

// Route for getting current user data
router.get("/user", authMiddleware, async (req, res) => {
  try {
    const userId = req.user.id;

    const user = await User.findById(userId).select("-password");

    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: "Server Error" });
  }
});

// Route for getting user data by ID
router.get("/user/:id", authMiddleware, async (req, res) => {
  try {
    const userId = req.params.id;

    const user = await User.findById(userId).select("-password");

    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: "Server Error" });
  }
});

router.patch(
  "/user/name",
  [
    authMiddleware,
    body("name")
      .trim()
      .notEmpty()
      .withMessage("Name cannot be empty")
      .isLength({ min: 3 })
      .withMessage("Name must be at least 3 characters long"),
  ],
  authController.updateName
);

router.patch(
  "/user/phone",
  [
    authMiddleware,
    body("phone")
      .trim()
      .notEmpty()
      .withMessage("Phone cannot be empty")
      .isLength({ min: 10, max: 15 })
      .withMessage("Phone must be between 10 and 15 characters long"),
  ],
  authController.updatePhone
);

// router.patch("/user/img", authMiddleware, authController.updateImage);

router.patch(
  "/user/email",
  [
    authMiddleware,
    body("email")
      .isEmail()
      .withMessage("Email is invalid")
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    authController.updateEmail(req, res);
  }
);

module.exports = router;