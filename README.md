# 🧠 Full Stack AI SaaS Text-to-Image Generator

A full-stack AI-powered SaaS application built with the **MERN** stack (MongoDB, Express, React, Node.js) that allows users to **generate images from text prompts** using the **ClipDrop API**. The app features **user authentication**, a **credit-based system**, and **online payment integration** for purchasing additional credits.

---

## 🚀 Features

- ✨ Generate AI images from custom text prompts using ClipDrop API
- 🔐 Full user authentication (Signup/Login)
- 💳 Credit-based generation system
- 🛒 Integrated online payment gateway to purchase additional credits
- 📦 Persistent data storage using MongoDB
- 🧩 Modular and scalable full-stack architecture

---

## 🛠️ Tech Stack

- **Frontend**: React.js, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (Mongoose)
- **Authentication**: JWT + bcrypt
- **AI Image Generation**: [ClipDrop API](https://clipdrop.co/apis)
- **Payment Integration**: Razorpay

---

## 📸 Demo

Try it live: **[Deployemnt URL](https://imagify1-13gr.onrender.com)**

---

## 🔐 Authentication Flow

- User Registration & Login
- JWT-based session management
- Protected API routes for image generation and credit management
- Secure storage of user credentials (hashed using bcrypt)

---

## 🧠 AI Image Generation

- Users input a text prompt
- App sends the prompt to the ClipDrop API
- Generated image is returned and displayed
- Each generation deducts one credit from the user's account

---

## 💳 Credit System & Payment

- Every user starts with a limited number of free credits
- Users can purchase more credits through a secure payment gateway
- Payment confirmation updates the user's credit balance in the database

---

## 🧑‍💻 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Sankalp-Space/Imagify1.git
```

### 2. Install dependencies Backend

```bash
cd server
npm install
```

### 2. Install dependencies Frontend

```bash
cd client
npm install
```
### 4. Run the application 
Backend
```bash
cd server
npm run dev
```
Frontend
```bash
cd client
npm start
```



