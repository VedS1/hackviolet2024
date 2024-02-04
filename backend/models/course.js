const { listenerCount } = require("events");
const mongoose = require ("mongoose");
const CourseSchema = new mongoose.Schema({
  courseName: {
      type: String,
      required: false,
  },
  courseDate: {
      type: String,
      required: false,
  },
  courseDescription: {
      type: String,
      required: false
  },
  courseImage: {
      type: String,
      required: false,
  },

});

// eslint-disable-next-line no-undef
courseDb = mongoose.createConnection("mongodb+srv://vedsoolgiri:OnlyLetters@cluster0.8nnfpb9.mongodb.net/?retryWrites=true&w=majority");

// eslint-disable-next-line no-undef
const Course = userDb.model("Course", CourseSchema);
module.exports = Course;
