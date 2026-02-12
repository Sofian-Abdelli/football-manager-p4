import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

// On importe nos pages
import App from "./App";
import Create from "./pages/Create";
import Home from "./pages/Home";
import Players from "./pages/Players";
import Stadiums from "./pages/Stadiums";
import Teams from "./pages/Teams";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // Le squelette (Header/Footer)
    children: [
      { path: "/", element: <Home /> },
      { path: "teams", element: <Teams /> },
      { path: "players", element: <Players /> },
      { path: "stadiums", element: <Stadiums /> },
      { path: "create", element: <Create /> },
    ],
  },
]);

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Failed to find the root element");
createRoot(rootElement).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
