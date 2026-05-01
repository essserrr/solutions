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
                <a href="#">Credit for RWAs</a>
              </li>
              <li>
                <a href="#">For Asset Issuers</a>
              </li>
              <li>
                <a href="#">For Leverage</a>
              </li>
              <li>
                <a href="#">For Curators</a>
              </li>
            </ul>
          </div>
          <div>
            <h5>Developers</h5>
            <ul>
              <li>
                <a href="#">Documentation</a>
              </li>
              <li>
                <a href="#">SDK</a>
              </li>
              <li>
                <a href="#">Adapters</a>
              </li>
              <li>
                <a href="#">Audits</a>
              </li>
            </ul>
          </div>
          <div>
            <h5>Company</h5>
            <ul>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">DAO</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Press</a>
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
