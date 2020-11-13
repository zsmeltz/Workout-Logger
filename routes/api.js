const router = require("express").Router();
const Workouts = require("../models/workouts");

router.post("/api/workouts", ({ body }, res) => {
  console.log(body);
  Workouts.create(body)
    .then(dbWorkouts => {
      res.json(dbWorkouts);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/api/workouts", (req, res) => {
  Workouts.find({})
    .sort({ date: -1 })
    .then(dbWorkouts => {
      res.json(dbWorkouts);
    })
    .catch(err => {
      res.status(400).json(err);
    });
  console.log("getting last workout");
});

router.put("/api/workouts/:id", (req, res) => {
  Workouts.findByIdAndUpdate(req.params.id, { $push: { exercises: req.body }})
    .then(resp => {
      console.log(resp);
      res.json(resp);
    })
    .catch(err => {
      res.status(400).json(err);
    });
      // console.log(req.body);
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
    .then(dbWorkouts => {
      res.json(dbWorkouts);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

module.exports = router;