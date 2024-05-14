import PropTypes from 'prop-types';

export default function AddToCartBttn({
  text,
  cart,
  setCart,
  data,
  setMessage,
  style = 'styleMain',
}) {
  function removeMessageTimer() {
    setTimeout(() => {
      setMessage(null);
    }, 2000);
  }

  function handleClick() {
    if (
      cart === null ||
      cart.find((product) => product.id === data.id) === undefined
    ) {
      const newEntry = {
        title: data.title,
        image: data.image,
        price: data.price,
        quantity: 1,
        id: data.id,
      };
      setCart((prevCart) =>
        prevCart === null ? [newEntry] : [...prevCart, newEntry]
      );
    } else {
      setMessage('This item is already in your cart.');
      removeMessageTimer();
    }
  }

  return (
    <button
      className={`font-mont text-lg w-40 border-2 border-slate-400 py-2 px-4 mt-2 rounded-full transition-all duration-75 ${
        style === 'styleMain'
          ? 'text-slate-950 hover:bg-slate-200'
          : style === 'styleSecondary'
          ? 'text-slate-50 hover:bg-slate-600'
          : ''
      }`}
      onClick={handleClick}
    >
      {text}
    </button>
  );
}

AddToCartBttn.propTypes = {
  text: PropTypes.string,
  cart: PropTypes.array,
  setCart: PropTypes.func,
  data: PropTypes.object,
  setMessage: PropTypes.func,
  style: PropTypes.string,
};
