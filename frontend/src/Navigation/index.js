import { lazy } from "react";

const LandingPage = lazy(() => import("../Components/LandingPage"));
const InternRegistration = lazy(() => import("../Components/InternUI"));

// Employer Routes
const EmployerGateway = lazy (() => import("../Components/EmployerUI/Components/Gateway"))
const EmployerRegistration = lazy(() => import('../Components/EmployerUI/Components/AuthRegister'))
const EmployerLogin = lazy(() => import('../Components/EmployerUI/Components/AuthLogin'))
const EmployerCreateProject = lazy(() => import('../Components/EmployerUI/Components/MakeProject'))
const EmployerCreateInternship = lazy(() => import('../Components/EmployerUI/Components/MakeInternship'))

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
  },

  employerLogin: {
    path: '/employer-login',
    element: <EmployerLogin/>
  },

  employerProject: {
    path: '/create-project',
    element: <EmployerCreateProject />
  },

  employerInternship: {
    path: '/create-internship',
    element: <EmployerCreateInternship />
  },

  // Interns-Only Routes
  internRegistration: {
    path: "/intern-register",
    element: <InternRegistration />,
  },
});
