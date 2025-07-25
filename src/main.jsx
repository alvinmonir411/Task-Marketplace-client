import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
// import App from "./App.jsx";
import { router } from "./router";
import AuthProvider from "./context/AuthContext";
import { ToastContainer } from "react-toastify";
import ThemeProvider from "./context/ThemeContext ";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <ToastContainer />
      <ThemeProvider>
        <RouterProvider router={router}></RouterProvider>
      </ThemeProvider>
    </AuthProvider>
  </StrictMode>
);
