import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import styles from './ProductCard.module.css';

export default function ProductCard({ product }) {
  const { addItem } = useCart();

  return (
    <div className={styles.card}>
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p>${product.price.toFixed(2)}</p>
      <div className={styles.actions}>
        <button onClick={() => addItem(product)}>Add to Cart</button>
        <Link to={`/product/${product.id}`} className={styles.btn}>
          Details
        </Link>
      </div>
    </div>
  );
}
