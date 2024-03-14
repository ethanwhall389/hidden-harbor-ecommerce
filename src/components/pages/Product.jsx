import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchData } from '../../utils/FetchData';
import { CircularProgress } from '@mui/material';
import { Rating } from '@mui/material';
import AddToCartBttn from '../elements/AddToCartBttn';

export default function Product({ cart, setCart }) {

  const { productId } = useParams();
  const [productData, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [submitedMessage, setMessage] = useState(null);

  useEffect(() => {
    const url = `/${productId}`;
    fetchData(url, setData, setLoading, setError);
  }, [productId]);

  return (
    <>
      {error && (
        <div className="text-2xl text-center">
          Error loading products: {error}
        </div>
      )}

      {isLoading && (
        <div className={'flex flex-grow gap-4 justify-center mb-6'}>
          <CircularProgress />
        </div>
      )}

      {productData && (
        <div className="flex gap-6 justify-center mt-16">
          <div className="grow w-full m-2">
            <div
              style={{ backgroundImage: `url(${productData.image})` }}
              className="bg-contain bg-no-repeat bg-center w-full h-72"
            ></div>
          </div>
          <div className="flex flex-col justify-center gap-2">
            <h1 className="text-4xl">{productData.title}</h1>
            <div className="flex gap-2">
              <Rating readOnly={true} value={productData.rating.rate} />
              <p>{`(${productData.rating.count})`}</p>
            </div>
            <h2 className="font-mont text-3xl">${productData.price}</h2>
            <hr></hr>
            <p className="font-mont">{productData.description}</p>
            <AddToCartBttn
              text={'Add To Cart'}
              cart={cart}
              setCart={setCart}
              data={productData}
              setMessage={setMessage}
            />
            <p className={submitedMessage ? '' : 'invisible'}>{submitedMessage}</p>
          </div>
        </div>
      )}
    </>
  );
}

Product.propTypes = {
  cart: PropTypes.array,
  setCart: PropTypes.func,
};
