import { useParams } from "react-router-dom";

export default function Product() {

  const { productId } = useParams();

  return (
    <div>
      <h1>This is PRODUCT</h1>
      <p>{productId}</p>
    </div>
  )
}
