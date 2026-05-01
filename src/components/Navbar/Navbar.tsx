import { Link, useLocation } from "react-router-dom";
import "./Navbar.scss";

export default function Navbar() {
  const { pathname } = useLocation();

  return (
    <header className="nav">
      <div className="container nav-inner">
        <Link className="brand" to="/">
          <span className="brand-mark">G</span>
          <span>Gearbox</span>
        </Link>
        <nav className="nav-links">
          <span className="nav-group">
            Solutions <span className="caret"></span>
          </span>
          <Link to="/" className={pathname === "/" ? "active" : ""}>
            Leverage for RWA
          </Link>
          {/* Static HTML uses <a href="#"> (no dedicated route in reference). */}
          <a href="#">Prime Brokerage for RWA</a>
          <a href="#">Developers</a>
          <a href="#">Docs</a>
        </nav>
        <button className="nav-cta">
          <span className="dot"></span>Request asset onboarding
        </button>
      </div>
    </header>
  );
}
