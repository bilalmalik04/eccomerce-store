import { useCart } from '../context/CartContext';

export default function Cart() {
  const { cart, removeItem, changeQty, clear } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  if (cart.length === 0) return <p style={{padding:'20px'}}>Your cart is empty.</p>;

  return (
    <div style={{padding:'20px'}}>
      <h2>Your Cart</h2>
      <ul>
        {cart.map(item => (
          <li key={item.id} style={{margin:'10px 0'}}>
            <strong>{item.title}</strong> — ${item.price.toFixed(2)} ×{' '}
            <input
              type="number"
              value={item.qty}
              min="1"
              style={{ width: '50px', marginRight:'10px' }}
              onChange={e => changeQty(item.id, parseInt(e.target.value))}
            />
            <button onClick={() => removeItem(item.id)} className='cartBtn'>Remove</button>
          </li>
        ))}
      </ul>
      <h3>Total: ${total.toFixed(2)}</h3>
      <button onClick={clear} style={{color :'red', fontWeight: '600'}}>Clear Cart</button>
    </div>
  );
}
