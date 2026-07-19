import "../index.css";

import React from "react";
import { createRoot } from "react-dom/client";

import App from "../App";

import { hasForm } from "./formDetector";
import { initializeFieldDetector } from "./fieldDetector";

if (hasForm()) {

    console.log("✅ Form detected");

    initializeFieldDetector();

    const container = document.createElement("div");

    container.id = "formsaarthi-root";

    document.body.appendChild(container);

    const root = createRoot(container);

    root.render(<App />);

}
else {

    console.log("❌ No form found");

}