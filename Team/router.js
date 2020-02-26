const { Router } = require("express");
const Team = require("./model");
const router = new Router();

router.get("/team", (req, res, next) => {
  Team.findAll()
    .then(teams => {
      if (teams) {
        return res.json(teams);
      } else {
        res.status(404).send("No teams exist");
      }
    })
    .catch(next);
});

router.post("/team", (req, res, next) => {
  Team.create(req.body)
    .then(team => res.status(201).json(team))
    .catch(next);
});

router.get("/team/:teamId", (req, res, next) => {
  Team.findByPk(req.params.teamId)
    .then(team => {
      if (team) {
        return res.status(200).json(team);
      } else {
        res.status(404).send("Tean does not exist");
      }
    })
    .catch(next);
});
module.exports = router;
