import React from "react";
import { createRoot } from "react-dom/client";
import Root from "./Root";
import "./styles/index.css";

// GA4 will be configured later
// ReactGA.initialize(import.meta.env.VITE_GA_TRACKING_ID || "");

document.body.style.backgroundColor = "#f7fafc";

const container = document.getElementById("root");
if (!container) throw new Error("Failed to find the root element");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);

// PWA service worker will be configured with Vite PWA plugin
