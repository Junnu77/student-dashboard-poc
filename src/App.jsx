import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import AddStudent from "./pages/AddStudent";
import EditStudent from "./pages/EditStudent";
import Login from "./pages/Login";

import AuthService from "./services/AuthServices";
import ProtectedRoute from "./utils/ProtectedRoute";
import { useEffect } from "react";
import ViewStudent from "./pages/ViewStudent";

function App() {
  useEffect(() => {
    AuthService.initializeAuth();
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Route */}
        <Route path="/login" element={<Login />} />
        {/* Home Page */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />

        {/* Add Student */}
        <Route
          path="/add"
          element={
            <ProtectedRoute requireAdmin={true}>
              <AddStudent />
            </ProtectedRoute>
          }
        />

        {/* Edit Student */}
        <Route
          path="/edit/:id"
          element={
            <ProtectedRoute requireAdmin={true}>
              <EditStudent />
            </ProtectedRoute>
          }
        />
        <Route
          path="/view/:id"
          element={
            <ProtectedRoute>
              <ViewStudent />
            </ProtectedRoute>
          }
        />

        {/* 404 Page */}
        <Route
          path="*"
          element={
            <div className="container mt-5 text-center">
              <h1 className="display-4 text-danger">404</h1>

              <h3>Page Not Found</h3>

              <p>The page you are looking for does not exist.</p>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
