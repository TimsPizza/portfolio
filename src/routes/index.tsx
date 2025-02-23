import { createHashRouter, RouteObject } from "react-router-dom";
import Layout from "./_layout";
import Landing from "../ components/Landing";
const routes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "landing",
        element: <Landing />,
      },
    ],
  },
  {
    path: "*",
    element: <>404 Page</>,
  },
];
export const router = createHashRouter(routes);
