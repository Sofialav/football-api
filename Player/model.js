const Sequelize = require("sequelize");
const db = require("../db");
const Team = require("../Team/model");

const Player = db.define("player", {
  name: { type: Sequelize.STRING, allowNull: false },
  number: { type: Sequelize.INTEGER }
});
Player.belongsTo(Team);

module.exports = Player;
