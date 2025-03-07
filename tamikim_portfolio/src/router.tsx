
import { createBrowserRouter } from 'react-router';
import App from './App';
import About from './pages/about';
import NotFound from './pages/not-found';
// import About from './pages/About';
// import NotFound from './pages/NotFound';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '*',
    element: <NotFound />,
  }
]);
