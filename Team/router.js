const { Router } = require("express");
const Team = require("./model");
const router = new Router();

router.get("/teams", (req, res, next) => {
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

module.exports = router;
