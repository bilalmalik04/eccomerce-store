import { useNavigate } from "react-router-dom";
import '../App.css'

export default function Hero() {
  const navigate = useNavigate();

  const navigateHandle = () => {
    navigate("/products");
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-details">
        <h1>
          Shop Smart, <span>Live Better</span>
        </h1>
        <p>
          Discover premium products crafted for everyday life. Fast delivery,
          secure checkout, and style you’ll love.
        </p>

        <div className="btns">
          <button className="shop-btn" onClick={navigateHandle}>
            <i className="fa-solid fa-shop"></i> Shop Now
          </button>
          <a
            href="https://github.com/byllzz"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="floating-btn-git"
          >
            ⭐ Star on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
