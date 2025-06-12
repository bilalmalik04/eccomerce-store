import { useParams } from 'react-router-dom';
import products from '../data/products';
import { useCart } from '../context/CartContext';
import './ProductDetail.css';

export default function ProductDetail() {
  const { id } = useParams();
  const { addItem } = useCart();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return <h2>Product not found.</h2>;
  }

  return (
    <div className="product-detail">
      <img src={product.image} alt={product.title} />
      <div className="info">
        <h2>{product.title}</h2>
        <p>${product.price.toFixed(2)}</p>
        <p>Rating: {product.rating} ⭐</p>
        <p>{product.description}</p>
        <button onClick={() => addItem(product)}>Add to Cart</button>
      </div>
    </div>
  );
}
