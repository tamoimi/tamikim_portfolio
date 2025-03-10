import { createBrowserRouter } from "react-router"; 
import NotFound from "./pages/not-found";
import Home from "./pages/home";
import ThreeScene from "./components/ui/three-scene";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />, // 기본 페이지를 Home으로 설정
  },
  {
    path: "/playground",
    element: <ThreeScene />, // playground 경로에서 ThreeScene 렌더링
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);