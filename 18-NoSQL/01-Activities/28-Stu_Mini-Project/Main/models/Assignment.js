const { Schema, Types } = require('mongoose');

const assignmentSchema = new Schema(
  {
    assignmentId: {
      type: 
      default: 
    },
    assignmentName: {
      type: 
      required: 
      maxlength: 
      minlength: 
      default: 
    },
    score: {
      type: 
      required: 
      default: 
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

module.exports = assignmentSchema;
