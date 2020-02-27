const Sequelize = require("sequelize");
const db = require("../db");

const City = db.define("city", {
  name: { type: Sequelize.STRING, allowFull: false },
  population: { type: Sequelize.INTEGER }
});

module.exports = City;
