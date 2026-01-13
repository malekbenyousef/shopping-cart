import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import './index.css'

import App from "./App";
import ErrorPage from "./ErrorPage";
import Cart from "./pages/CartPage";
import HomePage from "./pages/HomePage";
import Shop from "./pages/ShopPage";

const router = createBrowserRouter([
  {
    path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
      children:[
          { index: true, element: <HomePage /> },

          {
              path: "ShopPage",
              element: <Shop />,
          },

          {
              path: "CartPage",
              element: <Cart />,
          },

      ]
  },
]
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
