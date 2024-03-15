import PropTypes from 'prop-types';
import Quantity from '../elements/Quantity.jsx';
import RemoveItemBttn from './RemoveItemBttn.jsx';

export default function CartItem({ data, cart, setCart }) {
  return (
    <div className="max-w-150">
      <div className="flex gap-6 border-slate-200 border-t-2 border-b-2 pt-4 pb-4 mt-4 mb-4">
        <div
          style={{ backgroundImage: `url(${data.image})` }}
          className="bg-contain bg-no-repeat bg-center min-w-52 h-52"
        ></div>
        <div className="flex flex-col gap-1">
          <h1 className="font-mont text-xl">{data.title}</h1>
          <h2 className="font-mont text-2xl">${data.price}</h2>
          <Quantity cart={cart} setCart={setCart} product={data} />
          <RemoveItemBttn cart={cart} setCart={setCart} productData={data} />
        </div>
      </div>
    </div>
  );
}

CartItem.propTypes = {
  data: PropTypes.object,
  cart: PropTypes.array,
  setCart: PropTypes.func,
};
