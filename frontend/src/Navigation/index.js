import { lazy } from "react";

const LandingPage = lazy(() => import("../Components/LandingPage"));

export const NAVIGATION_ROUTES = Object.freeze({
  // Everyone Can Access Routes
  home: {
    path: "/",
    exact: true,
    element: <LandingPage />,
  },

  // Employer-Only Routes

  // Interns-Only Routes
});

