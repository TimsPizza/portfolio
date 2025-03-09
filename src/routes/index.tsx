import { createHashRouter, RouteObject } from "react-router-dom";
import Layout from "./_layout";
import Landing from "../components/landing/Landing";
import Projects from "../components/projects/Projects";
import AboutMe from "../components/about/AboutMe";
import Contact from "../components/contact/Contact";
const routes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "landing",
        element: <Landing />,
      },
      {
        path: "about",
        element: <AboutMe />,
      },
      {
        path: "projects",
        element: <Projects />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
  {
    path: "*",
    element: <>404 Page</>,
  },
];
export const router = createHashRouter(routes);
