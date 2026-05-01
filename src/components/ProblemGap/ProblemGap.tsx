import "./ProblemGap.scss";

/** Column headers in the compare grid (no body/tag). */
export type GapCompareHeader = {
  type: string;
  title: string;
};

/** Data cells in the compare grid. */
export type GapCompareCell = {
  type: string;
  title: string;
  body: string;
  tag: string;
};

export type GapCompareItem = GapCompareHeader | GapCompareCell;

export type FailListItem = {
  tone: string;
  title: string;
  body: string;
  num: string;
};

export type ProblemGapProps = {
  variant?: "gap" | "fail";
  label?: string;
  headline?: string;
  description?: string;
  items?: GapCompareItem[] | FailListItem[];
};

export default function ProblemGap({
  variant = "gap",
  items,
  label,
  headline,
  description,
}: ProblemGapProps) {
  const list = items ?? [];
  return (
    <section className="section container">
      {(label || headline || description) && (
        <div className="sh">
          <div>
            {label && <div className="sh-label">{label}</div>}
            {headline && <h2 className="display">{headline}</h2>}
          </div>
          {description && <p>{description}</p>}
        </div>
      )}

      {variant === "gap" && (
        <div className="gap-compare">
          {(list as GapCompareItem[]).map((item, index) => {
            const isHeader = !("body" in item);
            if (isHeader) {
              return (
                <div key={index} className={`gap-head ${item.type}`}>
                  <span className="dot"></span>
                  {item.title}
                </div>
              );
            }
            return (
              <div key={index} className={`gap-cell ${item.type}`}>
                <div className="gap-title">{item.title}</div>
                <div className="gap-body">{item.body}</div>
                <div className="gap-tag">{item.tag}</div>
              </div>
            );
          })}
        </div>
      )}

      {variant === "fail" && (
        <div className="fail-list">
          {(list as FailListItem[]).map((item, index) => (
            <div key={index} className="fail-item" data-tone={item.tone}>
              <div>
                <div className="fail-title">{item.title}</div>
                <div className="fail-body">{item.body}</div>
              </div>
              <div className="fail-num mono">{item.num}</div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
