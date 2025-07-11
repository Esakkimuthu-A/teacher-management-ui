# Teacher Management Interface

A modern, responsive web interface for managing teachers, built with **Next.js**, **TypeScript**, and **Tailwind CSS**. This project demonstrates a clean UI design, mobile responsiveness, dynamic state management with React hooks, and basic CRUD operations (without a backend).

---

## 🚀 Features

- 📱 **Responsive Layout**: Works well on both desktop and mobile screens.
- 🧭 **Sidebar Navigation**: Toggleable sidebar with links to Dashboard and Teachers.
- 📌 **Sticky Header**: Header stays fixed on top with user profile dropdown.
- 📊 **Dashboard Page**:
  - Displays summary cards: Total Teachers, Active Teachers, New This Week.
- 👨‍🏫 **Teachers Page**:
  - List of teachers displayed in a styled table.
  - Add Teacher modal form.
  - Edit and Delete teacher entries (local state only).
  - Visual feedback on hover, required field validation.
  - Status shown with green (Active) / red (Inactive) badges.
- 🧠 **State Management**: Handled using React `useState` hook.
- 🎨 **Design**: Clean UI using Tailwind CSS.

---

## 🛠️ Tech Stack

- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide Icons](https://lucide.dev/)
- [React Hooks](https://reactjs.org/docs/hooks-intro.html)

---

## 🧑‍💻 Installation & Run

```bash
# Clone the repository
git clone https://github.com/your-username/teacher-management-ui.git
cd teacher-management-ui

# Install dependencies
npm install

# Start the development server
npm run dev


## 📂 Project Structure

teacher-management-ui/
├── app/
│   ├── layout.tsx         # Root layout with sidebar + header
│   ├── page.tsx           # Dashboard page
│   └── teachers/
│       └── page.tsx       # Teachers page
├── components/
│   ├── Header.tsx
│   └── Sidebar.tsx
├── public/
│   └── favicon.ico
├── styles/
│   └── globals.css
├── README.md
├── tailwind.config.ts
└── tsconfig.json
