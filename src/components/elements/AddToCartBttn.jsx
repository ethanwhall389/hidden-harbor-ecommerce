import PropTypes from 'prop-types';

export default function AddToCartBttn({
  text,
  setCart,
  data,
  style = 'styleMain',
}) {
  function handleClick() {
    const newEntry = {
      title: data.title,
      image: data.image,
      price: data.price,
      quantity: 1,
      id: data.id,
    };
    setCart((prevCart) => [...prevCart, newEntry]);
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
  setCart: PropTypes.func,
  data: PropTypes.object,
  style: PropTypes.string,
};
