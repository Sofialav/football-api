const { Router } = require("express");
const Player = require("./model");
const Team = require("../Team/model");
const City = require("../City/model");
const router = new Router();
// rerouting
router.get("/player", (req, res) => res.redirect("/players"));
// read all players
router.get("/players", (req, res, next) => {
  Player.findAll({ include: [Team, City] })
    .then(players => {
      if (players) {
        return res.json(players);
      } else {
        res.status(404).send("No players exist");
      }
    })
    .catch(next);
});
// create a new player
router.post("/players", (req, res, next) => {
  Player.create(req.body)
    .then(player => res.status(201).json(player))
    .catch(next);
});
// read player by ID
router.get("/players/:playerId", (req, res, next) => {
  Player.findByPk(req.params.playerId, { include: [Team, City] })
    .then(player => {
      if (player) {
        return res.status(200).json(player);
      } else {
        res.status(404).send("player does not exist");
      }
    })
    .catch(next);
});
// update player by ID
router.put("/players/:playerId", (req, res, next) => {
  Player.findByPk(req.params.playerId, { include: [Team, City] })
    .then(player => {
      if (player) {
        return player
          .update(req.body)
          .then(player => res.status(200).json(player));
      } else {
        return res.status(404).send("does not exist");
      }
    })
    .catch(next);
});

module.exports = router;
