import React from "react";
import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import App from "./App.tsx";
import "./index.css";

// The app was hash-routed until this commit, so links like /#/team are in the
// wild. Rewrite them to the real path before the router mounts, so those old
// links keep working instead of silently landing on the homepage.
const { hash, pathname } = window.location;
if (/^#\/.+/.test(hash)) {
  const target = hash.slice(1);
  if (pathname === "/" || pathname === "") {
    window.history.replaceState(null, "", target);
  }
}

const container = document.getElementById("root");

if (container) {
  const root = createRoot(container);
  root.render(
    <React.StrictMode>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </React.StrictMode>
  );
}
