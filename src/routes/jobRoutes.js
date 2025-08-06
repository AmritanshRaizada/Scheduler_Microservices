const express = require('express');
const router = express.Router();
const {
  createJob,
  getAllJobs,
  getJobById,
} = require('../controllers/jobController');

/**
 * @swagger
 * /jobs:
 *   get:
 *     summary: Get all scheduled jobs
 *     responses:
 *       200:
 *         description: List of jobs
 */
router.get('/jobs', getAllJobs);

/**
 * @swagger
 * /jobs/{id}:
 *   get:
 *     summary: Get a job by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Job details
 */
router.get('/jobs/:id', getJobById);

/**
 * @swagger
 * /jobs:
 *   post:
 *     summary: Create a new job
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               schedule:
 *                 type: string
 *               jobType:
 *                 type: string
 *               data:
 *                 type: object
 *     responses:
 *       201:
 *         description: Job created
 */
router.post('/jobs', createJob);

module.exports = router;
