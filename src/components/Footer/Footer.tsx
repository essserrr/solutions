import { Link } from "react-router-dom";
import "./Footer.scss";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <div>
            <div className="brand" style={{ marginBottom: 14 }}>
              <span className="brand-mark">G</span>
              <span>Gearbox</span>
            </div>
            <p className="body-sm" style={{ maxWidth: "38ch" }}>
              Onchain credit infrastructure. Isolated accounts, programmable
              controls, asset-aware risk.
            </p>
          </div>
          <div>
            <h5>Solutions</h5>
            <ul>
              <li>
                <Link to="/">Credit for RWAs</Link>
              </li>
              <li>
                <Link to="/">For Asset Issuers</Link>
              </li>
              <li>
                <Link to="/stablecoins">For Leverage</Link>
              </li>
              <li>
                <Link to="/">For Curators</Link>
              </li>
            </ul>
          </div>
          <div>
            <h5>Developers</h5>
            <ul>
              <li>
                <Link to=".">Documentation</Link>
              </li>
              <li>
                <Link to=".">SDK</Link>
              </li>
              <li>
                <Link to=".">Adapters</Link>
              </li>
              <li>
                <Link to=".">Audits</Link>
              </li>
            </ul>
          </div>
          <div>
            <h5>Company</h5>
            <ul>
              <li>
                <Link to=".">About</Link>
              </li>
              <li>
                <Link to=".">DAO</Link>
              </li>
              <li>
                <Link to=".">Careers</Link>
              </li>
              <li>
                <Link to=".">Press</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Gearbox Protocol · All rights reserved</span>
          <span className="mono">v 3.1 · mainnet</span>
        </div>
      </div>
    </footer>
  );
}
