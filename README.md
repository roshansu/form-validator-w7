# 🧩 Multi-Step Form — React + Vite + TailwindCSS

A modern, responsive multi-step form with real-time validation, password visibility toggle, and step-based navigation.
Built using **React (Vite)** and **TailwindCSS** with clean UX and professional form handling.

---

## ✨ Features

✅ 3 Step Form Navigation

* Step 1 → Personal Information
* Step 2 → Account Details
* Step 3 → Review & Submit

✅ Real-Time Validation (no submit required)

* Email must contain `@`
* Password minimum 8 characters
* Confirm password must match password
* Required fields validation

✅ Smart UX

* Next button disabled until current step is valid
* Show / Hide password toggle (eye icon)
* Inline error messages
* Step progress bar
* Responsive design
* Clean modern UI with TailwindCSS

---

## 🛠 Tech Stack

* React (Vite)
* TailwindCSS
* JavaScript (ES6+)

No external UI libraries
No animation libraries
Pure React state management

---

## 📦 Installation

### 1️⃣ Create Vite React App

```bash
npm create vite@latest multistep-form
cd multistep-form
npm install
```

### 2️⃣ Install TailwindCSS

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

Update **tailwind.config.js**

```js
content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
```

Add Tailwind to **index.css**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

---

### 3️⃣ Add the Form Component

Replace `App.jsx` with the provided multi-step form code.

---

### 4️⃣ Run Project

```bash
npm run dev
```

---

## 🧠 Validation Rules

| Field            | Rule                 |
| ---------------- | -------------------- |
| First Name       | Required             |
| Last Name        | Required             |
| Date of Birth    | Required             |
| Email            | Must contain `@`     |
| Password         | Minimum 8 characters |
| Confirm Password | Must match password  |

---

## 📁 Project Structure

```
src/
 ├── App.jsx
 ├── main.jsx
 └── index.css
```

---

## 🎯 How It Works

1. User fills Step 1 → Personal Info
2. Step 2 validates account details in real-time
3. Step 3 shows review screen
4. Submit logs data and shows success message

---

## 🚀 Possible Enhancements

* Password strength meter
* API integration (Node / Express / MongoDB)
* Toast notifications
* Dark mode toggle
* Step completion checkmarks
* Form persistence (localStorage)
* Accessibility improvements
* React Hook For
