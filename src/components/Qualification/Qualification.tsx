import type { ReactNode } from "react";
import "./Qualification.scss";

type QualificationProps = {
  label: string;
  headline: string;
  /** Set to `""` when the reference HTML uses an empty second column in `.sh`. */
  description?: string;
  items: ReactNode[];
};

const Qualification = ({
  label,
  headline,
  description,
  items,
}: QualificationProps) => {
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

      <div className="qualifier-list">
        {items.map((item, index) => (
          <div className="qualifier-item" key={index}>
            <span className="check">✓</span>
            <span>{item}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Qualification;
