import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useState } from 'react';

import App from './App';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Cart from './components/pages/Cart';
import Product from './components/pages/Product';
import Shop from './components/pages/Shop';

export default function Router() {
  const [cart, setCart] = useState(null);

  const router = createBrowserRouter([
    {
      path: '/',
      element: <App cart={cart} />,
      children: [
        { index: true, element: <Home /> },
        { path: 'about', element: <About /> },
        { path: 'shop', element: <Shop /> },
        { path: 'product', element: <Product /> },
        { path: 'cart', element: <Cart cart={cart} setCart={setCart} /> },
        { path: 'shop/:productId', element: <Product setCart={setCart} /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
