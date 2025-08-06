# Job Scheduler Service

A robust and scalable Node.js service for scheduling, managing, and executing background jobs via a RESTful API. Built with Express.js, this service allows you to dynamically create jobs that run on a cron-based schedule.

## Features

*   **RESTful API**: Simple and clean API for creating and querying jobs.
*   **Dynamic Job Scheduling**: Schedule jobs on the fly without server restarts.
*   **Cron-based Scheduling**: Supports standard cron syntax for flexible scheduling.
*   **Job Persistence**: (Assuming a database like MongoDB) Jobs are saved and can survive server restarts.
*   **API Documentation**: Integrated Swagger/OpenAPI documentation for easy API exploration and testing.

## Technologies Used

*   **Backend**: Node.js, Express.js
*   **Scheduling**: A library like `node-cron`, `agenda`, or `bull`
*   **API Documentation**: `swagger-jsdoc`, `swagger-ui-express`

*(You can update this section with the specific database and scheduling library you are using.)*

## Prerequisites

Before you begin, ensure you have the following installed:
*   Node.js (v16.x or later recommended)
*   npm or yarn
*   A database instance (e.g., MongoDB) if your jobs need to be persisted.

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### 1. Clone the repository

```bash
git clone <your-repository-url>
cd job-scheduler-service
```

### 2. Install dependencies

```bash
npm install
# or
yarn install
```

### 3. Set up environment variables

Create a `.env` file in the root of the project and add the necessary configuration.

```env
# Port for the server to run on
PORT=5000

# Connection URI for your database (e.g., MongoDB)
# MONGO_URI=mongodb://localhost:27017/job-scheduler
```

### 4. Run the application

To start the server in development mode:

```bash
npm run dev
```

To start the server in production:

```bash
npm start
```

The service will be running at `http://localhost:5000` (or the port you specified).

## API Documentation

API documentation is generated using Swagger and is available at `/api-docs` once the server is running.

**Visit:** http://localhost:5000/api-docs

### API Endpoints

| Method | Endpoint      | Description              | Request Body Example                                                              |
| :----- | :------------ | :----------------------- | :-------------------------------------------------------------------------------- |
| `POST` | `/api/jobs`   | Creates and schedules a new job. | `{ "name": "send-welcome-email", "schedule": "*/5 * * * *", "jobType": "email", "data": { "userId": "123" } }` |
| `GET`  | `/api/jobs`   | Retrieves a list of all scheduled jobs. | N/A                                                                               |
| `GET`  | `/api/jobs/:id` | Retrieves a single job by its unique ID. | N/A                                                                               |


### Example `POST /api/jobs` Request

Here's an example using `curl` to create a new job that runs every 5 minutes:

```bash
curl -X POST http://localhost:5000/api/jobs \
-H "Content-Type: application/json" \
-d '{
  "name": "Send Welcome Email",
  "schedule": "*/5 * * * *",
  "jobType": "email",
  "data": {
    "recipient": "user@example.com",
    "template": "welcome_template"
  }
}'
```

## Project Structure

```
/src
├── controllers/    # Request handlers and business logic
├── models/         # Database schemas and models
├── routes/         # API route definitions
├── services/       # Core logic for job scheduling
├── config/         # Configuration files
└── app.js          # Express application setup
```

## Contributing

Contributions are welcome! Please feel free to open an issue or submit a pull request.

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## License

This project is licensed under the MIT License - see the `LICENSE` file for details.