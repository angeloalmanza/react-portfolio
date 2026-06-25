import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import App from "./App.jsx";

// Used at build time by prerender.js to generate static HTML.
export function render() {
  return renderToString(
    <StrictMode>
      <App />
    </StrictMode>
  );
}
