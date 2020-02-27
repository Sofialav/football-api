const Sequelize = require("sequelize");
const db = require("../db");
const City = require("../City/model");

const Team = db.define("team", {
  name: { type: Sequelize.STRING, field: "team_name", allowNull: false }
});
Team.belongsTo(City);

module.exports = Team;
