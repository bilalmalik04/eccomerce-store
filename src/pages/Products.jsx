import { useState } from 'react';
import productsData from '../data/products';
import ProductCard from '../components/ProductCard';
import '../styles/Home.css';

export default function Products() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('all');

  const visible = productsData.filter(
    p =>
      (category === 'all' || p.category === category) &&
      p.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="home">
      <h2>Products</h2>

      <div className="filters">
        <input
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Search..."
        />
        <select value={category} onChange={e => setCategory(e.target.value)}>
          <option value="all">All</option>
          <option value="electronics">Electronics</option>
          <option value="men">Men</option>
          <option value="women">Women</option>
        </select>
      </div>

      <div className="product-grid">
        {visible.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
