const { Schema, model } = require('mongoose');
const assignmentSchema = require('./Assignment');

// Schema to create Student model
const studentSchema = new Schema(
  {
    first: {
      type: 
      required: 
      max_length: 
    last: {
      type: 
      required: 
      max_length: 
    },
    github: {
      type: 
      required: 
      max_length:
    },
    assignments: 
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const Student = model('student', studentSchema);

module.exports = Student;
