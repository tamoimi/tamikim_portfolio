import { createBrowserRouter } from "react-router"; 
import MainLayout from "./layouts/main-layout";
import About from "./pages/about";
import NotFound from "./pages/not-found";
import Home from "./pages/home";
import ThreeScene from "./components/ui/three-scene";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />, 
    children: [
      {
        index: true, 
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
        {
        path: "playground",
        element: <ThreeScene />, 
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
