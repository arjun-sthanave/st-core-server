
import { createBrowserRouter } from 'react-router-dom';
import Home from './page/Home';
import About from './section/About';
import Pricing from './section/Pricing';
import Contact from './section/Contact';
import Hero from './section/Hero';
import Error from './page/Error';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <Error />,
    children:[
       {path: '/', element: <Hero />},
       {path: '/about', element: <About />},
       {path: '/pricing', element: <Pricing />},
       {path: '/contact', element: <Contact />},
    ],
  },
]);

export default router;