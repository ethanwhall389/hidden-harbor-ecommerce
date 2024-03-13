import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Cart from './components/pages/Cart';
import Product from './components/pages/Product';
import Shop from './components/pages/Shop';

export default function Router() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      children: [
        { index: true, element: <Home /> },
        { path: 'about', element: <About /> },
        { path: 'shop', element: <Shop />, 
          // children: [
          //   {path: ':productId', element: <Product />}
          // ] 
        },
        { path: 'product', element: <Product /> },
        { path: 'cart', element: <Cart /> },
        { path: 'shop/:productId', element: <Product/>}
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
