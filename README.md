```markdown
# My Portfolio Dashboard Project

This project is a responsive web dashboard built using React with Vite for the frontend and Strapi for the backend. It provides a user interface for managing a portfolio of projects, saved items, shared content, and achievements.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup](#setup)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Configuration](#configuration)
- [Running the Project](#running-the-project)
  - [Frontend](#frontend)
  - [Backend](#backend)
- [Folder Structure](#folder-structure)
- [Strapi Backend Setup](#strapi-backend-setup)
- [React Frontend Code](#react-frontend-code)
- [Customization](#customization)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Features

*   **Responsive Design:**  The dashboard is designed to be responsive and work seamlessly on various devices, including desktops, tablets, and mobile phones.
*   **Navbar Navigation:**  The top navigation bar includes tabs for "Project", "Saved", "Shared", and "Achievement", allowing users to easily switch between different sections of the portfolio.
*   **Sidebar Navigation:**  A collapsible sidebar provides access to the main sections of the dashboard: "Dashboard", "Portfolio", "Inputs", and "Profile". The sidebar can be collapsed on smaller screens for improved usability.
*   **Portfolio Management:**  Users can view, filter, and search for portfolio items. Each item displays an image, title, description, language, and author.
*   **Search Functionality:**  A search bar in the top navigation bar allows users to quickly find specific portfolio items.
*   **Data Storage:**  The project data is stored in a Strapi backend.
*   **Data Fetching & Error Handling:** Efficient data fetching from the Strapi backend.

## Technologies Used

*   **Frontend:**
    *   [React](https://reactjs.org/): A JavaScript library for building user interfaces.
    *   [Vite](https://vitejs.dev/): A fast and lightweight build tool for modern web development.
    *   [React Router](https://reactrouter.com/): A library for handling routing in React applications.
    *   [Axios](https://axios-http.com/): A promise-based HTTP client for making API requests.
    *   [Tailwind CSS](https://tailwindcss.com/): A utility-first CSS framework for rapidly styling the application.
    *   [@heroicons/react](https://heroicons.com/): Beautiful hand-crafted SVG icons, by the makers of Tailwind CSS.

*   **Backend:**
    *   [Strapi](https://strapi.io/): An open-source headless CMS for building flexible APIs.

## Setup

### Prerequisites

Before you begin, ensure you have the following installed:

*   [Node.js](https://nodejs.org/) (version 16 or higher)
*   [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/) (package managers)
*   [Git](https://git-scm.com/) (for version control)

### Installation

1.  **Clone the repository:**

```bash
git clone [repository URL]
cd [project directory]
```

2.  **Install frontend dependencies:**

```bash
cd my-dashboard
npm install
```

3.  **Install backend dependencies:**

```bash
cd my-strapi-backend
npm install
```

### Configuration

1.  **Strapi Backend:**
    *   Create a `.env` file in your Strapi project to configure environment variables.
    *   Configure your database connection in `config/database.js` (or `config/database.ts` if you use TypeScript).
    *   Set the `API_URL` in `my-dashboard/src/services/api.js` to point to your Strapi backend.

## Running the Project

### Frontend

1.  Navigate to the `my-dashboard` directory:

```bash
cd my-dashboard
```

2.  Start the development server:

```bash
npm run dev
```

3.  Open your browser and navigate to the address provided by Vite (usually `http://localhost:5173/`).

### Backend

1.  Navigate to the `my-strapi-backend` directory:

```bash
cd my-strapi-backend
```

2.  Start the Strapi development server:

```bash
npm run develop
```

3.  Open your browser and navigate to the Strapi admin panel (usually `http://localhost:1337/admin`).  Create an admin user.

## Folder Structure

```
my-dashboard/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Sidebar.jsx
│   │   ├── ProjectCard.jsx
│   │   └── FilterDropdown.jsx  //For the filter dropdown
│   ├── pages/
│   │   ├── Dashboard.jsx
│   │   ├── Portfolio.jsx
│   │   ├── Inputs.jsx
│   │   ├── Profile.jsx
│   │   └── ErrorPage.jsx // For Error Handling
│   ├── App.jsx
│   ├── index.jsx
│   ├── index.css
│   ├── services/
│   │   └── api.js   // API calls to Strapi
│   └── assets/     // Images, icons, etc.
│   └── context/    //Global state using React Context API.
├── public/
├── vite.config.js
├── package.json

my-strapi-backend/
├── config/
├── src/
├── public/
├── .env
├── package.json
```
