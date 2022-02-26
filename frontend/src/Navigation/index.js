import { lazy } from "react";

const LandingPage = lazy(() => import("../Components/LandingPage"));

// Employer Routes
const EmployerGateway = lazy(() =>
  import("../Components/EmployerUI/Components/Gateway")
);
const EmployerRegistration = lazy(() =>
  import("../Components/EmployerUI/Components/AuthRegister")
);

const EmployerLogin = lazy(() =>
  import("../Components/EmployerUI/Components/AuthLogin")
);

// Intern Routes
const InternGateway = lazy(() =>
  import("../Components/InternUI/Components/Gateway")
);

const InternRegistration = lazy(() =>
  import("../Components/InternUI/Components/AuthRegister")
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

  employerLogin: {
    path: "/employer-login",
    element: <EmployerLogin />,
  },

  // Interns-Only Routes
  internGateway: {
    path: "/intern-portal",
    element: <InternGateway />,
  },

  internRegistration: {
    path: "/intern-register",
    element: <InternRegistration />,
  },
});
