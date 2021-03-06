const path = require("path");
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

if (process.env.NODE_ENV === "production") {
  // Serve any static files
  app.use(
    express.static(path.join(__dirname, "Klenty-Discussion-Frontend/build"))
  );
  // Handle React routing, return all requests to React app
  app.get("*", function (req, res) {
    res.sendFile(
      path.join(__dirname, "Klenty-Discussion-Frontend/build", "index.html")
    );
  });
}

// For Testing pupose whether application is working fine or not.
app.get("/", (req, res) => {
  res.send({
    status: "Ok",
  });
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
