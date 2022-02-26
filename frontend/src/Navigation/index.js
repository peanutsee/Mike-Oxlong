import { lazy } from "react";

const LandingPage = lazy(() => import("../Components/LandingPage"));

// Employer Routes
const EmployerGateway = lazy (() => import("../Components/EmployerUI/Components/Gateway"))
const EmployerRegistration = lazy(() => import('../Components/EmployerUI/Components/AuthRegister'))

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
  },

  employerRegistration: {
    path: '/employer-register',
    element: <EmployerRegistration/>
  }

  // Interns-Only Routes
});

