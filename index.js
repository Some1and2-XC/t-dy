import React from "react";
import ReactDom from "react-dom";
import App from "./src/app";

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
