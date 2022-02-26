import { lazy } from "react";

const LandingPage = lazy(() => import("../Components/LandingPage"));

// Employer Routes
const EmployerGateway = lazy (() => import("../Components/EmployerUI/Components/Gateway"))

export const NAVIGATION_ROUTES = Object.freeze({
  // Everyone Can Access Routes
  home: {
    path: "/",
    exact: true,
    element: <LandingPage />,
  },

  // Employer-Only Routes
  employerGateway: {
    path: '/employer-portal',
    element: <EmployerGateway />
  }

  // Interns-Only Routes
});

