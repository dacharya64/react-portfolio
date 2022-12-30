import React from "react";
import ReactDOM from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from './routes/App';
import Publications from './routes/Publications';
import Games from './routes/Games';
import Research from './routes/Research';

const router = createHashRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "publications",
    element: <Publications />
  },
  {
    path: "games",
    element: <Games />
  },
  {
    path: "research",
    element: <Research />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);