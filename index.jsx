import { createRoot } from "react-dom/client";
import App from "./App";

import "./style.css";
import "./mobile.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./components/ErrorPage";
import Home from "./components/Home";
import CountryDetail from "./components/CountryDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "contact",
        element: (
          <h1 style={{ textAlign: "center", marginTop: "2rem" }}>
            Contact Uss!
          </h1>
        ),
      },

      {
        path: ":countryDetail",
        element: <CountryDetail />,
      },
    ],
  },
]);

const root = createRoot(document.getElementById("root"));

root.render(<RouterProvider router={router} />);
