const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
  type: {
    type: String,
    trim: true,
    required: "Enter your work-out type"
  },
  name: {
    type: String,
    trim: true,
    required: "Enter the name of the exercise"
  },
  distance: {
    type: Number,
    required: "Distance gone"
  },
  duration: {
      type: Number,
      required: "Enter the duration of the exercise"
  },
  weight: {
      type: Number,
      reqiured: "Enter your current weight"
  },
  reps: {
      type: Number,
      required: "Enter how many reps done"
  },
  sets: {
      type: Number,
      required: "Enter the number of sets done"
  },
  date: {
    type: Date,
    default: Date.now
  }

});

const Exercise = mongoose.model("exercise", exerciseSchema);

module.exports = Exercise;