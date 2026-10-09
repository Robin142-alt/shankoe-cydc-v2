import React, { useState, useRef, useEffect } from 'react';
import { 
  MapPin, 
  ShieldCheck, 
  School, 
  Users, 
  GraduationCap, 
  Maximize2, 
  Crosshair, 
  Navigation,
  Globe,
  CheckCircle2,
  Sparkles,
  Church,
  ArrowRight
} from 'lucide-react';
import { BRAND, WHERE_WE_WORK_DATA } from '../data/content';
import { 
  KENYA_VIEWBOX, 
  NAROK_VIEWBOX, 
  EQUATOR_Y, 
  LANDMARKS, 
  COUNTIES 
} from '../data/kenyaMapData';
import './KenyaMap.css';

const KENYA_BOX = [0, 0, 800, 960];
const NAROK_BOX = [45, 525, 240, 205];

export default function KenyaMap() {
  const [viewMode, setViewMode] = useState('kenya'); // 'kenya' | 'narok'
  const [viewBoxStr, setViewBoxStr] = useState(KENYA_VIEWBOX);
  const [hoveredCounty, setHoveredCounty] = useState(null);
  const [hoveredLandmark, setHoveredLandmark] = useState(null);
  const [tooltip, setTooltip] = useState({ visible: false, x: 0, y: 0, title: '', desc: '' });

  const currentBoxRef = useRef(KENYA_BOX);
  const animFrameRef = useRef(null);
  const svgContainerRef = useRef(null);

  // Smooth camera zoom animation between National and Narok views
  const animateToBox = (targetBox) => {
    const startBox = [...currentBoxRef.current];
    const startTime = performance.now();
    const duration = 550; // smooth 550ms ease

    const step = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // easeInOutCubic curve
      const ease = progress < 0.5
        ? 4 * progress * progress * progress
        : 1 - Math.pow(-2 * progress + 2, 3) / 2;

      const nextBox = startBox.map((startVal, i) => {
        return startVal + (targetBox[i] - startVal) * ease;
      });

      currentBoxRef.current = nextBox;
      setViewBoxStr(`${nextBox[0].toFixed(1)} ${nextBox[1].toFixed(1)} ${nextBox[2].toFixed(1)} ${nextBox[3].toFixed(1)}`);

      if (progress < 1) {
        animFrameRef.current = requestAnimationFrame(step);
      }
    };

    if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    animFrameRef.current = requestAnimationFrame(step);
  };

  const handleToggleView = (mode) => {
    setViewMode(mode);
    if (mode === 'narok') {
      animateToBox(NAROK_BOX);
    } else {
      animateToBox(KENYA_BOX);
    }
  };

  useEffect(() => {
    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, []);

  const handleCountyMouseEnter = (county, e) => {
    setHoveredCounty(county.name);
    const rect = svgContainerRef.current?.getBoundingClientRect();
    if (rect) {
      setTooltip({
        visible: true,
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        title: county.isNarok ? 'Narok County (County 033)' : `${county.name} County`,
        desc: county.isNarok 
          ? 'Shankoe CYDC Operational Headquarters • Trans Mara West' 
          : 'Republic of Kenya Administrative County'
      });
    }
  };

  const handleCountyMouseMove = (e) => {
    const rect = svgContainerRef.current?.getBoundingClientRect();
    if (rect) {
      setTooltip(prev => ({
        ...prev,
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      }));
    }
  };

  const handleCountyMouseLeave = () => {
    setHoveredCounty(null);
    setTooltip(prev => ({ ...prev, visible: false }));
  };

  const shankoeLandmark = LANDMARKS.find(l => l.id === 'shankoe');
  const narokTownLandmark = LANDMARKS.find(l => l.id === 'narok_town');
  const kilgorisLandmark = LANDMARKS.find(l => l.id === 'kilgoris');
  const nairobiLandmark = LANDMARKS.find(l => l.id === 'nairobi');
  const maraLandmark = LANDMARKS.find(l => l.id === 'mara');
  const mtKenyaLandmark = LANDMARKS.find(l => l.id === 'mt_kenya');

  return (
    <div className="where-we-work-card">
      <div className="where-we-work-grid">
        {/* Left Column: Interactive Vector GIS Kenya Map */}
        <div className="map-showcase-column">
          {/* Subtle View Switcher Tabs */}
          <div className="map-view-switcher">
            <button
              type="button"
              className={`switcher-pill-btn ${viewMode === 'kenya' ? 'active' : ''}`}
              onClick={() => handleToggleView('kenya')}
              aria-label="View Kenya national map"
            >
              <Globe size={15} />
              <span>National Overview</span>
            </button>
            <button
              type="button"
              className={`switcher-pill-btn ${viewMode === 'narok' ? 'active' : ''}`}
              onClick={() => handleToggleView('narok')}
              aria-label="Focus on Narok County and Shankoe CYDC"
            >
              <Crosshair size={15} />
              <span>Narok County Focus</span>
            </button>
          </div>

          {/* SVG Map Container */}
          <div 
            className={`svg-map-wrapper ${viewMode === 'narok' ? 'mode-narok' : 'mode-kenya'}`} 
            ref={svgContainerRef}
            onMouseMove={handleCountyMouseMove}
          >
            <svg 
              className="kenya-vector-svg" 
              viewBox={viewBoxStr} 
              preserveAspectRatio="xMidYMid meet"
              aria-label="Geographic map of Kenya showing Narok County and Shankoe CYDC headquarters"
            >
              <defs>
                {/* Gold Gradient for Narok County */}
                <linearGradient id="narokGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.85" />
                  <stop offset="50%" stopColor="#d97706" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#b45309" stopOpacity="0.95" />
                </linearGradient>

                {/* Soft Golden Glow Filter */}
                <filter id="narokGlow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="4" result="blur" />
                  <feComponentTransfer in="blur" result="glow">
                    <feFuncA type="linear" slope="0.8" />
                  </feComponentTransfer>
                  <feMerge>
                    <feMergeNode in="glow" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>

                {/* Beacon Pulse Radial Gradient */}
                <radialGradient id="beaconGlow">
                  <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.9" />
                  <stop offset="60%" stopColor="#f59e0b" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#d97706" stopOpacity="0" />
                </radialGradient>
              </defs>

              {/* Cartographic Grid & Equator Marker */}
              <g className="cartographic-guides">
                {/* Equator Line */}
                <line 
                  x1="60" 
                  y1={EQUATOR_Y} 
                  x2="740" 
                  y2={EQUATOR_Y} 
                  stroke="rgba(255, 255, 255, 0.15)" 
                  strokeWidth={viewMode === 'narok' ? '0.6' : '1.2'} 
                  strokeDasharray="4 4" 
                />
                {viewMode === 'kenya' && (
                  <text 
                    x="690" 
                    y={EQUATOR_Y - 6} 
                    className="equator-text"
                  >
                    EQUATOR (0°)
                  </text>
                )}

                {/* Neighboring Country Annotations */}
                {viewMode === 'kenya' && (
                  <>
                    <text x="35" y="520" className="country-neighbor-label">UGANDA</text>
                    <text x="210" y="780" className="country-neighbor-label">TANZANIA (Serengeti)</text>
                    <text x="380" y="50" className="country-neighbor-label">ETHIOPIA</text>
                    <text x="690" y="440" className="country-neighbor-label">SOMALIA</text>
                    <text x="90" y="80" className="country-neighbor-label">SOUTH SUDAN</text>
                    <text x="560" y="860" className="ocean-label">INDIAN OCEAN</text>
                    <text x="30" y="605" className="lake-label">L. Victoria</text>
                  </>
                )}
              </g>

              {/* Lake Victoria Indicative Water Basin */}
              <path
                d="M 15 540 Q 40 570 30 620 Q 20 640 5 650 L 5 540 Z"
                fill="rgba(14, 116, 144, 0.25)"
                stroke="rgba(14, 116, 144, 0.4)"
                strokeWidth="1"
                className="water-body"
              />

              {/* 47 Kenyan Counties Layer */}
              <g className="counties-layer">
                {COUNTIES.map((county) => {
                  if (county.isNarok) return null; // Rendered prominently above
                  const isAdjacent = ['KAJIADO', 'NAKURU', 'BOMET', 'KISII', 'MIGORI', 'NYAMIRA'].includes(county.name);
                  return (
                    <path
                      key={county.code}
                      d={county.d}
                      className={`county-path ${isAdjacent ? 'adjacent-county' : ''} ${hoveredCounty === county.name ? 'hovered' : ''}`}
                      onMouseEnter={(e) => handleCountyMouseEnter(county, e)}
                      onMouseLeave={handleCountyMouseLeave}
                      stroke="rgba(255, 255, 255, 0.12)"
                      strokeWidth={viewMode === 'narok' ? '0.4' : '0.8'}
                    />
                  );
                })}

                {/* NAROK COUNTY (County 033) - Highlighted with Golden Identity */}
                {COUNTIES.filter(c => c.isNarok).map(narok => (
                  <path
                    key={narok.code}
                    d={narok.d}
                    fill="url(#narokGoldGrad)"
                    stroke="#fef08a"
                    strokeWidth={viewMode === 'narok' ? '1.4' : '2.2'}
                    className={`county-narok-path ${hoveredCounty === 'NAROK' ? 'hovered' : ''}`}
                    filter="url(#narokGlow)"
                    onClick={() => handleToggleView(viewMode === 'kenya' ? 'narok' : 'kenya')}
                    onMouseEnter={(e) => handleCountyMouseEnter(narok, e)}
                    onMouseLeave={handleCountyMouseLeave}
                  />
                ))}
              </g>

              {/* Internal Narok Geographic Features */}
              <g className="narok-details-layer">
                {/* Great Rift Valley Geological Axis */}
                <path
                  d="M 235 340 Q 248 490 260 590 Q 270 680 280 770"
                  stroke="rgba(245, 158, 11, 0.35)"
                  strokeWidth={viewMode === 'narok' ? '0.8' : '1.5'}
                  strokeDasharray="4 3"
                  fill="none"
                />

                {/* Maasai Mara Reserve Zone within Southern Narok */}
                <g 
                  className="mara-zone"
                  onMouseEnter={() => setHoveredLandmark('Maasai Mara')}
                  onMouseLeave={() => setHoveredLandmark(null)}
                >
                  <path
                    d="M 100 635 Q 135 655 180 670 Q 150 680 115 675 Z"
                    fill="rgba(245, 158, 11, 0.18)"
                    stroke="rgba(254, 240, 138, 0.35)"
                    strokeWidth="0.8"
                    strokeDasharray="2 2"
                  />
                  {maraLandmark && (
                    <text 
                      x={maraLandmark.pt[0]} 
                      y={maraLandmark.pt[1]} 
                      className="mara-label"
                    >
                      Maasai Mara Ecosystem
                    </text>
                  )}
                </g>
              </g>

              {/* Key Landmark & City Pins */}
              <g className="landmarks-layer">
                {/* Nairobi National Capital */}
                {nairobiLandmark && (
                  <g className="landmark-pin capital" transform={`translate(${nairobiLandmark.pt[0]}, ${nairobiLandmark.pt[1]})`}>
                    <circle r={viewMode === 'narok' ? '2.5' : '4.5'} fill="#ffffff" stroke="#0c2340" strokeWidth="1.5" />
                    <circle r={viewMode === 'narok' ? '5' : '7.5'} fill="none" stroke="rgba(255, 255, 255, 0.4)" strokeWidth="0.8" strokeDasharray="2 2" />
                    <text x={viewMode === 'narok' ? 7 : 9} y="3" className="landmark-text capital-text">
                      Nairobi (Capital)
                    </text>
                  </g>
                )}

                {/* Mount Kenya */}
                {mtKenyaLandmark && viewMode === 'kenya' && (
                  <g className="landmark-pin mountain" transform={`translate(${mtKenyaLandmark.pt[0]}, ${mtKenyaLandmark.pt[1]})`}>
                    <polygon points="0,-5 4,3 -4,3" fill="#93c5fd" />
                    <text x="7" y="2" className="landmark-text mountain-text">Mt. Kenya</text>
                  </g>
                )}

                {/* Narok Town (County Headquarters) */}
                {narokTownLandmark && (
                  <g className="landmark-pin town" transform={`translate(${narokTownLandmark.pt[0]}, ${narokTownLandmark.pt[1]})`}>
                    <circle r={viewMode === 'narok' ? '2' : '3'} fill="#fef08a" stroke="#78350f" strokeWidth="1" />
                    <text x={viewMode === 'narok' ? 5 : 6} y="3" className="landmark-text">
                      Narok Town
                    </text>
                  </g>
                )}

                {/* Kilgoris Town (Sub-County Commercial Center) */}
                {kilgorisLandmark && viewMode === 'narok' && (
                  <g className="landmark-pin sub-town" transform={`translate(${kilgorisLandmark.pt[0]}, ${kilgorisLandmark.pt[1]})`}>
                    <circle r="1.8" fill="#e2e8f0" stroke="#475569" strokeWidth="0.8" />
                    <text x="4" y="-3" className="landmark-text sub-text">Kilgoris</text>
                  </g>
                )}

                {/* ======================================================== */}
                {/* VERIFIED HEADQUARTERS PIN: SHANKOE CYDC                   */}
                {/* Coords: Trans Mara West [-1.095, 34.865]                 */}
                {/* ======================================================== */}
                {shankoeLandmark && (
                  <g 
                    className="shankoe-beacon-group" 
                    transform={`translate(${shankoeLandmark.pt[0]}, ${shankoeLandmark.pt[1]})`}
                    onClick={() => handleToggleView('narok')}
                  >
                    {/* Animated Pulsing Radar Rings */}
                    <circle r={viewMode === 'narok' ? '18' : '28'} fill="url(#beaconGlow)" className="radar-pulse-outer" />
                    <circle r={viewMode === 'narok' ? '10' : '16'} fill="rgba(254, 240, 138, 0.4)" className="radar-pulse-inner" />
                    
                    {/* Core Anchor Dot */}
                    <circle 
                      r={viewMode === 'narok' ? '4.5' : '6.5'} 
                      fill="#ffffff" 
                      stroke="#92400e" 
                      strokeWidth={viewMode === 'narok' ? '1.5' : '2'} 
                      className="radar-core-dot" 
                    />

                    {/* Prominent Floating Badge Card */}
                    <g 
                      transform={viewMode === 'narok' ? 'translate(9, -18)' : 'translate(12, -22)'} 
                      className="shankoe-badge-tag"
                    >
                      <rect 
                        width={viewMode === 'narok' ? '112' : '124'} 
                        height={viewMode === 'narok' ? '28' : '32'} 
                        rx="5" 
                        fill="#0c2340" 
                        stroke="#f59e0b" 
                        strokeWidth="1.2" 
                      />
                      <text 
                        x="7" 
                        y={viewMode === 'narok' ? '12' : '14'} 
                        className="shankoe-tag-title"
                      >
                        SHANKOE CYDC
                      </text>
                      <text 
                        x="7" 
                        y={viewMode === 'narok' ? '22' : '25'} 
                        className="shankoe-tag-sub"
                      >
                        HQ • Trans Mara West
                      </text>
                    </g>
                  </g>
                )}
              </g>
            </svg>

            {/* Custom Dynamic Tooltip on Hover */}
            {tooltip.visible && (
              <div 
                className="map-cursor-tooltip" 
                style={{ left: `${tooltip.x + 12}px`, top: `${tooltip.y - 12}px` }}
              >
                <div className="tooltip-title">{tooltip.title}</div>
                <div className="tooltip-desc">{tooltip.desc}</div>
              </div>
            )}

            {/* Minimalist Floating Status Strip */}
            <div className="map-meta-strip">
              <div className="meta-coords">
                <Navigation size={12} className="meta-icon" />
                <span>GPS: 1.095° S, 34.865° E • Sub-County: Trans Mara West</span>
              </div>
              <div className="meta-legend">
                <span className="legend-indicator narok-box"></span>
                <span>Narok County (033)</span>
                <span className="legend-indicator shankoe-dot"></span>
                <span>Shankoe CYDC HQ</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Geographic Context & Operational Footprint */}
        <div className="info-narrative-column">
          <div className="hq-profile-card">
            <div className="hq-badge-row">
              <span className="county-code-tag">KENYA COUNTY 033</span>
              <span className="verified-status-tag">
                <CheckCircle2 size={12} />
                <span>Verified Location</span>
              </span>
            </div>

            <h3 className="hq-card-title">{WHERE_WE_WORK_DATA.county}</h3>
            <p className="hq-card-locality">
              <Church size={15} className="locality-icon" />
              <span>Shankoe Methodist Church Compound, Trans Mara West</span>
            </p>

            <p className="hq-card-narrative">
              {WHERE_WE_WORK_DATA.description}
            </p>

            {/* 3 High-Impact Key Metrics */}
            <div className="footprint-metrics-grid">
              {WHERE_WE_WORK_DATA.keyMetrics.map((metric, idx) => (
                <div key={idx} className="metric-tile">
                  <span className="metric-tile-val">{metric.value}</span>
                  <span className="metric-tile-label">{metric.label}</span>
                </div>
              ))}
            </div>

            {/* Geographic Focus Highlights */}
            <div className="landscape-context-box">
              <h4 className="context-box-heading">
                <ShieldCheck size={16} className="context-box-icon" />
                <span>Operational Territory & Reach</span>
              </h4>
              <ul className="context-points-list">
                <li>
                  <CheckCircle2 size={14} className="point-check" />
                  <span><strong>Trans Mara West Hub:</strong> Deep integration with local pastoralist settlements and families.</span>
                </li>
                <li>
                  <CheckCircle2 size={14} className="point-check" />
                  <span><strong>131 Partner Schools:</strong> Active network of primary and secondary schools safeguarded.</span>
                </li>
                <li>
                  <CheckCircle2 size={14} className="point-check" />
                  <span><strong>Maasai Mara Frontier:</strong> Climate resilience and nutritional safety nets in semi-arid terrains.</span>
                </li>
              </ul>
            </div>

            {/* Clean Interaction Trigger */}
            <div className="hq-card-action">
              <button
                type="button"
                className="focus-action-btn"
                onClick={() => handleToggleView(viewMode === 'kenya' ? 'narok' : 'kenya')}
              >
                <span>{viewMode === 'kenya' ? 'Zoom to Narok County Headquarters' : 'Reset to Full Kenya Map'}</span>
                <ArrowRight size={15} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
