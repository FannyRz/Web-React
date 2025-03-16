import { createBrowserRouter, Navigate } from "react-router-dom";
import Accueil from "../components/page/Accueil.jsx";
import Collection from "../components/page/Collection.jsx";
import Contact from "../components/page/Contact.jsx";

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