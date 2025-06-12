import { createContext, useState, useContext, useEffect } from 'react';


const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() =>
    JSON.parse(localStorage.getItem('cart') || '[]')
  );

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addItem = (product, qty = 1) => {
    setCart(prev =>
      prev.some(p => p.id === product.id)
        ? prev.map(p =>
            p.id === product.id ? { ...p, qty: p.qty + qty } : p
          )
        : [...prev, { ...product, qty }]
    );
  };

  const removeItem = id => setCart(prev => prev.filter(p => p.id !== id));

  const changeQty = (id, qty) => {
    if (qty <= 0) return removeItem(id);
    setCart(prev => prev.map(p => (p.id === id ? { ...p, qty } : p)));
  };

  const clear = () => setCart([]);

  return (
    <CartContext.Provider
      value={{ cart, addItem, removeItem, changeQty, clear }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);





