# React + Firebase Authentication

A modern and responsive authentication application built with **React** and **Firebase Authentication**.

The project provides a clean authentication experience with Email/Password and Google Sign-In, along with a structured React architecture using Context API and React Router.

---

## 🚀 Features

- 🔐 Email & Password Authentication
- 🔵 Google Sign-In
- 📝 User Registration
- 🔑 User Login
- 🚪 User Logout
- 👤 Authentication State Management
- 🛡️ Protected Routes
- 🧭 Client-side Routing with React Router
- 📱 Responsive UI
- 🎨 Modern UI with Tailwind CSS
- 🔔 Toast Notifications
- 🧩 Reusable React Components
- 📂 Clean and scalable project structure

---

## 🛠️ Tech Stack

### Frontend

- React
- JavaScript
- Vite
- React Router
- Tailwind CSS

### Authentication & Backend Services

- Firebase Authentication

### Libraries

- React Hot Toast
- Firebase
- React Router DOM

---

## 📁 Project Structure

```text
client/
│
├── public/
│
├── src/
│   ├── assets/
│   │
│   ├── components/
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   │
│   ├── configs/
│   │   └── firebaseConfig.js
│   │
│   ├── contexts/
│   │   └── AuthContext.jsx
│   │
│   ├── hooks/
│   │   └── useAuth.js
│   │
│   ├── layouts/
│   │   └── MainLayout.jsx
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   └── Dashboard.jsx
│   │
│   ├── routes/
│   │   └── router.jsx
│   │
│   ├── index.css
│   └── main.jsx
│
├── .env
├── .gitignore
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md