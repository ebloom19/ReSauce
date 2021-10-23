const pg = require("pg");

const db = new pg.Pool({
  database: "meal_reboot",
});

module.exports = db;