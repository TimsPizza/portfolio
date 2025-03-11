import React, { createContext, useContext, useMemo } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import "./styles/tailwind.output.css";


const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
