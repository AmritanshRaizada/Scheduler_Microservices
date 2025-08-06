const cron = require('node-cron');
const parser = require('cron-parser');
const Job = require('../models/Job');

const scheduledJobs = new Map();

const scheduleJob = (job) => {
  const cronJob = cron.schedule(job.schedule, async () => {
    console.log(`Running job: ${job.name}`);
    try {
      const interval = parser.parseExpression(job.schedule);
      job.lastRun = new Date();
      job.nextRun = interval.next().toDate();
      await job.save();
    } catch (err) {
      console.error(`Error running job ${job.name}:`, err);
    }
  });

  scheduledJobs.set(job._id.toString(), cronJob);
};

const loadAllJobs = async () => {
  try {
    const jobs = await Job.find();
    jobs.forEach((job) => {
      scheduleJob(job);
    });
    console.log('All jobs loaded and scheduled.');
  } catch (err) {
    console.error('Error loading jobs:', err);
  }
};

module.exports = {
  scheduleJob,
  loadAllJobs,
};
