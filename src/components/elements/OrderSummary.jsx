import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import Button from './Button';

export default function OrderSummary({ cart }) {
  const [subtotal, setSubtotal] = useState(0);
  const [shippingCost, setShipping] = useState(0);
  const [salesTax, setTax] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let newTotal = 0;
    if (cart !== null) {
      cart.forEach((item) => {
        newTotal += item.price * item.quantity;
      });
      setSubtotal(newTotal);

      setShipping(Number((subtotal * 0.05).toFixed(2)));
      setTax(Number((subtotal * 0.07).toFixed(2)));
      setTotal(subtotal + shippingCost + salesTax);
    }
  }, [cart, subtotal, salesTax, shippingCost]);

  return (
    <div>
      <div className="border-2 rounded-lg p-4 px-6 text-lg font-mont flex flex-col gap-1">
        <h2 className="font-mont text-2xl">Summary</h2>
        <div className="flex gap-4">
          <span>Subtotal:</span>
          <span>${subtotal.toLocaleString()}</span>
        </div>
        <div className="flex gap-4">
          <span>Shipping:</span>
          <span>${shippingCost.toLocaleString()}</span>
        </div>
        <div className="flex gap-4">
          <span>Sales tax:</span>
          <span>${salesTax.toLocaleString()}</span>
        </div>
        <hr className="my-2"></hr>
        <div className="flex gap-4 text-2xl">
          <span>Total:</span>
          <span>${total.toLocaleString()}</span>
        </div>
        <div className="mt-3 flex justify-end">
          <Button text={'Checkout'} link={'/'} />
        </div>
      </div>
    </div>
  );
}

OrderSummary.propTypes = {
  cart: PropTypes.array,
};
