const mongoose = require('mongoose');

const JobSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  schedule: {
    type: String,
    required: true,
  },
  jobType: {
    type: String,
    enum: ['email', 'numberCrunch', 'dummy'],
    default: 'dummy',
  },
  data: {
    type: mongoose.Schema.Types.Mixed,
  },
  lastRun: {
    type: Date,
  },
  nextRun: {
    type: Date,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Job', JobSchema);
