const app = require('./src/app');
const dotenv = require('dotenv');
const { loadAllJobs } = require('./src/jobs/scheduler');

dotenv.config();

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  loadAllJobs();
});
