import type { ReactNode } from "react";
import "./SchemeSection.scss";

const SchemeSection = ({
  label,
  title,
  description,
  children,
  caption,
  captionClassName,
  disabled = true,
}: {
  label: string;
  title: ReactNode;
  description: ReactNode;
  children: ReactNode;
  caption: ReactNode;
  captionClassName?: string;
  disabled?: boolean;
}) => {
  const sectionClass = disabled
    ? "section container section-disabled"
    : "section container";

  const captionClasses = ["scheme-caption", captionClassName]
    .filter(Boolean)
    .join(" ");

  return (
    <section className={sectionClass}>
      <div className="sh">
        <div>
          <div className="sh-label">{label}</div>
          <h2 className="display">{title}</h2>
        </div>
        <p>{description}</p>
      </div>
      <div className="scheme-wrap">{children}</div>
      {caption && <div className={captionClasses}>{caption}</div>}
    </section>
  );
};

export default SchemeSection;
