const express = require("express");

const dotenv = require("dotenv");
dotenv.config();

const db = require("./database/db"); // The postgres connection we already have
const expressSession = require("express-session"); // Express library to handle sessions


// We need to store sessions in the DB, otherwise it'll forget them all when you restart the server.
const connectPgSimple = require("connect-pg-simple");
const pgSession = connectPgSimple(expressSession);

const app = express();
const port = 3000;

app.use(
    expressSession({
      store: new pgSession({
        pool: db, // Connects to our postgres db
        createTableIfMissing: true, // Creates a session table in your database (go look at it!)
      }),
      secret: process.env.EXPRESS_SESSION_SECRET_KEY,
    })
  );


app.use(express.json());
app.use(express.static("client"));


app.listen(port, () => {
    console.log(`listening on port  http://localhost:${port}`);
});