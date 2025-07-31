# 📝 Blog Website - MERN Stack Blog Platform

> ⭐ **Live Demo:** [yourblog-six.vercel.app](https://yourblog-six.vercel.app/)

Welcome to my fully responsive **Blog Website** built with the **MERN Stack**! This app allows users to securely create, read, update, and delete (CRUD) blog posts. The platform provides a smooth and modern blogging experience with user authentication and stylish UI.

---

## 🚀 Features

✨ **Modern Blog Interface**  
✍️ Create and publish blog posts  
📖 View all blogs with detailed pages  
📝 Edit and delete blogs (only for logged-in users)  
🔐 Authentication powered by **Clerk**  
📅 Blogs sorted by latest date  
💬 Clean and responsive UI with animations  
🔎 Explore blogs with filters and search

---

## 🔗 Live Demo

🌐 **Check it out here**: [https://yourblog-six.vercel.app/](https://yourblog-six.vercel.app/)

---

## 🛠️ Tech Stack

### 🔧 Frontend
- ⚛️ **React.js** – Component-based frontend library  
- 🎯 **Axios** – For API requests  
- 🎬 **Framer Motion** – For animations  
- 🌈 **Tailwind CSS** – Utility-first styling  
- 💎 **Lucide React** – Icon library  
- 🧭 **React Router DOM** – For client-side routing  

### 🖥️ Backend
- 🛠️ **Node.js** – JavaScript runtime environment  
- 🚦 **Express.js** – Server-side framework  
- 🔐 **JWT (optional)** – You can use it for APIs if needed

### 💾 Database
- 🍃 **MongoDB** – NoSQL database  
- 🔗 **Mongoose** – For schema modeling  

### 🔒 Authentication
- 🧑‍💼 **Clerk** – Modern user auth & session management  

### 📦 Other Tools
- 🌐 **CORS** – Handle cross-origin requests  
- 🧪 **dotenv** – Manage environment variables  

- ⚙️ **Git** – Version control  



## 🧑‍💻 How to Run Locally

```bash
# Clone the repo
git clone https://github.com/Ankit626517/blog-web-app.git
cd blog-web-app

# Install frontend dependencies
cd client
npm install

# Install backend dependencies
cd ../server
npm install

# Add your environment variables in `.env` file

# Start frontend
cd ../client
npm start

# Start backend
cd ../server
npm run dev
