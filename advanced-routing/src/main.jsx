import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "/node_modules/bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <Router>
    <App />
  </Router>
);
