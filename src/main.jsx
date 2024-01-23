import React from "react";
import ReactDOM from "react-dom/client";

import Notfound from "./routes/Notfound.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainPage from "./routes/MainPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    errorElement: <Notfound />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
