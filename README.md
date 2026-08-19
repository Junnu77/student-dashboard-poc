# 🎓 Student Dashboard - React Vite Application

A modern, responsive, and robust single-page application (SPA) built with React and Vite for managing student records. This project serves as a comprehensive demonstration of state management, role-based access control (RBAC), and persistent local data storage.

## 🌟 Key Features

*   **Role-Based Access Control (RBAC):**
    *   **Admin Role:** Full access to all CRUD operations (Create, Read, Update, Delete) for student records.
    *   **User Role:** Read-only access to view the dashboard and student list.
*   **Authentication & Authorization:** Secure login and registration flows with route protection using `react-router-dom`.
*   **Local Storage Integration:** Simulates a backend database using browser `localStorage` for persistent data across sessions.
*   **Responsive UI:** Styled entirely with Bootstrap 5, ensuring a seamless experience across desktop and mobile devices.
*   **Dynamic Dashboard:** Real-time statistics cards categorizing students by their enrolled courses (e.g., MERN Stack, React Native).
*   **Search & Sort:** Built-in functionality to filter students by name/course and sort them alphabetically.

## 🛠️ Technologies Used

*   **Frontend Library:** React 18
*   **Build Tool:** Vite
*   **Routing:** React Router DOM (v6)
*   **Styling:** Bootstrap 5
*   **State Management:** React Hooks (`useState`, `useEffect`)
*   **Data Persistence:** Browser `localStorage`

## 🚀 Getting Started

Follow these instructions to set up the project locally on your machine.

### Prerequisites

*   Node.js (v16.0.0 or higher recommended)
*   npm or yarn package manager

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/yourusername/student-dashboard.git
    cd student-dashboard
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Start the development server:**
    ```bash
    npm run dev
    # or
    yarn dev
    ```

4.  **Open the application:**
    Navigate to `http://localhost:5173` (or the port specified by Vite) in your web browser.

## 🔐 Default Credentials

To test the application's administrative capabilities, use the following default credentials (injected on the first load):

*   **Email:** `admin@gmail.com`
*   **Password:** `admin@123`
*   **Role:** Admin

New users who register via the Registration page will automatically be assigned the `user` role and will be restricted to read-only views.

## 📂 Project Structure

```text
src/
├── components/          # Reusable UI components (Navbar, StudentTable, ProtectedRoute)
├── pages/               # Top-level route components (Home, Login, Register, AddStudent, EditStudent)
├── services/            # Logic for data handling (AuthServices.js, StudentService.js)
├── App.jsx              # Main application entry point and routing configuration
└── main.jsx             # React DOM rendering
```

## 🧠 Architectural Decisions

*   **Service Layer Pattern:** Logic for Authentication (`AuthServices.js`) and Data Management (`StudentService.js`) are decoupled from UI components. This ensures components remain clean and focused solely on rendering.
*   **Component-Based Protection:** The `ProtectedRoute` component acts as a higher-order wrapper, evaluating user sessions before granting access to sensitive routes (like `/add` or `/edit/:id`), preventing unauthorized URL navigation.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!
Feel free to check the [issues page](https://github.com/yourusername/student-dashboard/issues).

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request
