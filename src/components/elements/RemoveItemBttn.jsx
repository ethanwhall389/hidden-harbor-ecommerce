import PropTypes from 'prop-types';

export default function RemoveItemBttn({ cart, setCart, productData }) {
  function handleClick() {
    const newCart = cart.map((item) => {
      if (item.id === productData.id) {
        return;
      } else {
        return item;
      }
    });
    console.log(newCart);
    setCart(newCart);
  }

  return (
    <button
      className="font-mont text-lg w-40 border-2 border-slate-400 py-2 px-4 mt-2 rounded-full transition-all duration-75"
      onClick={handleClick}
    >
      Remove Item
    </button>
  );
}

RemoveItemBttn.propTypes = {
  setCart: PropTypes.func,
};
