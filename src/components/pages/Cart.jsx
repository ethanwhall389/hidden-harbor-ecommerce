import PropTypes from 'prop-types';
import CartItem from '../elements/CartItem';
import Button from '../elements/Button.jsx';
import { useState, useEffect } from 'react';

export default function Cart({ cart, setCart }) {
  const [subtotal, setSubtotal] = useState(0);

  useEffect(() => {
    let newTotal = 0;
    if (cart !== null) {
      cart.forEach((item) => {
        newTotal += item.price * item.quantity;
      });
      setSubtotal(newTotal.toLocaleString());
    }
  }, [cart]);

  // function getSubtotal() {
  //   let total = 0;
  //   if (cart === null) {
  //     total = 0;
  //   } else {
  //     cart.forEach((item) => {
  //       total += item.price * item.quantity;
  //     });
  //   }
  //   return total.toLocaleString();
  // }

  return (
    <>
      {!cart && (
        <div className="h-full flex flex-col gap-4 justify-center items-center">
          <h1 className="font-mont text-3xl">No items in your cart yet.</h1>
          <Button text={'Shop Now!'} link={'/shop'} />
        </div>
      )}

      {cart && (
        <div className="pt-6 pb-6">
          {cart.map((product, index) => (
            <CartItem
              key={index}
              data={product}
              cart={cart}
              setCart={setCart}
            />
          ))}
          <div className="flex justify-between">
            <p className="text-xl">
              {cart.length} {cart.length > 1 ? 'items' : 'item'}
            </p>
            <h2 className="font-mont text-2xl">Subtotal: ${subtotal}</h2>
          </div>
        </div>
      )}
    </>
  );
}

Cart.propTypes = {
  cart: PropTypes.array,
  setCart: PropTypes.func,
};
