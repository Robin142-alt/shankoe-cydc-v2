import React, { useState, useRef, useEffect } from 'react';
import { EQUATOR_Y, LANDMARKS, COUNTIES } from '../data/kenyaMapData';
import './KenyaMap.css';

const KENYA_BOX = [0, 0, 800, 960];

export default function KenyaMap() {
  const [hoveredCounty, setHoveredCounty] = useState(null);
  const [tooltip, setTooltip] = useState({ visible: false, x: 0, y: 0, title: '' });
  const svgContainerRef = useRef(null);

  const handleCountyMouseEnter = (county, e) => {
    setHoveredCounty(county.name);
    const rect = svgContainerRef.current?.getBoundingClientRect();
    if (rect) {
      setTooltip({
        visible: true,
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        title: county.isNarok ? 'Narok County' : `${county.name} County`,
      });
    }
  };

  const handleCountyMouseMove = (e) => {
    const rect = svgContainerRef.current?.getBoundingClientRect();
    if (rect) {
      setTooltip(prev => ({ ...prev, x: e.clientX - rect.left, y: e.clientY - rect.top }));
    }
  };

  const handleCountyMouseLeave = () => {
    setHoveredCounty(null);
    setTooltip(prev => ({ ...prev, visible: false }));
  };

  const shankoeLandmark  = LANDMARKS.find(l => l.id === 'shankoe');
  const narokTownLandmark = LANDMARKS.find(l => l.id === 'narok_town');
  const nairobiLandmark  = LANDMARKS.find(l => l.id === 'nairobi');
  const maraLandmark     = LANDMARKS.find(l => l.id === 'mara');
  const mtKenyaLandmark  = LANDMARKS.find(l => l.id === 'mt_kenya');

  return (
    <div className="map-centered-container">
      <div
        className="svg-map-wrapper"
        ref={svgContainerRef}
        onMouseMove={handleCountyMouseMove}
        onMouseLeave={handleCountyMouseLeave}
      >
        <svg
          className="kenya-vector-svg"
          viewBox={`${KENYA_BOX[0]} ${KENYA_BOX[1]} ${KENYA_BOX[2]} ${KENYA_BOX[3]}`}
          preserveAspectRatio="xMidYMid meet"
          aria-label="Geographic map of Kenya highlighting Narok County and Shankoe CYDC location"
        >
          <defs>
            {/* Gold Gradient for Narok County */}
            <linearGradient id="narokGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%"   stopColor="#f59e0b" stopOpacity="0.9" />
              <stop offset="50%"  stopColor="#d97706" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#b45309" stopOpacity="1" />
            </linearGradient>

            {/* Narok Glow */}
            <filter id="narokGlow" x="-25%" y="-25%" width="150%" height="150%">
              <feGaussianBlur stdDeviation="5" result="blur" />
              <feComponentTransfer in="blur" result="glow">
                <feFuncA type="linear" slope="0.7" />
              </feComponentTransfer>
              <feMerge>
                <feMergeNode in="glow" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            {/* Beacon Pulse Gradient */}
            <radialGradient id="beaconGlow">
              <stop offset="0%"   stopColor="#fbbf24" stopOpacity="0.9" />
              <stop offset="60%"  stopColor="#f59e0b" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#d97706" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Subtle cartographic guides */}
          <g className="cartographic-guides">
            {/* Equator */}
            <line
              x1="60" y1={EQUATOR_Y}
              x2="740" y2={EQUATOR_Y}
              stroke="rgba(255,255,255,0.12)"
              strokeWidth="1"
              strokeDasharray="5 5"
            />
            <text x="660" y={EQUATOR_Y - 6} className="equator-text">EQUATOR (0°)</text>

            {/* Neighboring labels */}
            <text x="35"  y="520" className="country-neighbor-label">UGANDA</text>
            <text x="185" y="785" className="country-neighbor-label">TANZANIA</text>
            <text x="375" y="50"  className="country-neighbor-label">ETHIOPIA</text>
            <text x="670" y="440" className="country-neighbor-label">SOMALIA</text>
            <text x="78"  y="80"  className="country-neighbor-label">S. SUDAN</text>
            <text x="545" y="855" className="ocean-label">INDIAN OCEAN</text>
            <text x="28"  y="608" className="lake-label">L. Victoria</text>
          </g>

          {/* Lake Victoria */}
          <path
            d="M 15 540 Q 40 570 30 620 Q 20 640 5 650 L 5 540 Z"
            fill="rgba(14, 116, 144, 0.22)"
            stroke="rgba(14, 116, 144, 0.38)"
            strokeWidth="1"
          />

          {/* 47 County Paths */}
          <g className="counties-layer">
            {COUNTIES.map((county) => {
              if (county.isNarok) return null;
              const isAdjacent = ['KAJIADO', 'NAKURU', 'BOMET', 'KISII', 'MIGORI', 'NYAMIRA'].includes(county.name);
              return (
                <path
                  key={county.code}
                  d={county.d}
                  className={`county-path ${isAdjacent ? 'adjacent-county' : ''} ${hoveredCounty === county.name ? 'hovered' : ''}`}
                  onMouseEnter={(e) => handleCountyMouseEnter(county, e)}
                  onMouseLeave={handleCountyMouseLeave}
                  stroke="rgba(255,255,255,0.1)"
                  strokeWidth="0.8"
                />
              );
            })}

            {/* Narok County — gold highlighted */}
            {COUNTIES.filter(c => c.isNarok).map(narok => (
              <path
                key={narok.code}
                d={narok.d}
                fill="url(#narokGoldGrad)"
                stroke="#fef08a"
                strokeWidth="2"
                filter="url(#narokGlow)"
                className={`county-narok-path ${hoveredCounty === 'NAROK' ? 'hovered' : ''}`}
                onMouseEnter={(e) => handleCountyMouseEnter(narok, e)}
                onMouseLeave={handleCountyMouseLeave}
              />
            ))}
          </g>

          {/* Geographic details inside Narok */}
          <g className="narok-details-layer">
            {/* Great Rift Valley hint */}
            <path
              d="M 235 340 Q 248 490 260 590 Q 270 680 280 770"
              stroke="rgba(245,158,11,0.28)"
              strokeWidth="1.2"
              strokeDasharray="4 3"
              fill="none"
            />
            {/* Maasai Mara zone */}
            <path
              d="M 100 635 Q 135 655 180 670 Q 150 680 115 675 Z"
              fill="rgba(245,158,11,0.15)"
              stroke="rgba(254,240,138,0.3)"
              strokeWidth="0.7"
              strokeDasharray="2 2"
            />
            {maraLandmark && (
              <text x={maraLandmark.pt[0]} y={maraLandmark.pt[1]} className="mara-label">
                Maasai Mara
              </text>
            )}
          </g>

          {/* Landmarks */}
          <g className="landmarks-layer">
            {/* Nairobi */}
            {nairobiLandmark && (
              <g className="landmark-pin capital" transform={`translate(${nairobiLandmark.pt[0]},${nairobiLandmark.pt[1]})`}>
                <circle r="4.5" fill="#ffffff" stroke="#0c2340" strokeWidth="1.5" />
                <circle r="7.5" fill="none" stroke="rgba(255,255,255,0.35)" strokeWidth="0.8" strokeDasharray="2 2" />
                <text x="9" y="3" className="landmark-text capital-text">Nairobi (Capital)</text>
              </g>
            )}

            {/* Mt. Kenya */}
            {mtKenyaLandmark && (
              <g className="landmark-pin mountain" transform={`translate(${mtKenyaLandmark.pt[0]},${mtKenyaLandmark.pt[1]})`}>
                <polygon points="0,-5 4,3 -4,3" fill="#93c5fd" />
                <text x="7" y="2" className="landmark-text mountain-text">Mt. Kenya</text>
              </g>
            )}

            {/* Narok Town */}
            {narokTownLandmark && (
              <g className="landmark-pin town" transform={`translate(${narokTownLandmark.pt[0]},${narokTownLandmark.pt[1]})`}>
                <circle r="3" fill="#fef08a" stroke="#78350f" strokeWidth="1" />
                <text x="6" y="3" className="landmark-text">Narok Town</text>
              </g>
            )}

            {/* Shankoe CYDC Beacon */}
            {shankoeLandmark && (
              <g className="shankoe-beacon-group" transform={`translate(${shankoeLandmark.pt[0]},${shankoeLandmark.pt[1]})`}>
                <circle r="28" fill="url(#beaconGlow)" className="radar-pulse-outer" />
                <circle r="16" fill="rgba(254,240,138,0.4)" className="radar-pulse-inner" />
                <circle r="6.5" fill="#ffffff" stroke="#92400e" strokeWidth="2" className="radar-core-dot" />
                {/* Floating label */}
                <g transform="translate(12,-22)" className="shankoe-badge-tag">
                  <rect width="124" height="32" rx="5" fill="#0c2340" stroke="#f59e0b" strokeWidth="1.2" />
                  <text x="7" y="14" className="shankoe-tag-title">SHANKOE CYDC</text>
                  <text x="7" y="25" className="shankoe-tag-sub">HQ • Trans Mara West</text>
                </g>
              </g>
            )}
          </g>
        </svg>

        {/* Hover tooltip */}
        {tooltip.visible && (
          <div
            className="map-cursor-tooltip"
            style={{ left: `${tooltip.x + 14}px`, top: `${tooltip.y - 14}px` }}
          >
            {tooltip.title}
          </div>
        )}
      </div>
    </div>
  );
}
