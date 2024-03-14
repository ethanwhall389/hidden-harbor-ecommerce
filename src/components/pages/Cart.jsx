import PropTypes from 'prop-types';
import CartItem from '../elements/CartItem';

export default function Cart({ cart, setCart }) {
  console.log(cart);

  function getSubtotal() {
    let total = 0;
    cart.forEach((item) => {
      total += item.price;
    });
    return total.toLocaleString();
  }

  return (
    <div className="pt-6 pb-6">
      {cart.map((product, index) => (
        <CartItem key={index} data={product} />
      ))}
      <div className="flex justify-between">
        <p className="text-xl">
          {cart.length} {cart.length > 1 ? 'items' : 'item'}
        </p>
        <h2 className="font-mont text-2xl">Subtotal: ${getSubtotal()}</h2>
      </div>
    </div>
  );
}

Cart.propTypes = {
  cart: PropTypes.array,
  setCart: PropTypes.func,
};
