import { Helmet } from "react-helmet-async";
import Capabilities from "../components/Capabilities/Capabilities";
import CTA from "../components/CTA/CTA";
import Hero from "../components/Hero/Hero";
import ProblemGap from "../components/ProblemGap/ProblemGap";
import Qualification from "../components/Qualification/Qualification";
import SchemeSection from "../components/SchemeSection/SchemeSection";

export default function StablecoinsPage() {
  return (
    <>
      <Helmet>
        <title>Gearbox - Credit for stablecoin issuers</title>
      </Helmet>

      <Hero
        meta="Solutions / For stablecoin issuers"
        title={
          <>
            The borrowing product
            <br />
            your stablecoin is missing.
          </>
        }
        lede="Issuance and supply are solved. Organic utilization isn't. Gearbox supplies the full borrow-side product stack (leverage, prime brokerage, RWA strategies) that drives adoption beyond yield-chasing."
        stats={[
          {
            num: "Full product stack",
            label:
              "\u201cEarn\u201d pool enables savings for the stablecoin. \u201cLeverage\u201d creates liquidity utilization.",
          },
          {
            num: "No-DEX execution",
            label:
              "Direct integrations with partner asset issuers allows borrowers to invest without depending on secondary liquidity.",
          },
          {
            num: "RWA support",
            label:
              "Give the users exposure to tokenized securities yield by plugging into RWA integration library.",
          },
        ]}
      />

      <Capabilities
        label="01 · The primitives"
        headline="Three mechanics that turn a stablecoin into a used product."
        rows={[
          {
            tone: "lilac",
            eyebrow: "Organic demand",
            headline: "Grow demand instead of paying for TVL.",
            lede: "Gearbox drives demand for productive borrowing by turning leverage into an accessible product and opening access to diverse yield opportunities. The money market launches with yield sources already integrated.",
            visual: (
              <svg
                aria-hidden="true"
                viewBox="0 0 360 180"
                preserveAspectRatio="xMidYMid meet"
              >
                <defs>
                  <marker
                    id="mkLilacR1-stablecoins"
                    viewBox="0 0 10 10"
                    refX="9"
                    refY="5"
                    markerWidth="7"
                    markerHeight="7"
                    orient="auto-start-reverse"
                  >
                    <path
                      d="M 0 0 L 10 5 L 0 10 Z"
                      fill="color-mix(in oklch, var(--glow-lilac) 70%, transparent)"
                    />
                  </marker>
                  <marker
                    id="mkFlowR1-stablecoins"
                    viewBox="0 0 10 10"
                    refX="9"
                    refY="5"
                    markerWidth="7"
                    markerHeight="7"
                    orient="auto-start-reverse"
                  >
                    <path
                      d="M 0 0 L 10 5 L 0 10 Z"
                      fill="color-mix(in oklch, var(--bg) 35%, transparent)"
                    />
                  </marker>
                </defs>

                <rect
                  className="node-stroke"
                  x="14"
                  y="32"
                  width="66"
                  height="32"
                  rx="6"
                />
                <text
                  className="lbl"
                  x="47"
                  y="49"
                  textAnchor="middle"
                  style={{ fontSize: "8.5px" }}
                >
                  BORROWER
                </text>
                <text
                  className="lbl-dim"
                  x="47"
                  y="60"
                  textAnchor="middle"
                  style={{ fontSize: "7.5px" }}
                >
                  1× capital
                </text>

                <rect
                  className="node-stroke"
                  x="14"
                  y="116"
                  width="66"
                  height="32"
                  rx="6"
                />
                <text
                  className="lbl"
                  x="47"
                  y="133"
                  textAnchor="middle"
                  style={{ fontSize: "8.5px" }}
                >
                  POOL
                </text>
                <text
                  className="lbl-dim"
                  x="47"
                  y="144"
                  textAnchor="middle"
                  style={{ fontSize: "7.5px" }}
                >
                  9× borrow
                </text>

                <path
                  className="flow"
                  d="M 80 48 L 106 68"
                  markerEnd="url(#mkFlowR1-stablecoins)"
                />
                <path
                  className="flow"
                  d="M 80 132 L 106 112"
                  markerEnd="url(#mkFlowR1-stablecoins)"
                />

                <rect
                  className="node-stroke node-accent-lilac"
                  x="108"
                  y="44"
                  width="128"
                  height="92"
                  rx="10"
                />
                <text
                  className="lbl"
                  x="172"
                  y="62"
                  textAnchor="middle"
                  style={{ fontSize: "8.5px", letterSpacing: "0.12em" }}
                >
                  CREDIT ACCOUNT
                </text>
                <text
                  x="172"
                  y="104"
                  textAnchor="middle"
                  style={{
                    fontFamily: "ui-monospace, Menlo, monospace",
                    fontSize: "30px",
                    fontWeight: "600",
                    fill: "color-mix(in oklch, var(--glow-lilac) 90%, transparent)",
                    letterSpacing: "0",
                  }}
                >
                  ×10
                </text>
                <text
                  className="lbl-dim"
                  x="172"
                  y="124"
                  textAnchor="middle"
                  style={{ fontSize: "7.5px" }}
                >
                  leveraged position
                </text>

                <path
                  d="M 236 90 L 252 56"
                  stroke="color-mix(in oklch, var(--glow-lilac) 55%, transparent)"
                  strokeWidth="1.1"
                  fill="none"
                  markerEnd="url(#mkLilacR1-stablecoins)"
                />
                <path
                  d="M 236 90 L 252 92"
                  stroke="color-mix(in oklch, var(--glow-lilac) 55%, transparent)"
                  strokeWidth="1.1"
                  fill="none"
                  markerEnd="url(#mkLilacR1-stablecoins)"
                />
                <path
                  d="M 236 90 L 252 128"
                  stroke="color-mix(in oklch, var(--glow-lilac) 55%, transparent)"
                  strokeWidth="1.1"
                  fill="none"
                  markerEnd="url(#mkLilacR1-stablecoins)"
                />

                <rect
                  className="chip-lilac"
                  x="256"
                  y="48"
                  width="92"
                  height="18"
                  rx="4"
                />
                <text
                  className="lbl-chip"
                  x="302"
                  y="60"
                  textAnchor="middle"
                  style={{ fontSize: "8px" }}
                >
                  PRIVATE CREDIT
                </text>

                <rect
                  className="chip-lilac"
                  x="256"
                  y="82"
                  width="92"
                  height="18"
                  rx="4"
                />
                <text
                  className="lbl-chip"
                  x="302"
                  y="94"
                  textAnchor="middle"
                  style={{ fontSize: "8px" }}
                >
                  DEFI VAULT
                </text>

                <rect
                  className="chip-lilac"
                  x="256"
                  y="116"
                  width="92"
                  height="18"
                  rx="4"
                />
                <text
                  className="lbl-chip"
                  x="302"
                  y="128"
                  textAnchor="middle"
                  style={{ fontSize: "8px" }}
                >
                  TOKENIZED FUND
                </text>
              </svg>
            ),
          },
          {
            tone: "mint",
            eyebrow: "Built-in utility",
            headline: "Built-in access to direct investments.",
            lede: "Direct integrations with asset issuers allow partners to use the stablecoin as a native deposit asset, enabling a leveraged yield product without the liquidity bootstrapping requirement. Borrowers get improved UX and capital efficiency; lenders benefit from utilization.",
            visual: (
              <svg
                aria-hidden="true"
                viewBox="0 0 360 180"
                preserveAspectRatio="xMidYMid meet"
              >
                <defs>
                  <marker
                    id="mkMintR2-stablecoins"
                    viewBox="0 0 10 10"
                    refX="9"
                    refY="5"
                    markerWidth="6"
                    markerHeight="6"
                    orient="auto-start-reverse"
                  >
                    <path
                      d="M0,0 L10,5 L0,10z"
                      fill="color-mix(in oklch, white 60%, transparent)"
                    />
                  </marker>
                </defs>

                <g transform="translate(10,16)">
                  <rect
                    width="118"
                    height="148"
                    rx="12"
                    className="node-accent-mint"
                  />
                  <rect
                    x="10"
                    y="12"
                    width="98"
                    height="38"
                    rx="8"
                    className="node-stroke"
                    fill="color-mix(in oklch, white 10%, transparent)"
                  />
                  <text x="59" y="28" textAnchor="middle" className="lbl">
                    Subscription
                  </text>
                  <text x="59" y="42" textAnchor="middle" className="lbl-dim">
                    issuer contract
                  </text>

                  <rect
                    x="10"
                    y="60"
                    width="98"
                    height="38"
                    rx="8"
                    className="node-stroke"
                    fill="color-mix(in oklch, white 10%, transparent)"
                  />
                  <text x="59" y="76" textAnchor="middle" className="lbl">
                    Redemption
                  </text>
                  <text x="59" y="90" textAnchor="middle" className="lbl-dim">
                    issuer contract
                  </text>

                  <text
                    x="59"
                    y="118"
                    textAnchor="middle"
                    className="lbl"
                    style={{ fontSize: "9px", fill: "var(--glow-mint)" }}
                  >
                    NATIVE LIQUIDITY
                  </text>
                  <text x="59" y="132" textAnchor="middle" className="lbl-dim">
                    face-value · no fees
                  </text>
                </g>

                <g transform="translate(142,58)" opacity="0.55">
                  <ellipse
                    cx="38"
                    cy="32"
                    rx="38"
                    ry="26"
                    className="node-dim"
                    strokeDasharray="3 3"
                  />
                  <text
                    x="38"
                    y="28"
                    textAnchor="middle"
                    className="lbl-dim"
                    style={{ fontSize: "8px" }}
                  >
                    DEX · RFQ
                  </text>
                  <text
                    x="38"
                    y="40"
                    textAnchor="middle"
                    className="lbl-dim"
                    style={{ fontSize: "8px" }}
                  >
                    fees · TVL costs
                  </text>
                  <line
                    x1="6"
                    y1="58"
                    x2="70"
                    y2="6"
                    stroke="color-mix(in oklch, white 30%, transparent)"
                    strokeWidth="1"
                    strokeDasharray="2 2"
                  />
                </g>

                <g transform="translate(228,40)">
                  <rect
                    width="120"
                    height="100"
                    rx="12"
                    className="node-accent-mint"
                  />
                  <text x="60" y="22" textAnchor="middle" className="lbl">
                    Credit Account
                  </text>
                  <ellipse
                    cx="60"
                    cy="62"
                    rx="40"
                    ry="20"
                    className="chip-mint"
                  />
                  <text x="60" y="66" textAnchor="middle" className="lbl-chip">
                    Asset
                  </text>
                </g>

                <path
                  d="M 128 34 C 180 14, 210 22, 226 52"
                  className="flow"
                  stroke="var(--glow-mint)"
                  strokeWidth="1.4"
                  markerEnd="url(#mkMintR2-stablecoins)"
                  style={{
                    filter:
                      "drop-shadow(0 0 3px color-mix(in oklch, var(--glow-mint) 45%, transparent))",
                  }}
                />
                <text
                  x="178"
                  y="16"
                  textAnchor="middle"
                  className="lbl"
                  style={{ fontSize: "8px", fill: "var(--glow-mint)" }}
                >
                  asset
                </text>

                <path
                  d="M 226 130 C 210 160, 180 168, 128 82"
                  className="flow"
                  stroke="var(--glow-mint)"
                  strokeWidth="1.4"
                  markerEnd="url(#mkMintR2-stablecoins)"
                  style={{
                    filter:
                      "drop-shadow(0 0 3px color-mix(in oklch, var(--glow-mint) 45%, transparent))",
                  }}
                />
                <text
                  x="180"
                  y="170"
                  textAnchor="middle"
                  className="lbl"
                  style={{ fontSize: "8px", fill: "var(--glow-mint)" }}
                >
                  asset
                </text>
              </svg>
            ),
          },
          {
            tone: "peach",
            eyebrow: "Compliant by design",
            headline: "Compliant markets for every asset, from DeFi to RWAs.",
            lede: "Gearbox's architecture supports compliant markets across every asset class, from DeFi collateral to tokenized real-world assets. Credit Accounts segregate borrower positions on-chain; issuer-side whitelisting and transfer restrictions propagate through every integration. Tokenized treasuries, private credit, CLOs, and tokenized funds plug in alongside standard DeFi collateral.",
            visual: (
              <svg
                aria-hidden="true"
                viewBox="0 0 360 180"
                preserveAspectRatio="xMidYMid meet"
              >
                <defs>
                  <marker
                    id="mkPeachR3-stablecoins"
                    viewBox="0 0 10 10"
                    refX="9"
                    refY="5"
                    markerWidth="7"
                    markerHeight="7"
                    orient="auto-start-reverse"
                  >
                    <path
                      d="M 0 0 L 10 5 L 0 10 Z"
                      fill="color-mix(in oklch, var(--glow-peach) 70%, transparent)"
                    />
                  </marker>
                  <marker
                    id="mkFlowR3-stablecoins"
                    viewBox="0 0 10 10"
                    refX="9"
                    refY="5"
                    markerWidth="7"
                    markerHeight="7"
                    orient="auto-start-reverse"
                  >
                    <path
                      d="M 0 0 L 10 5 L 0 10 Z"
                      fill="color-mix(in oklch, var(--bg) 35%, transparent)"
                    />
                  </marker>
                </defs>

                <rect
                  className="node-stroke"
                  x="12"
                  y="68"
                  width="72"
                  height="44"
                  rx="6"
                />
                <text className="lbl" x="48" y="87" textAnchor="middle">
                  POOL
                </text>
                <text
                  className="lbl-dim"
                  x="48"
                  y="101"
                  textAnchor="middle"
                  style={{ fontSize: "7.5px" }}
                >
                  supply-side
                </text>

                <path
                  className="flow"
                  d="M 84 90 L 119 90"
                  markerEnd="url(#mkFlowR3-stablecoins)"
                />

                <rect
                  className="node-stroke"
                  x="122"
                  y="28"
                  width="118"
                  height="120"
                  rx="8"
                />
                <text
                  className="lbl"
                  x="181"
                  y="44"
                  textAnchor="middle"
                  style={{ fontSize: "7.5px", letterSpacing: "0.1em" }}
                >
                  INTEGRATION LIBRARY
                </text>

                <rect
                  className="chip-peach"
                  x="138"
                  y="56"
                  width="86"
                  height="18"
                  rx="4"
                />
                <text className="lbl-chip" x="181" y="68" textAnchor="middle">
                  SECURITIZE
                </text>

                <rect
                  className="chip-peach"
                  x="138"
                  y="80"
                  width="86"
                  height="18"
                  rx="4"
                />
                <text className="lbl-chip" x="181" y="92" textAnchor="middle">
                  MIDAS
                </text>

                <rect
                  className="chip-peach"
                  x="138"
                  y="104"
                  width="86"
                  height="18"
                  rx="4"
                />
                <text className="lbl-chip" x="181" y="116" textAnchor="middle">
                  INFINIFI
                </text>

                <text className="lbl-dim" x="181" y="138" textAnchor="middle">
                  + more
                </text>

                <path
                  d="M 240 88 L 255 38"
                  stroke="color-mix(in oklch, var(--glow-peach) 55%, transparent)"
                  strokeWidth="1.1"
                  fill="none"
                  markerEnd="url(#mkPeachR3-stablecoins)"
                />
                <path
                  d="M 240 88 L 255 64"
                  stroke="color-mix(in oklch, var(--glow-peach) 55%, transparent)"
                  strokeWidth="1.1"
                  fill="none"
                  markerEnd="url(#mkPeachR3-stablecoins)"
                />
                <path
                  d="M 240 88 L 255 90"
                  stroke="color-mix(in oklch, var(--glow-peach) 55%, transparent)"
                  strokeWidth="1.1"
                  fill="none"
                  markerEnd="url(#mkPeachR3-stablecoins)"
                />
                <path
                  d="M 240 88 L 255 116"
                  stroke="color-mix(in oklch, var(--glow-peach) 55%, transparent)"
                  strokeWidth="1.1"
                  fill="none"
                  markerEnd="url(#mkPeachR3-stablecoins)"
                />

                <rect
                  className="node-stroke"
                  x="258"
                  y="28"
                  width="92"
                  height="20"
                  rx="4"
                />
                <text
                  className="lbl"
                  x="304"
                  y="42"
                  textAnchor="middle"
                  style={{ fontSize: "8px" }}
                >
                  PRIVATE CREDIT
                </text>

                <rect
                  className="node-stroke"
                  x="258"
                  y="54"
                  width="92"
                  height="20"
                  rx="4"
                />
                <text className="lbl" x="304" y="68" textAnchor="middle">
                  CLO
                </text>

                <rect
                  className="node-stroke"
                  x="258"
                  y="80"
                  width="92"
                  height="20"
                  rx="4"
                />
                <text
                  className="lbl"
                  x="304"
                  y="94"
                  textAnchor="middle"
                  style={{ fontSize: "8px" }}
                >
                  DEFI VAULT
                </text>

                <rect
                  className="node-stroke"
                  x="258"
                  y="106"
                  width="92"
                  height="20"
                  rx="4"
                />
                <text
                  className="lbl"
                  x="304"
                  y="120"
                  textAnchor="middle"
                  style={{ fontSize: "8px" }}
                >
                  TOKENIZED FUND
                </text>

                <text className="lbl-dim" x="304" y="138" textAnchor="middle">
                  and more
                </text>
              </svg>
            ),
          },
        ]}
      />

      <ProblemGap
        variant="gap"
        label="02 · The stack"
        headline="Gearbox covers money-market access, liquidity, and yield utility for the stablecoin at launch."
        items={[
          { type: "good", title: "Gearbox" },
          { type: "bad", title: "Typical money markets" },
          {
            type: "good",
            title: "Borrowing is a clear product out of the box",
            body: "Accessible leveraged yield strategies improve utilization and distribution. Gearbox ships a full stack of products to ensure organic usage.",
            tag: "01 · Utilization",
          },
          {
            type: "bad",
            title: "Fail to facilitate supply utilization",
            body: "Users fail to take advantage of money-market functionality, since use cases aren't present, or friction, complexity and UX stop them from participating. Supply-side incentives aren't enough to build sustainable adoption.",
            tag: "01 · Utilization",
          },
          {
            type: "good",
            title: "Native subscription and redemption for tokenized assets",
            body: "Partner asset-issuers allow native subscribe and redeem using the partner stablecoin. Gearbox combines execution with credit to improve UX and capital efficiency.",
            tag: "02 · Liquidity",
          },
          {
            type: "bad",
            title: "Deep secondary liquidity is a prerequisite",
            body: "Meaningful participation from borrowers and liquidators depends on deep secondary liquidity that issuers must fund and maintain themselves.",
            tag: "02 · Liquidity",
          },
          {
            type: "good",
            title: "RWA-ready by design",
            body: "A growing library of integrations allows plug-in of versatile asset strategies (tokenized yield, credit strategies, prime-brokerage venues).",
            tag: "03 · Strategies",
          },
          {
            type: "bad",
            title: "No scalable RWA support",
            body: "Existing protocols have to be rebuilt to comply with the issuers' requirements and workflows, increasing complexity and friction of user interactions.",
            tag: "03 · Strategies",
          },
        ]}
      />

      <hr className="rule-thin" />

      <SchemeSection
        disabled={true}
        label="03 · How it works"
        title={<>How credit flows against an RWA.</>}
        description="Read left-to-right. The asset arrives as itself, enters a Credit Account, draws stable liquidity from the lender market, and remains subject to issuer policy at every step."
        caption={
          <>
            Passive lenders supply stables. A borrower opens a credit account,
            posts a tokenized RWA as collateral, and draws USDC against it.
            Every external call the account can make (redemption, oracle read,
            compliance check) is explicitly whitelisted. Nothing is
            permissionless inside the account, but the account itself remains
            composable from the outside.
          </>
        }
      >
        <svg
          aria-hidden="true"
          viewBox="0 0 1160 460"
          width="100%"
          style={{ maxWidth: "1080px", margin: "0 auto", display: "block" }}
        >
          <defs>
            <filter
              id="glowMint-stablecoins"
              x="-20%"
              y="-20%"
              width="140%"
              height="140%"
            >
              <feGaussianBlur stdDeviation="4" result="b" />
              <feMerge>
                <feMergeNode in="b" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <marker
              id="arrow-stablecoins"
              viewBox="0 0 10 10"
              refX="9"
              refY="5"
              markerWidth="6"
              markerHeight="6"
              orient="auto-start-reverse"
            >
              <path d="M0,0 L10,5 L0,10 z" fill="currentColor" />
            </marker>
          </defs>

          <g
            stroke="currentColor"
            strokeWidth="1"
            style={{ color: "var(--rule-soft)" }}
            opacity="0.6"
          >
            <line x1="0" y1="110" x2="1160" y2="110" strokeDasharray="2 4" />
            <line x1="0" y1="350" x2="1160" y2="350" strokeDasharray="2 4" />
          </g>

          <g transform="translate(40,170)">
            <rect
              width="220"
              height="120"
              rx="60"
              fill="currentColor"
              style={{ color: "var(--ink)" }}
            />
            <rect
              width="220"
              height="120"
              rx="60"
              fill="none"
              stroke="var(--glow-mint)"
              strokeWidth="2"
              style={{ filter: "drop-shadow(0 0 8px var(--glow-mint))" }}
            />
            <text
              x="110"
              y="52"
              textAnchor="middle"
              fill="var(--bg)"
              fontFamily="var(--font-mono)"
              fontSize="11"
              letterSpacing="2"
              opacity="0.7"
            >
              SOURCE
            </text>
            <text
              x="110"
              y="76"
              textAnchor="middle"
              fill="var(--bg)"
              fontFamily="var(--font-sans)"
              fontSize="18"
              fontWeight="500"
            >
              Passive Liquidity
            </text>
            <text
              x="110"
              y="98"
              textAnchor="middle"
              fill="var(--bg)"
              fontFamily="var(--font-sans)"
              fontSize="13"
              opacity="0.7"
            >
              USDC · USDT · WETH
            </text>
          </g>

          <g transform="translate(450,90)">
            <rect
              width="260"
              height="280"
              rx="28"
              fill="var(--bg)"
              stroke="currentColor"
              strokeWidth="1.5"
              style={{ color: "var(--ink)" }}
            />
            <rect
              x="16"
              y="16"
              width="228"
              height="36"
              rx="10"
              fill="currentColor"
              style={{ color: "var(--ink)" }}
            />
            <text
              x="130"
              y="39"
              textAnchor="middle"
              fill="var(--bg)"
              fontFamily="var(--font-mono)"
              fontSize="12"
              letterSpacing="1.5"
            >
              CREDIT ACCOUNT · 0x7a…f3
            </text>

            <text
              x="30"
              y="80"
              fill="currentColor"
              style={{ color: "var(--ink-muted)" }}
              fontFamily="var(--font-mono)"
              fontSize="10"
              letterSpacing="1.5"
            >
              COLLATERAL
            </text>
            <g transform="translate(30,90)">
              <rect width="200" height="40" rx="10" fill="var(--tone-mint)" />
              <circle
                cx="22"
                cy="20"
                r="8"
                fill="currentColor"
                style={{ color: "var(--ink)" }}
              />
              <text
                x="40"
                y="18"
                fill="currentColor"
                style={{ color: "var(--ink)" }}
                fontFamily="var(--font-sans)"
                fontSize="12"
                fontWeight="500"
              >
                Tokenized T-Bill
              </text>
              <text
                x="40"
                y="32"
                fill="currentColor"
                style={{ color: "var(--ink-soft)" }}
                fontFamily="var(--font-mono)"
                fontSize="10"
              >
                2,400,000
              </text>
            </g>

            <text
              x="30"
              y="160"
              fill="currentColor"
              style={{ color: "var(--ink-muted)" }}
              fontFamily="var(--font-mono)"
              fontSize="10"
              letterSpacing="1.5"
            >
              DEBT
            </text>
            <g transform="translate(30,170)">
              <rect width="200" height="40" rx="10" fill="var(--tone-lilac)" />
              <circle
                cx="22"
                cy="20"
                r="8"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                style={{ color: "var(--ink)" }}
              />
              <text
                x="40"
                y="18"
                fill="currentColor"
                style={{ color: "var(--ink)" }}
                fontFamily="var(--font-sans)"
                fontSize="12"
                fontWeight="500"
              >
                USDC
              </text>
              <text
                x="40"
                y="32"
                fill="currentColor"
                style={{ color: "var(--ink-soft)" }}
                fontFamily="var(--font-mono)"
                fontSize="10"
              >
                1,680,000
              </text>
            </g>

            <g transform="translate(30,230)">
              <text
                fill="currentColor"
                style={{ color: "var(--ink-muted)" }}
                fontFamily="var(--font-mono)"
                fontSize="10"
                letterSpacing="1.5"
              >
                HEALTH
              </text>
              <rect y="12" width="200" height="6" rx="3" fill="var(--rule)" />
              <rect
                y="12"
                width="142"
                height="6"
                rx="3"
                fill="var(--glow-mint)"
              />
              <text
                x="200"
                y="8"
                textAnchor="end"
                fill="currentColor"
                style={{ color: "var(--ink)" }}
                fontFamily="var(--font-mono)"
                fontSize="10"
              >
                1.71
              </text>
            </g>
          </g>

          <g transform="translate(880,80)">
            <text
              x="120"
              y="-4"
              textAnchor="middle"
              fill="currentColor"
              style={{ color: "var(--ink-muted)" }}
              fontFamily="var(--font-mono)"
              fontSize="10"
              letterSpacing="1.5"
            >
              WHITELISTED VENUES
            </text>

            <g transform="translate(0,10)">
              <rect width="240" height="48" rx="12" fill="var(--tone-mint)" />
              <text
                x="20"
                y="22"
                fill="currentColor"
                style={{ color: "var(--ink)" }}
                fontFamily="var(--font-sans)"
                fontSize="13"
                fontWeight="500"
              >
                Transfer Agent Bridge
              </text>
              <text
                x="20"
                y="38"
                fill="currentColor"
                style={{ color: "var(--ink-soft)" }}
                fontFamily="var(--font-mono)"
                fontSize="10"
              >
                issuer.redeem()
              </text>
            </g>
            <g transform="translate(0,70)">
              <rect width="240" height="48" rx="12" fill="var(--tone-lilac)" />
              <text
                x="20"
                y="22"
                fill="currentColor"
                style={{ color: "var(--ink)" }}
                fontFamily="var(--font-sans)"
                fontSize="13"
                fontWeight="500"
              >
                Chainlink PoR Oracle
              </text>
              <text
                x="20"
                y="38"
                fill="currentColor"
                style={{ color: "var(--ink-soft)" }}
                fontFamily="var(--font-mono)"
                fontSize="10"
              >
                price · attestation
              </text>
            </g>
            <g transform="translate(0,130)">
              <rect width="240" height="48" rx="12" fill="var(--tone-peach)" />
              <text
                x="20"
                y="22"
                fill="currentColor"
                style={{ color: "var(--ink)" }}
                fontFamily="var(--font-sans)"
                fontSize="13"
                fontWeight="500"
              >
                Compliance Adapter
              </text>
              <text
                x="20"
                y="38"
                fill="currentColor"
                style={{ color: "var(--ink-soft)" }}
                fontFamily="var(--font-mono)"
                fontSize="10"
              >
                kyc.verify() · allow()
              </text>
            </g>
            <g transform="translate(0,190)" opacity="0.5">
              <rect
                width="240"
                height="48"
                rx="12"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeDasharray="3 4"
                style={{ color: "var(--ink-muted)" }}
              />
              <text
                x="120"
                y="30"
                textAnchor="middle"
                fill="currentColor"
                style={{ color: "var(--ink-muted)" }}
                fontFamily="var(--font-mono)"
                fontSize="11"
              >
                + governance-added
              </text>
            </g>
          </g>

          <g
            style={{ color: "var(--ink)" }}
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
            markerEnd="url(#arrow-stablecoins)"
          >
            <path d="M 262 230 C 340 230, 380 230, 448 230" />
          </g>
          <text
            x="355"
            y="218"
            textAnchor="middle"
            fill="currentColor"
            style={{ color: "var(--ink-soft)" }}
            fontFamily="var(--font-mono)"
            fontSize="10"
          >
            borrow
          </text>
          <g
            style={{ color: "var(--ink)" }}
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
            markerEnd="url(#arrow-stablecoins)"
          >
            <path d="M 448 250 C 380 250, 340 250, 262 250" />
          </g>
          <text
            x="355"
            y="268"
            textAnchor="middle"
            fill="currentColor"
            style={{ color: "var(--ink-soft)" }}
            fontFamily="var(--font-mono)"
            fontSize="10"
          >
            interest + repay
          </text>

          <g
            style={{ color: "var(--ink)" }}
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
            markerEnd="url(#arrow-stablecoins)"
            strokeDasharray="4 4"
          >
            <path d="M 712 170 C 790 170, 820 130, 878 112" />
            <path d="M 712 200 C 790 200, 820 192, 878 180" />
            <path d="M 712 230 C 790 230, 820 248, 878 248" />
          </g>

          <text
            x="640"
            y="418"
            textAnchor="middle"
            fill="currentColor"
            style={{ color: "var(--ink-muted)" }}
            fontFamily="var(--font-mono)"
            fontSize="11"
            letterSpacing="1"
          >
            GOVERNANCE-DEFINED ACTION SPACE · 14 ADAPTERS · 3 ORACLES
          </text>
        </svg>
      </SchemeSection>

      <SchemeSection
        disabled={true}
        label="04 · How controls apply"
        title={<>Controls apply to the position, not the market.</>}
        description="Compliance gates, oracle methodologies and redemption paths travel with the credit account. The same lender pool can fund an institutional account and a retail account, each under its own rules."
        captionClassName="lilac"
        caption={
          <>
            Three accounts draw from the same stablecoin pool but inherit
            different rule sets. Fund A runs institutional terms; Issuer B runs
            jurisdictional receivables; Issuer C runs permissioned commodity
            tokens. Risk actions (a kill-switch, an LTV tightening, an oracle
            swap) apply to a single account without disturbing the others.
          </>
        }
      >
        <svg
          aria-hidden="true"
          viewBox="0 0 1160 420"
          width="100%"
          style={{ maxWidth: "1080px", margin: "0 auto", display: "block" }}
        >
          <defs>
            <marker
              id="arrow2-stablecoins"
              viewBox="0 0 10 10"
              refX="9"
              refY="5"
              markerWidth="6"
              markerHeight="6"
              orient="auto-start-reverse"
            >
              <path d="M0,0 L10,5 L0,10 z" fill="currentColor" />
            </marker>
          </defs>

          <g transform="translate(440,30)">
            <rect
              width="280"
              height="70"
              rx="35"
              fill="var(--bg)"
              stroke="currentColor"
              strokeWidth="1.5"
              style={{ color: "var(--ink)" }}
            />
            <text
              x="140"
              y="32"
              textAnchor="middle"
              fill="currentColor"
              style={{ color: "var(--ink-muted)" }}
              fontFamily="var(--font-mono)"
              fontSize="10"
              letterSpacing="1.5"
            >
              SHARED LENDER POOL
            </text>
            <text
              x="140"
              y="54"
              textAnchor="middle"
              fill="currentColor"
              style={{ color: "var(--ink)" }}
              fontFamily="var(--font-sans)"
              fontSize="15"
              fontWeight="500"
            >
              USDC · $84.2M available
            </text>
          </g>

          <g transform="translate(40,150)">
            <rect
              width="1080"
              height="44"
              rx="14"
              fill="currentColor"
              style={{ color: "var(--ink)" }}
            />
            <text
              x="30"
              y="28"
              fill="var(--bg)"
              fontFamily="var(--font-mono)"
              fontSize="11"
              letterSpacing="1.5"
              opacity="0.7"
            >
              CONTROL LAYER
            </text>
            <g
              transform="translate(180,10)"
              fontFamily="var(--font-sans)"
              fontSize="12"
              fill="var(--bg)"
            >
              <rect
                width="120"
                height="24"
                rx="12"
                fill="color-mix(in oklch, var(--glow-mint) 70%, transparent)"
              />
              <text
                x="60"
                y="16"
                textAnchor="middle"
                fill="var(--ink)"
                fontWeight="500"
              >
                KYC gate
              </text>
              <rect
                x="132"
                width="140"
                height="24"
                rx="12"
                fill="color-mix(in oklch, var(--glow-lilac) 70%, transparent)"
              />
              <text
                x="202"
                y="16"
                textAnchor="middle"
                fill="var(--ink)"
                fontWeight="500"
              >
                Oracle methodology
              </text>
              <rect
                x="284"
                width="120"
                height="24"
                rx="12"
                fill="color-mix(in oklch, var(--glow-peach) 70%, transparent)"
              />
              <text
                x="344"
                y="16"
                textAnchor="middle"
                fill="var(--ink)"
                fontWeight="500"
              >
                Redemption SLA
              </text>
              <rect
                x="416"
                width="110"
                height="24"
                rx="12"
                fill="none"
                stroke="var(--bg)"
                strokeOpacity="0.4"
              />
              <text
                x="471"
                y="16"
                textAnchor="middle"
                fill="var(--bg)"
                opacity="0.8"
              >
                LTV ≤ 70%
              </text>
              <rect
                x="538"
                width="100"
                height="24"
                rx="12"
                fill="none"
                stroke="var(--bg)"
                strokeOpacity="0.4"
              />
              <text
                x="588"
                y="16"
                textAnchor="middle"
                fill="var(--bg)"
                opacity="0.8"
              >
                Kill-switch
              </text>
              <rect
                x="650"
                width="140"
                height="24"
                rx="12"
                fill="none"
                stroke="var(--bg)"
                strokeOpacity="0.4"
              />
              <text
                x="720"
                y="16"
                textAnchor="middle"
                fill="var(--bg)"
                opacity="0.8"
              >
                Whitelisted transfer
              </text>
            </g>
          </g>

          <g fontFamily="var(--font-sans)">
            <g transform="translate(60,240)">
              <rect width="300" height="140" rx="20" fill="var(--tone-mint)" />
              <text
                x="20"
                y="28"
                fill="currentColor"
                style={{ color: "var(--ink-muted)" }}
                fontFamily="var(--font-mono)"
                fontSize="10"
                letterSpacing="1.5"
              >
                ACCOUNT · 0x2c…91
              </text>
              <text
                x="20"
                y="56"
                fill="currentColor"
                style={{ color: "var(--ink)" }}
                fontSize="17"
                fontWeight="500"
              >
                Institutional: Fund A
              </text>
              <text
                x="20"
                y="80"
                fill="currentColor"
                style={{ color: "var(--ink-soft)" }}
                fontSize="12"
              >
                KYC · 70% LTV · 24h redemption
              </text>
              <g
                transform="translate(20,100)"
                fontFamily="var(--font-mono)"
                fontSize="11"
                fill="currentColor"
                style={{ color: "var(--ink)" }}
              >
                <text>Collateral: tT-Bill · $2.4M</text>
                <text y="16">Debt: USDC · $1.68M</text>
              </g>
            </g>
            <g transform="translate(430,240)">
              <rect width="300" height="140" rx="20" fill="var(--tone-lilac)" />
              <text
                x="20"
                y="28"
                fill="currentColor"
                style={{ color: "var(--ink-muted)" }}
                fontFamily="var(--font-mono)"
                fontSize="10"
                letterSpacing="1.5"
              >
                ACCOUNT · 0x8f…44
              </text>
              <text
                x="20"
                y="56"
                fill="currentColor"
                style={{ color: "var(--ink)" }}
                fontSize="17"
                fontWeight="500"
              >
                Receivables: Issuer B
              </text>
              <text
                x="20"
                y="80"
                fill="currentColor"
                style={{ color: "var(--ink-soft)" }}
                fontSize="12"
              >
                Jurisdictional · 55% LTV · 7d
              </text>
              <g
                transform="translate(20,100)"
                fontFamily="var(--font-mono)"
                fontSize="11"
                fill="currentColor"
                style={{ color: "var(--ink)" }}
              >
                <text>Collateral: tInvoice · $820K</text>
                <text y="16">Debt: USDC · $451K</text>
              </g>
            </g>
            <g transform="translate(800,240)">
              <rect width="300" height="140" rx="20" fill="var(--tone-sand)" />
              <text
                x="20"
                y="28"
                fill="currentColor"
                style={{ color: "var(--ink-muted)" }}
                fontFamily="var(--font-mono)"
                fontSize="10"
                letterSpacing="1.5"
              >
                ACCOUNT · 0xe1…07
              </text>
              <text
                x="20"
                y="56"
                fill="currentColor"
                style={{ color: "var(--ink)" }}
                fontSize="17"
                fontWeight="500"
              >
                Commodity: Issuer C
              </text>
              <text
                x="20"
                y="80"
                fill="currentColor"
                style={{ color: "var(--ink-soft)" }}
                fontSize="12"
              >
                Permissioned · 40% LTV · 14d
              </text>
              <g
                transform="translate(20,100)"
                fontFamily="var(--font-mono)"
                fontSize="11"
                fill="currentColor"
                style={{ color: "var(--ink)" }}
              >
                <text>Collateral: tOil-WTI · $3.1M</text>
                <text y="16">Debt: USDC · $1.24M</text>
              </g>
            </g>
          </g>

          <g
            style={{ color: "var(--ink)" }}
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
          >
            <path d="M 580 100 L 580 150" strokeDasharray="3 3" />
          </g>
          <g
            style={{ color: "var(--ink)" }}
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
            markerEnd="url(#arrow2-stablecoins)"
          >
            <path d="M 210 194 L 210 240" />
            <path d="M 580 194 L 580 240" />
            <path d="M 950 194 L 950 240" />
          </g>
        </svg>
      </SchemeSection>

      <Qualification
        label="03 · Launch"
        headline="Launch the full stablecoin product stack."
        description=""
        items={[
          <>
            <strong>Out-of-the-box product suite.</strong> Leveraged yield,
            credit, and prime-brokerage strategies ship ready to run against
            your stablecoin, improving utilization, UX, and capital efficiency
            for holders.
          </>,
          <>
            <strong>Multichain deployment.</strong> Money market, Credit
            Accounts, and the strategy library deploy on every chain your
            stablecoin lives on, whether that is existing footprint or a new
            launch. One integration model end to end.
          </>,
          <>
            <strong>Investment without secondary liquidity.</strong> Credit
            Accounts subscribe and redeem tokenized assets directly against
            issuer mint-and-redeem mechanisms. Positions enter and exit at face
            value, without a DEX dependency on the underlying asset.
          </>,
        ]}
      />

      <CTA
        title="Bring credit to your stablecoin."
        lede="We work with stablecoin issuers through a short onboarding: parameter review, adapter integration against your mint and redeem surface, then launch. Typically 4–6 weeks from kickoff to first Credit Account."
        buttonText="Request asset onboarding"
      />
    </>
  );
}
