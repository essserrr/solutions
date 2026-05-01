import "./CTA.scss";

const CTA = ({ title, lede, buttonText }) => {
  return (
    <section className="section container">
      <div className="cta-block">
        <div className="eyebrow">Next step</div>
        <h2
          className="display"
          style={{ marginTop: "18px", marginInline: "auto" }}
        >
          {title}
        </h2>
        <p className="lede">{lede}</p>
        <div
          style={{
            display: "flex",
            gap: "12px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <button className="btn">
            {buttonText} <span className="arrow">→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
