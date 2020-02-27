const { Router } = require("express");
const Team = require("./model");
const City = require("../City/model");
const router = new Router();
// rerouting
router.get("/", (req, res) => res.redirect("/teams"));
router.get("/team", (req, res) => res.redirect("/teams"));
// read all teams
router.get("/teams", (req, res, next) => {
  Team.findAll({ include: [City] })
    .then(teams => {
      if (teams) {
        return res.json(teams);
      } else {
        res.status(404).send("No teams exist");
      }
    })
    .catch(next);
});
// create a new team
router.post("/teams", (req, res, next) => {
  Team.create(req.body)
    .then(team => res.status(201).json(team))
    .catch(next);
});
// read team by ID
router.get("/teams/:teamId", (req, res, next) => {
  Team.findByPk(req.params.teamId, { include: [City] })
    .then(team => {
      if (team) {
        return res.status(200).json(team);
      } else {
        res.status(404).send("Team does not exist");
      }
    })
    .catch(next);
});
// update team by ID
router.put("/teams/:teamId", (req, res, next) => {
  Team.findByPk(req.params.teamId, { include: [City] })
    .then(team => {
      if (team) {
        return team.update(req.body).then(team => res.status(200).json(team));
      } else {
        return res.status(404).send("does not exist");
      }
    })
    .catch(next);
});

module.exports = router;
