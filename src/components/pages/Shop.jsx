import ProductCard from '../elements/ProductCard';
import { fetchData, dummyData } from '../../utils/FetchData';
import { useState, useEffect } from 'react';
import { CircularProgress } from '@mui/material';
import CategorySelect from '../elements/CategorySelect';

export default function Shop() {
  const [shopData, setData] = useState(null);
  const [category, setCategory] = useState('all');
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const url = category !== 'all' ? `/category/${category}` : '';
    fetchData(url, setData, setLoading, setError);
  }, [category]);

  return (
    <div className="pb-10">
      <h1 className="text-4xl text-center mt-10 mb-14">
        Shop our finest products
      </h1>

      {error && (
        <div className="text-2xl text-center">
          Error loading products: {error}
        </div>
      )}

      <div className='m-4 flex justify-end'>
        <CategorySelect setError={setError} setCategory={setCategory}/>
      </div>

      <div
        className={`flex flex-grow gap-4 justify-center mb-6 ${
          isLoading ? '' : 'hidden'
        }`}
      >
        <CircularProgress />
      </div>

      <div className="grid grid-cols-3 gap-10 justify-items-center">
        {shopData && !error &&
          shopData.map((product) => (
            <ProductCard
              key={product.id}
              image={product.image}
              title={product.title}
              price={product.price}
              rating={product.rating.rate}
              reviewNum={product.rating.count}
            />
          ))}
      </div>
    </div>
  );
}
