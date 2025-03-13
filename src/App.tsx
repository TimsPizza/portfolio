import React from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import "./styles/tailwind.output.css";
import ThemeProvider from "./contexts/ThemeContext";

const App = () => {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

export default App;
