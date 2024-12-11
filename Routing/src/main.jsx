import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";

createRoot(document.getElementById("root")).render(
    // enabling the Navigation to app 
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
