import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./RootRedux/index";
import NAVIGATION_ROUTES from "./Navigation/index";
import AppHeader from "./Commons/Nav/AppHeader";
import AppFooter from "./Commons/Nav/AppFooter";
import "./bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./Commons/ScrollToTop";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <ScrollToTop />
        <AppHeader />
        <Suspense fallback={<div />}>
          <Routes>
            {Object.values(NAVIGATION_ROUTES).map((route, idx) => (
              <Route key={idx} {...route} />
            ))}
          </Routes>
        </Suspense>
        <AppFooter />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
