import PropTypes from 'prop-types';

export default function CartItem({ data }) {
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
          <h2 className="font-mont text-lg">Quantity: {data.quantity}</h2>
        </div>
      </div>
    </div>
  );
}

CartItem.propTypes = {
  data: PropTypes.object,
};
