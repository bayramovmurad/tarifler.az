# Tariflər.az - Your Kitchen's Most Elite Secrets

A modern, full-stack recipe sharing platform built on the MERN stack. Discover unique recipes, share your own culinary secrets with the community, and interact through comments and ratings.

## 🌍 Live Demo
[Tariflər.az](https://tarifler-az.vercel.app/)

## 🚀 Tech Stack

### Frontend
<div style="display: flex; flex-wrap: wrap; gap: 10px;">
  <img src="[https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)" alt="React" />
  <img src="[https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)" alt="Vite" />
  <img src="[https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)" alt="Tailwind CSS" />
  <img src="[https://img.shields.io/badge/React_Query-FF4154?style=for-the-badge&logo=ReactQuery&logoColor=white](https://img.shields.io/badge/React_Query-FF4154?style=for-the-badge&logo=ReactQuery&logoColor=white)" alt="React Query" />
  <img src="[https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)" alt="React Router" />
  <img src="[https://img.shields.io/badge/React_Hook_Form-EC5990?style=for-the-badge&logo=reacthookform&logoColor=white](https://img.shields.io/badge/React_Hook_Form-EC5990?style=for-the-badge&logo=reacthookform&logoColor=white)" alt="React Hook Form" />
</div>

### Backend
<div style="display: flex; flex-wrap: wrap; gap: 10px;">
  <img src="[https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)" alt="Node.js" />
  <img src="[https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)" alt="Express.js" />
  <img src="[https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)" alt="MongoDB" />
  <img src="[https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=white](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=white)" alt="JWT" />
</div>

## ✨ Features

*   **User Authentication:** Secure signup, login, and session management using JWT and `bcryptjs`.
*   **Recipe Management:** Create, read, and explore detailed recipes including ingredients and step-by-step instructions.
*   **Community Interaction:** Rate recipes (Like/Dislike) and engage in discussions via the comments section.
*   **Elegant UI/UX:** A fully responsive, custom dark and gold theme crafted with Tailwind CSS.
*   **Optimized Data Fetching:** Powered by React Query for seamless state management, caching, and loading states.

## 🛠️ Prerequisites

Ensure you have stable versions of the following installed on your machine:
*   Node.js
*   MongoDB (Local instance or MongoDB Atlas cluster)

## 📦 Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/bayramovmurad/tarifler.az.git
   cd tarifler.az
   ```

2. **Backend Setup:**
   Navigate to the backend directory and install dependencies:
   ```bash
   cd backend
   npm install
   ```
   Create a `.env` file in the `backend` directory and add your variables:
   ```env
   MONGO_URI=your_mongodb_uri
   SECRET_KEY=your_secret_key
   ```
   Start the backend development server:
   ```bash
   npm run dev
   ```

3. **Frontend Setup:**
   Open a new terminal window, navigate to the frontend directory, and install dependencies:
   ```bash
   cd frontend
   npm install
   ```
   Create a `.env` file in the `frontend` directory and add your variables:
   ```env
   VITE_KEY_USERS=http://localhost:3000/users
   VITE_KEY_RECIPES=http://localhost:3000/recipes
   ```
   Start the frontend development server:
   ```bash
   npm run dev
   ```

## ☁️ Deployment

This project is structured for easy deployment on **Vercel**. The repository includes a `vercel.json` configuration file that correctly rewrites `/api/*` requests to the backend server while serving the optimized Vite frontend.




 
