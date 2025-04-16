import { createBrowserRouter, Navigate } from "react-router-dom";
import Home from "../components/page/Home.jsx";
import Collection from "../components/page/Collection.jsx";
import Contact from "../components/page/Contact.jsx";

export default createBrowserRouter([
  {
    path: "/",
    element: <Home />,
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