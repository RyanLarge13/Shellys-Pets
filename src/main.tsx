import "./index.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.tsx";
import { NavProvider } from "./context/NavContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <NavProvider>
      <App />
    </NavProvider>
  </StrictMode>
);
