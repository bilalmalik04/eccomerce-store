// components/TopDeals.jsx
import products from '../data/products';          // wherever you export the array
import ProductCard from './ProductCard';          // your existing card
import './TopDeals.css';                          // optional styling

const TopDeals = () => {
  // pick whatever “deal” logic you want 👇
  const topDeals = products
    .filter(p => p.rating > 4)   // e.g. rating 4★ and up
    .slice(0, 6);                 // show first 4 – tweak as needed

  return (
    <section className="top-deals">
      <h2 className="section-heading">Top Deals</h2>

      <div className="deals-grid">
        {topDeals.map(prod => (
          <ProductCard key={prod.id} product={prod} />
        ))}
      </div>
    </section>
  );
};

export default TopDeals;
