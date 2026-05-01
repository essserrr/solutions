import { Helmet } from "react-helmet-async";
import Capabilities from "../components/Capabilities/Capabilities";
import CTA from "../components/CTA/CTA";
import Hero from "../components/Hero/Hero";
import ProblemGap from "../components/ProblemGap/ProblemGap";
import Qualification from "../components/Qualification/Qualification";
import SchemeSection from "../components/SchemeSection/SchemeSection";

export default function RwaPage() {
  return (
    <>
      <Helmet>
        <title>Gearbox - Credit for RWAs</title>
      </Helmet>

      <Hero
        meta="Solutions / Leverage for RWA"
        title={
          <>
            Leverage for
            <br />
            tokenized securities.
          </>
        }
        lede="Launch leveraged yield products to improve RWA asset distribution without sacrificing compliance and control."
        stats={[
          {
            num: "native",
            label: "No RWA wrappers, direct inheritance of issuer-side rules",
          },
          {
            num: "capital-efficient",
            label: "Direct subscription and redemption, seamless leverage",
          },
          {
            num: "governable",
            label: "Segregated accounts allow per-position control",
          },
        ]}
      />

      <Capabilities
        label="01. The primitives"
        headline="Lending infrastructure ready for tokenized securities expansion."
        description=""
        rows={[
          {
            tone: "lilac",
            visual: (
              <svg
                aria-hidden="true"
                viewBox="0 0 360 180"
                preserveAspectRatio="xMidYMid meet"
              >
                <defs>
                  <marker
                    id="mkB-rwa"
                    viewBox="0 0 10 10"
                    refX="9"
                    refY="5"
                    markerWidth="6"
                    markerHeight="6"
                    orient="auto-start-reverse"
                  >
                    <path
                      d="M0,0 L10,5 L0,10z"
                      fill="color-mix(in oklch, white 55%, transparent)"
                    />
                  </marker>
                </defs>
                <g transform="translate(12,24)">
                  <rect
                    width="118"
                    height="44"
                    rx="10"
                    className="node-stroke"
                  />
                  <text x="59" y="20" textAnchor="middle" className="lbl">
                    Liquidity source
                  </text>
                  <text x="59" y="34" textAnchor="middle" className="lbl-dim">
                    native · dex · rfq
                  </text>
                </g>
                <g transform="translate(12,114)">
                  <rect
                    width="118"
                    height="44"
                    rx="10"
                    className="node-stroke"
                  />
                  <text x="59" y="20" textAnchor="middle" className="lbl">
                    Transfer
                  </text>
                  <text x="59" y="34" textAnchor="middle" className="lbl">
                    destination
                  </text>
                </g>
                <g>
                  <line
                    x1="178"
                    y1="14"
                    x2="178"
                    y2="166"
                    className="flow-dash"
                    stroke="var(--glow-lilac)"
                    strokeWidth="1.4"
                    strokeDasharray="4 4"
                    style={{
                      filter:
                        "drop-shadow(0 0 4px color-mix(in oklch, var(--glow-lilac) 50%, transparent))",
                    }}
                  />
                  <text
                    x="178"
                    y="90"
                    textAnchor="middle"
                    className="lbl"
                    style={{ fontSize: "9px", fill: "var(--glow-lilac)" }}
                  >
                    NATIVE
                  </text>
                  <text
                    x="178"
                    y="102"
                    textAnchor="middle"
                    className="lbl"
                    style={{ fontSize: "9px", fill: "var(--glow-lilac)" }}
                  >
                    COMPLIANCE
                  </text>
                </g>
                <g transform="translate(222,38)">
                  <rect
                    width="126"
                    height="104"
                    rx="12"
                    className="node-accent-lilac"
                  />
                  <text x="63" y="22" textAnchor="middle" className="lbl">
                    Credit Account
                  </text>
                  <ellipse
                    cx="63"
                    cy="62"
                    rx="44"
                    ry="22"
                    className="chip-lilac"
                  />
                  <text x="63" y="66" textAnchor="middle" className="lbl-chip">
                    RWA Token
                  </text>
                  <text x="63" y="94" textAnchor="middle" className="lbl-dim">
                    held natively
                  </text>
                </g>
                <path
                  d="M 130 46 L 220 76"
                  className="flow"
                  markerEnd="url(#mkB-rwa)"
                />
                <path
                  d="M 220 104 L 130 136"
                  className="flow"
                  markerEnd="url(#mkB-rwa)"
                />
              </svg>
            ),
            eyebrow: "Native compliance",
            headline: "Native compliance, no wrappers",
            lede: "All the asset-specific issuer's requirements are programmatically inherited no matter what happens on Gearbox protocol side. The RWA token is held natively in the Credit Account, and every transfer routes through the issuer's own compliance checks.",
          },
          {
            tone: "mint",
            visual: (
              <svg
                aria-hidden="true"
                viewBox="0 0 360 180"
                preserveAspectRatio="xMidYMid meet"
              >
                <defs>
                  <marker
                    id="mkA1-rwa"
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
                    fees · price impact
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
                    RWA Token
                  </text>
                </g>
                <path
                  d="M 128 34 C 180 14, 210 22, 226 52"
                  className="flow"
                  stroke="var(--glow-mint)"
                  strokeWidth="1.4"
                  markerEnd="url(#mkA1-rwa)"
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
                  RWA token
                </text>
                <path
                  d="M 226 130 C 210 160, 180 168, 128 82"
                  className="flow"
                  stroke="var(--glow-mint)"
                  strokeWidth="1.4"
                  markerEnd="url(#mkA1-rwa)"
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
                  RWA token
                </text>
              </svg>
            ),
            eyebrow: "Native liquidity",
            headline: "Native liquidity, not DEX-routed",
            lede: "Gearbox taps the issuer's own subscription and redemption contracts - face-value swaps, no fees, no price impact. Users get the most efficient execution, and issuers don't spend capital seeding secondary liquidity.",
          },
          {
            tone: "peach",
            visual: (
              <svg
                aria-hidden="true"
                viewBox="0 0 360 180"
                preserveAspectRatio="xMidYMid meet"
              >
                <defs>
                  <marker
                    id="mkC-rwa"
                    viewBox="0 0 10 10"
                    refX="9"
                    refY="5"
                    markerWidth="6"
                    markerHeight="6"
                    orient="auto-start-reverse"
                  >
                    <path
                      d="M0,0 L10,5 L0,10z"
                      fill="color-mix(in oklch, white 45%, transparent)"
                    />
                  </marker>
                  <marker
                    id="mkCact-rwa"
                    viewBox="0 0 10 10"
                    refX="9"
                    refY="5"
                    markerWidth="6"
                    markerHeight="6"
                    orient="auto-start-reverse"
                  >
                    <path d="M0,0 L10,5 L0,10z" fill="var(--glow-peach)" />
                  </marker>
                  <style>{`
                    .peach-pulse { animation: peachPulse 2.4s ease-in-out infinite; }
                    @keyframes peachPulse {
                      0%, 100% { opacity: 0.55; }
                      50%      { opacity: 1; }
                    }
                    .peach-dash {
                      stroke-dasharray: 4 4;
                      animation: peachFlow 1.4s linear infinite;
                    }
                    @keyframes peachFlow {
                      to { stroke-dashoffset: -8; }
                    }
                  `}</style>
                </defs>
                <g transform="translate(6,14)">
                  <rect
                    width="88"
                    height="28"
                    rx="7"
                    className="node-accent-peach peach-pulse"
                  />
                  <text
                    x="44"
                    y="18"
                    textAnchor="middle"
                    className="lbl"
                    style={{ fill: "var(--glow-peach)", fontSize: "8.5px" }}
                  >
                    Court decision
                  </text>
                </g>
                <g transform="translate(6,58)">
                  <rect width="88" height="28" rx="7" className="node-stroke" />
                  <text
                    x="44"
                    y="18"
                    textAnchor="middle"
                    className="lbl"
                    style={{ fontSize: "8.5px" }}
                  >
                    Key loss
                  </text>
                </g>
                <g transform="translate(6,102)">
                  <rect width="88" height="28" rx="7" className="node-stroke" />
                  <text
                    x="44"
                    y="18"
                    textAnchor="middle"
                    className="lbl"
                    style={{ fontSize: "8.5px" }}
                  >
                    Inheritance
                  </text>
                </g>
                <g transform="translate(6,146)">
                  <rect width="88" height="28" rx="7" className="node-stroke" />
                  <text
                    x="44"
                    y="18"
                    textAnchor="middle"
                    className="lbl-dim"
                    style={{ fontSize: "8.5px" }}
                  >
                    Other
                  </text>
                </g>
                <path
                  d="M 94 28  L 126 78"
                  className="flow peach-dash"
                  stroke="var(--glow-peach)"
                  strokeWidth="1.4"
                  markerEnd="url(#mkCact-rwa)"
                />
                <path
                  d="M 94 72  L 126 82"
                  className="flow"
                  markerEnd="url(#mkC-rwa)"
                />
                <path
                  d="M 94 116 L 126 88"
                  className="flow"
                  markerEnd="url(#mkC-rwa)"
                />
                <path
                  d="M 94 160 L 126 94"
                  className="flow"
                  markerEnd="url(#mkC-rwa)"
                />
                <g transform="translate(126,66)">
                  <rect
                    width="74"
                    height="44"
                    rx="9"
                    className="node-accent-peach"
                  />
                  <text x="37" y="22" textAnchor="middle" className="lbl">
                    Issuer
                  </text>
                  <text x="37" y="34" textAnchor="middle" className="lbl-dim">
                    policy
                  </text>
                </g>
                <path
                  d="M 200 78  L 234 34"
                  className="flow"
                  markerEnd="url(#mkC-rwa)"
                />
                <path
                  d="M 200 88  L 234 88"
                  className="flow"
                  markerEnd="url(#mkC-rwa)"
                />
                <path
                  d="M 200 98  L 234 142"
                  className="flow peach-dash"
                  stroke="var(--glow-peach)"
                  strokeWidth="1.4"
                  markerEnd="url(#mkCact-rwa)"
                />
                <g transform="translate(234,20)">
                  <rect width="92" height="28" rx="7" className="node-stroke" />
                  <text
                    x="46"
                    y="18"
                    textAnchor="middle"
                    className="lbl"
                    style={{ fontSize: "8.5px" }}
                  >
                    Freeze
                  </text>
                </g>
                <g transform="translate(234,74)">
                  <rect width="92" height="28" rx="7" className="node-stroke" />
                  <text
                    x="46"
                    y="18"
                    textAnchor="middle"
                    className="lbl"
                    style={{ fontSize: "8.5px" }}
                  >
                    Transfer ownership
                  </text>
                </g>
                <g transform="translate(234,128)">
                  <rect
                    width="92"
                    height="28"
                    rx="7"
                    className="node-accent-peach peach-pulse"
                  />
                  <text
                    x="46"
                    y="18"
                    textAnchor="middle"
                    className="lbl"
                    style={{ fill: "var(--glow-peach)", fontSize: "8.5px" }}
                  >
                    Seize
                  </text>
                </g>
                <path
                  d="M 280 156 C 280 170, 300 170, 310 170"
                  className="flow peach-dash"
                  stroke="var(--glow-peach)"
                  strokeWidth="1.4"
                  markerEnd="url(#mkCact-rwa)"
                  opacity="0"
                />
                <text
                  x="180"
                  y="172"
                  textAnchor="middle"
                  className="lbl-dim"
                  style={{
                    fontSize: "8px",
                    fill: "var(--glow-peach)",
                    letterSpacing: "0.12em",
                  }}
                >
                  COURT DECISION → SEIZE
                </text>
              </svg>
            ),
            eyebrow: "Granular controls",
            headline: "Granular controls for real-world scenarios",
            lede: "Real-world triggers such as court orders, key loss, and inheritance flow through the issuer's policy and resolve as a specific action on a specific account: freeze, transfer ownership, or seize. Legal enforcement is executed without disrupting the whole market.",
          },
        ]}
      />

      <ProblemGap
        variant="gap"
        label="02. The gap"
        headline="Generic credit rails miss the operating model behind the asset."
        items={[
          { type: "good", title: "Gearbox" },
          { type: "bad", title: "Existing lending" },
          {
            type: "good",
            tag: "01 · Controls",
            title: "Native support for issuer-side controls",
            body: "RWAs sit inside a Credit Account as the native token. Transfer restrictions, registry checks, mint and redeem logic all travel with the asset. No wrappers, no second compliance surface.",
          },
          {
            type: "bad",
            tag: "01 · Controls",
            title:
              "Existing onchain lending doesn't support issuer-side controls",
            body: "Asset wrappers or representations are used to comply with restrictions, increasing friction and complexity.",
          },
          {
            type: "good",
            tag: "02 · Liquidity",
            title: "Native subscription and redemption",
            body: "Direct subscription and redemption flows are preserved, and leverage becomes the capital-efficient alternative to waiting on queues or seeding secondary pools.",
          },
          {
            type: "bad",
            tag: "02 · Liquidity",
            title:
              "Lack of secondary liquidity blocks protocol operations and user flows",
            body: "Subscription and redemption queues become a bottleneck, forcing asset issuers to fund and maintain DEX liquidity to keep products usable.",
          },
          {
            type: "good",
            tag: "03 · Intervention",
            title: "Per-position controls, not market-wide",
            body: "Approve, freeze, reassign, or enforce transfer. Actions apply to a specific Credit Account. A single compliance event stays a single-position event. The rest of the market keeps running.",
          },
          {
            type: "bad",
            tag: "03 · Intervention",
            title: "Market-wide controls are too blunt",
            body: "If the only lever is pausing the whole market, a single compliance event becomes a market event. Issuers need to intervene at the position, not at the book.",
          },
        ]}
      />

      <hr className="rule-thin" />

      <SchemeSection
        disabled={true}
        label="03. How it works"
        title="How credit flows against an RWA."
        description="Read left-to-right. The asset arrives as itself, enters a Credit Account, draws stable liquidity from the lender market, and remains subject to issuer policy at every step."
        caption="Read this as: Passive lenders supply stables. A borrower opens a Credit Account, posts a tokenized RWA as collateral, and draws USDC against it. Every external call the account can make, including redemption, oracle reads, and compliance checks, is explicitly whitelisted. Nothing is permissionless inside the account, but the account itself remains composable from the outside."
      >
        <svg
          aria-hidden="true"
          viewBox="0 0 1160 460"
          width="100%"
          style={{ maxWidth: "1080px", margin: "0 auto", display: "block" }}
        >
          <defs>
            <filter
              id="glowMint-rwa"
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
              id="arrow-rwa"
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
            markerEnd="url(#arrow-rwa)"
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
            markerEnd="url(#arrow-rwa)"
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
            markerEnd="url(#arrow-rwa)"
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
        label="04. How controls apply"
        title="Controls apply to the position, not the market."
        description="Compliance gates, oracle methodologies, and redemption paths travel with the Credit Account. The same lender pool can fund an institutional account and a retail account, each under its own rules."
        captionClassName="lilac"
        caption="Read this as: Three accounts draw from the same stablecoin pool but inherit different rule sets. Fund A runs institutional terms; Issuer B runs jurisdictional receivables; Issuer C runs permissioned commodity tokens. Risk actions such as a kill-switch, an LTV tightening, or an oracle swap apply to a single account without disturbing the others."
      >
        <svg
          aria-hidden="true"
          viewBox="0 0 1160 420"
          width="100%"
          style={{ maxWidth: "1080px", margin: "0 auto", display: "block" }}
        >
          <defs>
            <marker
              id="arrow2-rwa"
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
                Institutional / Fund A
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
                Receivables / Issuer B
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
                Commodity / Issuer C
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
            markerEnd="url(#arrow2-rwa)"
          >
            <path d="M 210 194 L 210 240" />
            <path d="M 580 194 L 580 240" />
            <path d="M 950 194 L 950 240" />
          </g>
        </svg>
      </SchemeSection>

      <Qualification
        label="03. Qualification"
        headline="Is Gearbox the right fit for your asset?"
        description=""
        items={[
          "Your asset has native transfer restrictions, registry checks or mint / redeem logic that must stay attached to the token itself.",
          "You need per-position intervention rights, including the ability to freeze, reassign, or enforce transfer, without pausing the entire market.",
          "Subscriptions and redemptions primarily rely on native mechanisms. Secondary liquidity isn't established.",
        ]}
      />

      <CTA
        title="Bring credit to your tokenized asset."
        lede="We work with issuers through a short onboarding: asset methodology review and adapter design, then launch. Typically 4-6 weeks from kickoff to first account."
        buttonText="Request asset onboarding"
      />
    </>
  );
}
