import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import "./Hero.scss";

export type HeroStat = { num: string; label: string };

type HeroProps = {
  meta: string;
  title: ReactNode;
  lede: string;
  stats: HeroStat[];
};

const Hero = ({ meta, title, lede, stats }: HeroProps) => {
  return (
    <section className="hero container">
      <div className="hero-meta">
        <Link to="/">Solutions</Link>
        <span className="hero-meta-sep"></span>
        <span>{meta}</span>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          gap: "48px",
          flexWrap: "wrap",
        }}
      >
        <div style={{ flex: 1, minWidth: "320px" }}>
          <h1 className="display">{title}</h1>
        </div>
        <div
          className="page-mode"
          role="tablist"
          aria-label="Page variant"
          style={{ display: "none" }}
        >
          <button data-mode="rwa" className="active">
            Leverage for RWA
          </button>
          <button data-mode="lev">Prime Brokerage for RWA</button>
        </div>
      </div>

      <p className="lede hero-lede" style={{ marginTop: "40px" }}>
        {lede}
      </p>

      <div className="hero-stats">
        {stats.map((stat, index) => (
          <div className="hero-stat" key={index}>
            <div className="num mono">{stat.num}</div>
            <div className="label">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
