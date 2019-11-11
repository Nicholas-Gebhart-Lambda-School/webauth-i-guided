const router = require("express").Router();
const bcrypt = require("bcryptjs");

const authRouter = require("../auth/auth-router.js");
const usersRouter = require("../users/users-router.js");

router.use("/auth", authRouter);
router.use("/users", usersRouter);

router.get("/", (req, res) => {
  res.json({ api: "It's alive" });
});

router.post("/hash", (req, res) => {
  // read password
  // hash
  // return to user in object that looks like:
  // { password: 'original', hash: 'hashed'}
  const credentials = req.body;
  const hash = bcrypt.hashSync(credentials.password, 14);
  credentials.hash = hash;
  res.status(200).json(credentials);
});

module.exports = router;
