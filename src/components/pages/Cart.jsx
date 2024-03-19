import PropTypes from 'prop-types';
import CartItem from '../elements/CartItem';
import Button from '../elements/Button.jsx';
import OrderSummary from '../elements/OrderSummary.jsx';

export default function Cart({ cart, setCart }) {
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
        <div className="p-3 pt-6 pb-10 flex flex-col md:flex-row gap-4">
          <div className="flex-grow">
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
            </div>
          </div>

          <div className="flex justify-center items-start flex-grow mt-10">
            <OrderSummary cart={cart} />
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
