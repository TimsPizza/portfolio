import React, { createContext, useContext, useMemo } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import "./styles/tailwind.output.css";
import { TabsProvider } from "./contexts/TabsContext";


// App component (App 组件)
const App = () => {
  return (
    <TabsProvider>
      <RouterProvider router={router} />
    </TabsProvider>
  );
};

export default App;
