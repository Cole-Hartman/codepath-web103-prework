import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Add from "./routes/Add.jsx";
import View from "./routes/View.jsx";
import NotFound from "./routes/Notfound.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "add",
    element: <Add />,
  },
  {
    path: "view",
    element: <View />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
