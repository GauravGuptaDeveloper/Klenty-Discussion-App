const express = require("express");
const session = require("express-session");
const cors = require("cors");

const { User } = require("./user/index");
const { Replies } = require("./replies/index");
const { Discussion } = require("./discussion/index");

require("./db/mongoose");

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use(User.router);
app.use(Replies.router);
app.use(Discussion.router);
app.use(
  session({
    secret: process.env.SESSION_KEY,
    cookie: { maxAge: 60000 },
    resave: false,
    saveUninitialized: false,
  })
);

require("./config/passport");

// For Testing pupose whether application is working fine or not.
app.get("/", (req, res) => {
  res.send({
    status: "Ok",
  });
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
