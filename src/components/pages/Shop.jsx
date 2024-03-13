import ProductCard from '../elements/ProductCard';
import { FetchData, DummyData } from '../../utils/FetchData';

export default function Shop() {
  // Fetch data
  const data = DummyData();
  return (
    <>
      <h1>This is SHOP</h1>
      <div className="grid grid-cols-3 justify-items-center">
        {data.map((product) => (
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
    </>
  );
}
