import { lazy } from "react";

const LandingPage = lazy(() => import("../Components/LandingPage"));
const InternRegistration = lazy(() => import("../Components/InternUI"));

// Employer Routes
const EmployerGateway = lazy(() =>
  import("../Components/EmployerUI/Components/Gateway")
);
const EmployerRegistration = lazy(() =>
  import("../Components/EmployerUI/Components/AuthRegister")
);
const EmployerDashboard = lazy(() =>
  import("../Components/EmployerUI/Components/EmployerDashboard")
);

export const NAVIGATION_ROUTES = Object.freeze({
  // Everyone Can Access Routes
  home: {
    path: "/",
    exact: true,
    element: <LandingPage />,
  },

  // Employer-Only Routes
  employerGateway: {
    path: "/employer-portal",
    element: <EmployerGateway />,
  },

  employerRegistration: {
    path: "/employer-register",
    element: <EmployerRegistration />,
  },

  employerDashboard: {
    path: "/employer-dash",
    element: <EmployerDashboard />,
  },

  // Interns-Only Routes
  internRegistration: {
    path: "/intern-register",
    element: <InternRegistration />,
  },
});
