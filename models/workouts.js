const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Date, 
    default: Date.now
  },
  exercises: [
    {
      type: {
        type: String,
        trim: true,
        required: "Enter exercise type",
      },
      name: {
        type: String,
        trim: true,
        required: "Enter exercise name",
      },
      duration: {
        type: Number,
        required: "Enter the duration of the exercise",
      },
      weight: {
        type: Number,
        required: "Enter resistance of weight",
      },
      reps: {
        type: Number,
        required: "Enter amount of reps",
      },
      sets:  {
        type: Number,
        required: "Enter amount of sets",
      },
      distance:  {
        type: Number,
        required: "Enter total distance gone of exercise",
      }
    }
  ]
});

const Workouts = mongoose.model("Workout", workoutSchema);

module.exports = Workouts;
