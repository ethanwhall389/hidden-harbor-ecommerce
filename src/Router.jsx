import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useState } from 'react';

import App from './App';
import Home from './pages/home/Home';
import Cart from './pages/cart/Cart';
import Product from './pages/product/Product';
import Shop from './pages/shop/Shop';
import NotFound from './pages/404/NotFound';

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
