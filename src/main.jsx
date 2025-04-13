import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

import { PublicClientApplication } from "@azure/msal-browser";
import { MsalProvider } from "@azure/msal-react";
import { msalConfig } from "./config/authConfig";

// Initialize before rendering
const msalInstance = new PublicClientApplication(msalConfig);

msalInstance.initialize().then(() => {
  const root = createRoot(document.getElementById("root"));
  root.render(
    <MsalProvider instance={msalInstance}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </MsalProvider>
  );
}).catch((error) => {
  console.error("MSAL initialization failed:", error);
});
