import { lazy } from "react";

const LandingPage = lazy(() => import("../Components/LandingPage"));

const NAVIGATION_ROUTES = Object.freeze({
  home: {
    path: "/",
    exact: true,
    element: <LandingPage />,
  },
});


export default NAVIGATION_ROUTES;