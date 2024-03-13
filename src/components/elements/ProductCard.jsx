import PropTypes from 'prop-types';
import { Rating } from '@mui/material';

export default function ProductCard({
  title,
  image,
  price,
  rating,
  reviewNum,
}) {
  return (
    <div className="w-72 h-96 border-2 border-slate-300 p-6 flex flex-col justify-center items-center gap-4 hover:shadow-lg transition-all duration-75 hover:cursor-pointer">
      <div
        style={{ backgroundImage: `url(${image})` }}
        className="bg-contain bg-no-repeat bg-center w-full h-60"
      ></div>
      {/* <img src={image} className="w-48" /> */}
      <div className="flex flex-col flex-grow justify-around w-full gap-1">
        <p>{title}</p>
        <div className="flex gap-2">
          <Rating readOnly={true} value={rating} />
          <p>{`(${reviewNum})`}</p>
        </div>
        <h2 className="font-mont text-xl">${price}</h2>
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.number,
  rating: PropTypes.number,
  reviewNum: PropTypes.number,
};
