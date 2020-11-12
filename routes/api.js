const router = require("express").Router();
const Workouts = require("../models/workouts");

router.post("/api/workouts", ({ body }, res) => {
  Workouts.create(body)
    .then(dbWorkouts => {
      res.json(dbWorkouts);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.post("/api/workouts/_id", (req, res) => {
  Workouts.find({})
    .then(res => {
    })
    .catch(err => {
      res.status(400).json(err);
    });
      console.log(req.body);
});

router.post("/api/workouts/bulk", ({ body }, res) => {
  Workouts.insertMany(body)
    .then(dbWorkouts => {
      res.json(dbWorkouts);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/api/workouts/range", (req, res) => {
  Workouts.find({})
    .sort({ date: -1 })
    .then(dbWorkouts => {
      res.json(dbWorkouts);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

module.exports = router;