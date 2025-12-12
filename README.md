### Course Enrollment Project

This project is a simple full-stack application that demonstrates how users can view available courses and enroll in them. The backend is built with Node.js + Express, and the frontend is built with React (Create React App).

##Overview

This system provides a minimal but functional course enrollment flow.
Users can:

## View a list of available courses

Enroll in any course with a single click

See enrollment status updated instantly in the UI

The backend serves course data through REST APIs, and the frontend consumes these APIs to render the interface.

##  Features

Course listing (HTML, CSS, React)

Enrollment functionality

REST API integration

Reusable UI components

Status-based button updates (Enrolled / Enroll)

Backend validation and response handling

CORS-enabled Express server

### Technologies Used
## Frontend

React (Create React App)

JavaScript (ES6)

Axios (for API calls)

CSS

## Backend

Node.js

Express.js

CORS

JSON-based storage (in-memory array)

## File Structure
project/
│
├── backend/
│   ├── server.js                # Main Express server
│
└── frontend/
    ├── src/
    │   ├── App.js               # Main React component
    │   ├── App.css              # Styling
    │   └── index.js             # Entry point
    ├── package.json

API Endpoints
GET /courses

Returns the list of available courses.

POST /courses/:courseId/enroll

Enrolls a user in the selected course.

## Running the Project
## 1. Backend Setup
cd backend
npm install
node server.js


Server runs on:

http://localhost:5000

## 2. Frontend Setup
cd frontend
npm install
npm start


## App runs on:

http://localhost:3000

Create React App Reference

This project was bootstrapped with Create React App.

In the project directory, you can run:

In the frontend directory, you can run:

### npm start

Runs the React app in development mode.
Open http://localhost:3000
 to view it in your browser.

The page reloads automatically when you save changes.

### npm test

Launches the test runner in interactive watch mode.

### npm run build

Builds the React app for production in the build folder.

It bundles React in production mode and optimizes for best performance.

The output is minified and filenames include hashes.

## npm run eject

This copies all configuration files (webpack, Babel, ESLint) into your project folder so you can customize them.

This is irreversible.

Backend – Getting Started

In the backend directory, run:

### npm install

Installs backend dependencies (express, cors).

## node server.js

Starts the backend server on:

http://localhost:5000

### Deployment

You can learn more about deployment here:
https://facebook.github.io/create-react-app/docs/deployment

## Learn More

### React documentation:
https://reactjs.org/

### Create React App documentation:
https://facebook.github.io/create-react-app/docs/getting-started

### Author

For any queries, contact:

## K. Sravani
Email: sravanikadaru99@gmail.com