import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useState, useEffect } from 'react';

import App from './App';
import Home from './components/pages/Home';
import Cart from './components/pages/Cart';
import Product from './components/pages/Product';
import Shop from './components/pages/Shop';
import NotFound from './components/pages/NotFound';

export default function Router() {
  const [cart, setCart] = useState(null);

  const router = createBrowserRouter([
    {
      path: '/',
      element: <App cart={cart} />,
      errorElement: <NotFound />,
      children: [
        { index: true, element: <Home /> },
        { path: 'shop', element: <Shop /> },
        { path: 'product', element: <Product /> },
        { path: 'cart', element: <Cart cart={cart} setCart={setCart} /> },
        {
          path: 'shop/:productId',
          element: <Product cart={cart} setCart={setCart} />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
