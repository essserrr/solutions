import "./Capabilities.scss";

export default function Capabilities({
  label,
  headline,
  description,
  rows = [],
}) {
  /** HTML reference: RWA uses a second `.sh` column (`<p>`, possibly empty); stablecoins omits it entirely. */
  const showIntroParagraph = description !== undefined;

  return (
    <section className="section container">
      <div className="sh">
        <div>
          <div className="sh-label">{label}</div>
          <h2 className="display">{headline}</h2>
        </div>
        {showIntroParagraph && <p>{description}</p>}
      </div>

      <div className="cap-rows">
        {rows.map((row, index) => (
          <div
            key={index}
            className={`cap-row${index % 2 === 1 ? " reverse" : ""}`}
            data-tone={row.tone}
          >
            <div className="cap-visual" aria-hidden="true">
              {row.visual}
            </div>
            <div className="cap-text">
              <div className="cap-eyebrow">{row.eyebrow}</div>
              <h3 className="cap-headline">{row.headline}</h3>
              <p className="cap-lede">{row.lede}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
