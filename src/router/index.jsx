import { createBrowserRouter, Navigate } from "react-router-dom";
import Accueil from "../components/Accueil.jsx";
import Collection from "../components/Collection.jsx";
import Contact from "../components/Contact.jsx";

export default createBrowserRouter([
  {
    path: "/",
    element: <Accueil />,
  },
  {
    path: "/collection",
    element: <Collection />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "*",
    element: <Navigate to="/" replace />,
  },
]);