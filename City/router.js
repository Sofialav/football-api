const { Router } = require("express");
const City = require("./model");
const router = new Router();

// read all cities
router.get("/cities", (req, res, next) => {
  City.findAll()
    .then(cities => {
      if (cities) {
        return res.json(cities);
      } else {
        res.status(404).send("No cities exist");
      }
    })
    .catch(next);
});
// create a new city
router.post("/cities", (req, res, next) => {
  City.create(req.body)
    .then(city => res.status(201).json(city))
    .catch(next);
});
// read city by ID
router.get("/cities/:cityId", (req, res, next) => {
  City.findByPk(req.params.cityId)
    .then(city => {
      if (city) {
        return res.status(200).json(city);
      } else {
        res.status(404).send("city does not exist");
      }
    })
    .catch(next);
});
// update city by ID
router.put("/cities/:cityId", (req, res, next) => {
  City.findByPk(req.params.cityId)
    .then(city => {
      if (city) {
        return city.update(req.body).then(city => res.status(200).json(city));
      } else {
        return res.status(404).send("does not exist");
      }
    })
    .catch(next);
});

module.exports = router;
