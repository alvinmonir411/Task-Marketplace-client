# Task Management Application

A full-stack Task Management web application built with React, Express.js, and MongoDB.  
Users can create, update, delete, and manage tasks with authentication support.

---

## Features

- User registration and authentication (via Context API or Firebase/Auth method)
- Create new tasks with title, category, description, deadline, and budget
- View all tasks and individual task details
- Update existing tasks
- Delete tasks
- Responsive and user-friendly UI with React and Tailwind CSS
- Backend API built with Express.js and MongoDB for persistent data storage
- Real-time notifications using `react-toastify`

---

## Tech Stack

- **Frontend:** React, React Router, Tailwind CSS, React Toastify
- **Backend:** Node.js, Express.js, MongoDB (Atlas), Mongoose
- **Authentication:** React Context API / Firebase Auth (adjust based on your implementation)
- **Others:** CORS, dotenv for environment variables

---## Dependencies

This project uses the following major dependencies:

| Package                    | Version  | Description                                          |
| -------------------------- | -------- | ---------------------------------------------------- |
| `@material-tailwind/react` | ^2.1.10  | Material UI components with Tailwind CSS             |
| `@tailwindcss/vite`        | ^4.1.7   | Tailwind CSS plugin for Vite                         |
| `firebase`                 | ^11.7.3  | Firebase SDK for authentication and backend services |
| `react`                    | ^19.1.0  | React library for building UI                        |
| `react-dom`                | ^19.1.0  | React DOM renderer                                   |
| `react-router-dom`         | ^7.6.0   | Declarative routing for React                        |
| `react-countup`            | ^6.5.3   | Animated number counting component                   |
| `react-icons`              | ^5.5.0   | Popular icons library for React                      |
| `react-toastify`           | ^11.0.5  | Notification library with toast messages             |
| `react-tooltip`            | ^5.28.1  | Tooltip component for React                          |
| `sweetalert2`              | ^11.21.2 | Beautiful, responsive alerts & modals                |
| `tailwindcss`              | ^4.1.7   | Utility-first CSS framework                          |

|React Awesome reveal

## Getting Started

### Prerequisites

- Node.js (v14 or above)
- npm or yarn
- MongoDB Atlas account or local MongoDB setup

### Setup Backend

1. Clone the repo or navigate to your backend folder.
2. Install dependencies:
   ```bash
   npm install express mongodb cors
   ```
