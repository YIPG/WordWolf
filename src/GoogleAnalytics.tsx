import React, { useEffect } from "react";
import ReactGA from "react-ga";
import { useHistory } from "react-router-dom";

export const initializeGA = () => {
  ReactGA.initialize("UA-157030300-1");
};

export const logPageView = (history: any) => {
  history.listen((location: any) => {
    const page = location.pathname || window.location.pathname;
    ReactGA.set({ page: page });
    ReactGA.pageview(page);
  });
};
