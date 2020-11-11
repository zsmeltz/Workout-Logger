const router = require("express").Router();
const Fitness = require("../models/fitness.js");

router.post("/api/fitness", ({ body }, res) => {
  Fitness.create(body)
    .then(dbfitness => {
      res.json(dbfitness);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.post("/api/fitness/bulk", ({ body }, res) => {
  Fitness.insertMany(body)
    .then(dbfitness => {
      res.json(dbfitness);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/api/fitness", (req, res) => {
  Fitness.find({})
    .sort({ date: -1 })
    .then(dbfitness => {
      res.json(dbfitness);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

module.exports = router;