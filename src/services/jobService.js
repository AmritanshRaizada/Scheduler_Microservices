const cron = require('node-cron');
const Job = require('../models/Job');
const { scheduleJob } = require('../jobs/scheduler');

const createJob = async (data) => {
  if (!cron.validate(data.schedule)) {
    throw new Error('Invalid cron expression');
  }
  const job = new Job(data);
  await job.save();
  scheduleJob(job);
  return job;
};

const getAllJobs = async () => {
  return await Job.find();
};

const getJobById = async (id) => {
  const job = await Job.findById(id);
  if (!job) {
    throw new Error('Job not found');
  }
  return job;
};

module.exports = {
  createJob,
  getAllJobs,
  getJobById,
};
