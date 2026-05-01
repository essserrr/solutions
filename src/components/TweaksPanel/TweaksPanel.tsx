import { useState } from "react";
import { useTweaks } from "../../hooks/useTweaks";
import "./TweaksPanel.scss";

export default function TweaksPanel() {
  const [isOpen, setIsOpen] = useState(false);
  const { palette, density, setPalette, setDensity } = useTweaks();

  return (
    <>
      <button
        className="tweaks-trigger"
        onClick={() => setIsOpen(prev => !prev)}
        aria-label="Toggle tweaks panel"
        title="Tweaks"
      >
        ⚙
      </button>

      <div className={`tweaks-panel ${isOpen ? "open" : ""}`}>
        <h6>
          Tweaks
          <button
            className="tweaks-close"
            onClick={() => setIsOpen(false)}
            aria-label="Close tweaks panel"
          >
            ×
          </button>
        </h6>

        <div className="tweaks-group">
          <span className="tweaks-label">Palette</span>
          <div className="tweaks-opts">
            {["warm", "light", "dark"].map(val => (
              <button
                key={val}
                className={palette === val ? "active" : ""}
                onClick={() => setPalette(val)}
              >
                {val.charAt(0).toUpperCase() + val.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className="tweaks-group">
          <span className="tweaks-label">Density</span>
          <div className="tweaks-opts">
            {["spacious", "compact"].map(val => (
              <button
                key={val}
                className={density === val ? "active" : ""}
                onClick={() => setDensity(val)}
              >
                {val.charAt(0).toUpperCase() + val.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
