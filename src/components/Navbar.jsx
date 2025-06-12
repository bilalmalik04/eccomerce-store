import { Link, NavLink } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './Navbar.css';
import { FaShoppingCart } from 'react-icons/fa';

export default function Navbar() {
  const { cart } = useCart();
  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);

  return (
    <nav className="navbar">
      {/* Logo */}
      <Link to="/" className="logo">
        Shopping<span>Store</span>
      </Link>

      {/* Nav Links */}
      <div className="navLinks">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/products">Products</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>

      {/* Cart Button */}
      <div className="navActions">
        <Link to="/cart" className="cartBtn">
          <FaShoppingCart />
          <span className="cartCount">{totalItems}</span>
        </Link>
      </div>
    </nav>
  );
}
