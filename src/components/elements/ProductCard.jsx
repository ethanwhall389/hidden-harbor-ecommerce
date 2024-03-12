import PropTypes from 'prop-types';

export default function ProductCard({ title, image, id }) {
  return (
    <div className="w-72 h-96 border-2 p-6 flex flex-col justify-center items-center gap-4">
      <div className="flex-grow flex items-center justify-center">
        <img src={image} className="w-48" />
      </div>
      <div className="flex items-center">
        <h2>{title}</h2>
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  id: PropTypes.number,
};
