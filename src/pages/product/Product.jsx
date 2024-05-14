import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchData } from '../../utils/FetchData';
import { CircularProgress } from '@mui/material';
import { Rating } from '@mui/material';
import AddToCartBttn from './AddToCartBttn';
import Quantity from '../../global-components/UI/Quantity';

export default function Product({ cart, setCart }) {
  const { productId } = useParams();
  const [productData, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [submitedMessage, setMessage] = useState(null);

  function productIsInCart() {
    if (cart === null) {
      return false;
    } else if (
      cart.find((product) => product.id === productData.id) === undefined
    ) {
      return false;
    } else {
      return true;
    }
  }

  useEffect(() => {
    const url = `/${productId}`;
    fetchData(url, setData, setLoading, setError);
  }, [productId]);

  return (
    <div className='max-w-6xl mx-auto'>
      {error && (
        <div className="text-2xl text-center">
          Error loading products: {error}
        </div>
      )}

      {isLoading && (
        <div className={'flex flex-grow gap-4 justify-center mb-6 mt-2'}>
          <CircularProgress />
        </div>
      )}

      {productData && (
        <div className="p-3 flex flex-col md:flex-row gap-6 justify-center items-center mt-6 md:mt-16 pb-10">
          <div className="grow w-full m-2">
            <div
              style={{ backgroundImage: `url(${productData.image})` }}
              className="bg-contain bg-no-repeat bg-center w-full h-72"
            ></div>
          </div>
          <div className="flex flex-col justify-center gap-4 md:gap-2">
            <h1 className="text-3xl md:text-4xl">{productData.title}</h1>
            <div className="flex gap-2">
              <Rating readOnly={true} value={productData.rating.rate} />
              <p>{`(${productData.rating.count})`}</p>
            </div>
            <h2 className="font-mont text-3xl">${productData.price}</h2>
            <hr></hr>
            <p className="font-mont">{productData.description}</p>
            <div className="flex flex-col justify-center items-center md:justify-start md:flex-row gap-4 ">
              <AddToCartBttn
                text={'Add To Cart'}
                cart={cart}
                setCart={setCart}
                data={productData}
                setMessage={setMessage}
              />
              {productIsInCart() ? (
                <Quantity cart={cart} setCart={setCart} product={productData} />
              ) : (
                ''
              )}
            </div>
            <p className={submitedMessage ? '' : 'invisible'}>
              {submitedMessage}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

Product.propTypes = {
  cart: PropTypes.array,
  setCart: PropTypes.func,
};
