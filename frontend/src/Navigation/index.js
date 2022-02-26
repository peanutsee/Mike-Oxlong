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
const EmployerCreateProject = lazy(() =>
  import("../Components/EmployerUI/Components/MakeProject")
);
const EmployerCreateInternship = lazy(() =>
  import("../Components/EmployerUI/Components/MakeInternship")
);

const EmployerDashboard = lazy(() =>
  import("../Components/EmployerUI/Components/EmployerDashboard")
);

// Intern Routes
const InternGateway = lazy(() =>
  import("../Components/InternUI/Components/Gateway")
);

const InternRegistration = lazy(() =>
  import("../Components/InternUI/Components/AuthRegister")
);

const InternLogin = lazy(() =>
  import("../Components/InternUI/Components/AuthLogin")
);

const InternDashboard = lazy(() =>
  import("../Components/InternUI/Components/InternDashboard")
);
const Courses = lazy(() => import("../Components/InternUI/Components/Courses"));

const Internships = lazy(() =>
  import("../Components/InternUI/Components/Internships")
);

const Projects = lazy(() =>
  import("../Components/InternUI/Components/Projects")
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

  employerProject: {
    path: "/create-project",
    element: <EmployerCreateProject />,
  },

  employerDashboard: {
    path: "/employer-dash",
    element: <EmployerDashboard />,
  },

  employerInternship: {
    path: "/create-internship",
    element: <EmployerCreateInternship />,
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

  internLogin: {
    path: "/intern-login",
    element: <InternLogin />,
  },

  internDashboard: {
    path: "/intern-dashboard",
    element: <InternDashboard />,
  },

  internCourses: {
    path: "/upskill",
    element: <Courses />,
  },

  internInternships: {
    path: "/internships",
    element: <Internships />,
  },

  internProjects: {
    path: "/projects",
    element: <Projects />,
  },
});
