import React from "react";
import { createHashRouter, RouteObject } from "react-router-dom";
import AboutMe from "../components/about/AboutMe";
import Contact from "../components/contact/Contact";
import Landing from "../components/landing/Landing";
import Projects from "../components/projects/Projects";
import ThemeSettings from "../components/settings/ThemeSettings";
import ShadowLog from "../components/shadow-log/ShadowLog";
import PageTransition from "../components/transitions/PageTransition";
import Layout from "./_layout";

// returns a higher order component that wraps the given component with a page transition
const withTransition = (Component: React.ComponentType): React.FC => {
  const WithTransitionComponent: React.FC = () => (
    <PageTransition>
      <Component />
    </PageTransition>
  );
  return React.memo(WithTransitionComponent);
};

const TransitionedLanding = withTransition(Landing);
const TransitionedAbout = withTransition(AboutMe);
const TransitionedProjects = withTransition(Projects);
const TransitionedShadow = withTransition(ShadowLog);
const TransitionedContact = withTransition(Contact);
const TransitionedThemeSettings = withTransition(ThemeSettings);

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        path: "landing",
        element: <TransitionedLanding />,
      },
      {
        path: "about",
        element: <TransitionedAbout />,
      },
      {
        path: "projects",
        element: <TransitionedProjects />,
      },
      {
        path: "shadow-log",
        element: <TransitionedShadow />,
      },
      {
        path: "contact",
        element: <TransitionedContact />,
      },
      {
        path: "themes",
        element: <TransitionedThemeSettings />,
      },
    ],
  },
  {
    path: "*",
    element: <>404 Page</>,
  },
];

export const router = createHashRouter(routes);
