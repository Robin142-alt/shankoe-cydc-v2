import React, { useState } from 'react';
import { MapPin, Info, Compass, Shield, Users, School, Sparkles, CheckCircle2 } from 'lucide-react';
import { WHERE_WE_WORK_DATA, BRAND } from '../data/content';
import './KenyaMap.css';

export default function KenyaMap() {
  const [activeRegion, setActiveRegion] = useState('narok');
  const [tooltip, setTooltip] = useState(null);

  const regionDetails = {
    narok: {
      name: 'Narok County (County 033)',
      title: 'Our Home & Primary Operational Area',
      status: 'Primary Focus — Shankoe CYDC Headquarters',
      description: 'Located in southwestern Kenya along the Great Rift Valley, bordering Tanzania to the south. Narok is home to diverse pastoralist and agro-pastoralist communities, the Mau Forest water tower, and the Maasai Mara ecosystem.',
      stats: [
        { label: 'Primary Centre', value: 'Shankoe Methodist Church Compound' },
        { label: 'Sub-County', value: 'Trans Mara / Narok West' },
        { label: 'Partner Schools', value: '131 Schools Reached' },
        { label: 'Advocacy Reach', value: '25,000+ Community Members' },
        { label: 'Higher Ed Scholars', value: '693 Supported Learners' },
        { label: 'Young Entrepreneurs', value: '358 Active Businesses' }
      ]
    },
    nairobi: {
      name: 'Nairobi (Capital City)',
      title: 'National Coordination & Policy Hub',
      status: 'Strategic Policy Linkage',
      description: 'National capital where Shankoe CYDC advocates for child protection policy representation and higher education transitions for university scholars.',
      stats: [
        { label: 'Role', value: 'National Policy & Partner Liaison' },
        { label: 'University Scholars', value: 'Graduates at University of Nairobi, Kenyatta, etc.' }
      ]
    },
    rift: {
      name: 'Great Rift Valley Region',
      title: 'Regional Geography',
      status: 'Geographical Corridor',
      description: 'The dramatic geological trench running north-south through Kenya. Narok County occupies the southwestern escarpments and plains of this magnificent corridor.',
      stats: [
        { label: 'Landscape', value: 'Acacia Savannas, Highland Plateaus, Mau Forest' },
        { label: 'Climate Priority', value: 'Climate-Smart Ag for Semi-Arid Zones' }
      ]
    }
  };

  const handleRegionHover = (regionKey, e) => {
    setActiveRegion(regionKey);
  };

  return (
    <div className="kenya-map-card">
      <div className="kenya-map-header">
        <div className="map-title-group">
          <div className="map-badge">
            <Compass size={15} className="map-badge-icon" />
            <span>GEOGRAPHIC FOCUS • NAROK COUNTY, KENYA</span>
          </div>
          <h3 className="map-heading">
            Where We Work: <span className="highlight-gold">Narok County</span>
          </h3>
          <p className="map-subtext">
            Rooted in southwestern Kenya, Shankoe Methodist Child and Youth Centre serves vulnerable children and young people across rural communities and 131 partner schools.
          </p>
        </div>
      </div>

      <div className="kenya-map-grid">
        {/* Interactive SVG Map Column */}
        <div className="map-visual-container">
          <div className="map-frame">
            {/* Compass Rose */}
            <div className="map-compass" title="North Arrow">
              <span className="compass-n">N</span>
              <div className="compass-pointer" />
            </div>

            {/* Map Legend Floating Tag */}
            <div className="map-interactive-hint">
              <span className="hint-pulse-dot" />
              <span>Interactive Map: Hover or click regions</span>
            </div>

            <svg 
              viewBox="0 0 620 660" 
              className="kenya-svg"
              aria-label="Map of Kenya highlighting Narok County and Shankoe CYDC"
            >
              <defs>
                {/* Glow Filter for Narok Highlight */}
                <filter id="glow-narok" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="6" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>

                {/* Subtle Shadow Filter */}
                <filter id="map-drop-shadow" x="-5%" y="-5%" width="115%" height="115%">
                  <feDropShadow dx="0" dy="8" stdDeviation="10" floodColor="#061224" floodOpacity="0.4" />
                </filter>

                {/* Gradients */}
                <linearGradient id="narok-gold-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#f59e0b" />
                  <stop offset="50%" stopColor="#d97706" />
                  <stop offset="100%" stopColor="#b45309" />
                </linearGradient>

                <linearGradient id="kenya-bg-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#1a3250" />
                  <stop offset="100%" stopColor="#0f2238" />
                </linearGradient>

                <linearGradient id="lake-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#0284c7" stopOpacity="0.65" />
                  <stop offset="100%" stopColor="#0369a1" stopOpacity="0.8" />
                </linearGradient>

                <radialGradient id="beacon-glow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#fef08a" stopOpacity="1" />
                  <stop offset="40%" stopColor="#f59e0b" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#d97706" stopOpacity="0" />
                </radialGradient>
              </defs>

              {/* Water Bodies (Surrounding Reference) */}
              {/* Lake Victoria (West of Kenya / Narok) */}
              <g className="map-water-layer">
                <path 
                  d="M 50 420 C 55 390 70 380 85 395 C 105 410 100 445 88 470 C 75 490 55 480 50 450 Z" 
                  fill="url(#lake-grad)" 
                  className="water-path"
                />
                <text x="60" y="440" className="water-label" transform="rotate(-30 60 440)">Lake Victoria</text>

                {/* Lake Turkana (North Kenya) */}
                <path 
                  d="M 200 65 C 215 95 230 145 235 195 C 225 210 215 190 210 160 C 200 120 195 85 200 65 Z" 
                  fill="url(#lake-grad)" 
                  className="water-path"
                />
                <text x="220" y="140" className="water-label" transform="rotate(75 220 140)">Lake Turkana</text>

                {/* Indian Ocean (Southeast Coast) */}
                <path 
                  d="M 450 630 L 610 630 L 610 460 C 580 470 540 500 505 540 C 475 575 455 605 450 630 Z" 
                  fill="url(#lake-grad)" 
                  className="water-path ocean-path"
                  opacity="0.45"
                />
                <text x="515" y="585" className="water-label">Indian Ocean</text>
              </g>

              {/* Kenya Outer Contour Silhouette */}
              <g className="map-country-layer" filter="url(#map-drop-shadow)">
                {/* Kenya Base Territory */}
                <path 
                  d="M 195 50 
                     L 245 45 
                     L 340 70 
                     L 440 95 
                     L 540 120 
                     L 575 180 
                     L 545 255 
                     L 505 320 
                     L 495 400 
                     L 550 465 
                     L 505 540 
                     L 460 600 
                     L 440 625 
                     L 405 595 
                     L 350 540 
                     L 290 515 
                     L 210 505 
                     L 135 495 
                     L 95 460 
                     L 85 390 
                     L 105 330 
                     L 125 270 
                     L 145 200 
                     L 170 120 
                     Z" 
                  fill="url(#kenya-bg-grad)" 
                  stroke="#334e68" 
                  strokeWidth="2.5" 
                  className="kenya-base-shape"
                />

                {/* Regional County Boundaries (Subtle Authentic Outlines) */}
                {/* Northern Kenya (Turkana, Marsabit, Samburu) */}
                <path 
                  d="M 195 50 L 245 45 L 340 70 L 440 95 L 410 180 L 330 200 L 250 205 L 145 200 L 170 120 Z" 
                  fill="#1e3a5f" 
                  opacity="0.6" 
                  stroke="#2d4d75" 
                  strokeWidth="1.2"
                  className="county-region"
                />

                {/* Eastern & North Eastern (Mandera, Wajir, Garissa) */}
                <path 
                  d="M 440 95 L 540 120 L 575 180 L 545 255 L 505 320 L 415 305 L 330 200 L 410 180 Z" 
                  fill="#1b3456" 
                  opacity="0.5" 
                  stroke="#2d4d75" 
                  strokeWidth="1.2"
                  className="county-region"
                />

                {/* Central / Mount Kenya Region */}
                <path 
                  d="M 250 205 L 330 200 L 415 305 L 360 380 L 305 350 L 270 290 Z" 
                  fill="#23436d" 
                  opacity="0.75" 
                  stroke="#3a608f" 
                  strokeWidth="1.2"
                  className="county-region"
                />

                {/* Western & Nyanza (Lake Region) */}
                <path 
                  d="M 105 330 L 145 200 L 250 205 L 230 350 L 155 365 L 95 385 Z" 
                  fill="#183659" 
                  opacity="0.65" 
                  stroke="#2d4d75" 
                  strokeWidth="1.2"
                  className="county-region"
                />

                {/* Southern Coast (Kilifi, Kwale, Taita Taveta) */}
                <path 
                  d="M 360 380 L 495 400 L 550 465 L 505 540 L 460 600 L 440 625 L 405 595 L 375 490 Z" 
                  fill="#162e4c" 
                  opacity="0.6" 
                  stroke="#2d4d75" 
                  strokeWidth="1.2"
                  className="county-region"
                />

                {/* Kajiado County (East of Narok) */}
                <path 
                  d="M 305 350 L 360 380 L 375 490 L 350 540 L 290 515 L 245 450 L 280 395 Z" 
                  fill="#1e3a63" 
                  opacity="0.7" 
                  stroke="#355782" 
                  strokeWidth="1.2"
                  className="county-region"
                />

                {/* ======================================================== */}
                {/* NAROK COUNTY — PROMINENTLY HIGHLIGHTED IN RADIANT GOLD   */}
                {/* ======================================================== */}
                <path 
                  d="M 155 365 
                     L 230 350 
                     L 280 395 
                     L 245 450 
                     L 290 515 
                     L 210 505 
                     L 135 495 
                     L 142 430 
                     Z" 
                  fill="url(#narok-gold-grad)" 
                  stroke="#fef08a" 
                  strokeWidth="3.5" 
                  className={`county-narok-highlight ${activeRegion === 'narok' ? 'active-county' : ''}`}
                  filter="url(#glow-narok)"
                  onClick={() => setActiveRegion('narok')}
                  onMouseEnter={(e) => handleRegionHover('narok', e)}
                />

                {/* Narok County Internal Contour Lines for Authentic Topography */}
                <path 
                  d="M 185 410 Q 215 440 240 475" 
                  stroke="rgba(255, 255, 255, 0.35)" 
                  strokeWidth="1.5" 
                  strokeDasharray="3 3"
                  fill="none" 
                />

                {/* Maasai Mara Boundary Label Area */}
                <path 
                  d="M 150 480 Q 210 495 270 510" 
                  stroke="rgba(255, 255, 255, 0.45)" 
                  strokeWidth="1.8" 
                  fill="none" 
                />
              </g>

              {/* Geographic Annotations & City Markers */}
              <g className="map-labels-layer">
                {/* Kenya Equator Line */}
                <line 
                  x1="80" 
                  y1="280" 
                  x2="550" 
                  y2="280" 
                  stroke="rgba(255, 255, 255, 0.18)" 
                  strokeWidth="1.2" 
                  strokeDasharray="5 5" 
                />
                <text x="500" y="273" className="equator-label">EQUATOR (0°)</text>

                {/* Great Rift Valley Axis Line */}
                <path 
                  d="M 215 80 Q 225 240 240 370 Q 250 430 260 520" 
                  stroke="rgba(245, 158, 11, 0.35)" 
                  strokeWidth="2" 
                  strokeDasharray="6 4" 
                  fill="none"
                  className="rift-valley-line"
                  onClick={() => setActiveRegion('rift')}
                />
                <text x="245" y="240" className="rift-label" transform="rotate(78 245 240)">Great Rift Valley</text>

                {/* Mount Kenya Marker */}
                <circle cx="315" cy="305" r="4" fill="#93c5fd" />
                <text x="325" y="308" className="landmark-label">Mt. Kenya</text>

                {/* Nairobi Capital City Marker */}
                <g 
                  className="landmark-pin-group" 
                  onClick={() => setActiveRegion('nairobi')}
                  onMouseEnter={(e) => handleRegionHover('nairobi', e)}
                  style={{ cursor: 'pointer' }}
                >
                  <circle cx="295" cy="405" r="5" fill="#f8fafc" stroke="#0f172a" strokeWidth="2" />
                  <circle cx="295" cy="405" r="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="2 2" />
                  <text x="310" y="410" className="nairobi-label">Nairobi (Capital)</text>
                </g>

                {/* ======================================================== */}
                {/* SHANKOE CYDC BEACON PIN & RADIATING PULSE                */}
                {/* Location: Trans Mara / Narok West (X: 175, Y: 440)      */}
                {/* ======================================================== */}
                <g 
                  className="shankoe-beacon-group"
                  onClick={() => setActiveRegion('narok')}
                >
                  {/* Radiating Waves */}
                  <circle cx="175" cy="440" r="28" fill="url(#beacon-glow)" className="beacon-outer-pulse" />
                  <circle cx="175" cy="440" r="16" fill="rgba(254, 240, 138, 0.3)" className="beacon-wave" />
                  <circle cx="175" cy="440" r="8" fill="#ffffff" stroke="#b45309" strokeWidth="2.5" className="beacon-core" />
                  
                  {/* Pin Flag & Label */}
                  <rect x="190" y="420" width="135" height="34" rx="6" fill="#0c2340" stroke="#f59e0b" strokeWidth="1.8" className="shankoe-badge-rect" />
                  <text x="200" y="435" className="shankoe-badge-title">SHANKOE CYDC</text>
                  <text x="200" y="448" className="shankoe-badge-sub">Narok County, Kenya</text>
                </g>

                {/* Narok County Bold Callout Label */}
                <text x="180" y="490" className="narok-map-callout">NAROK COUNTY</text>
                <text x="180" y="504" className="narok-sub-callout">Maasai Mara • 131 Schools</text>

                {/* Neighboring Country Labels */}
                <text x="45" y="360" className="neighbor-country-label">UGANDA</text>
                <text x="210" y="560" className="neighbor-country-label">TANZANIA (Serengeti)</text>
                <text x="320" y="40" className="neighbor-country-label">ETHIOPIA</text>
                <text x="540" y="270" className="neighbor-country-label">SOMALIA</text>
              </g>
            </svg>
          </div>

          {/* Quick County Badges underneath map */}
          <div className="map-badge-strip">
            <button 
              type="button" 
              className={`region-tab-btn ${activeRegion === 'narok' ? 'active' : ''}`}
              onClick={() => setActiveRegion('narok')}
            >
              <MapPin size={14} className="tab-icon" />
              <span>Narok County (Headquarters)</span>
            </button>
            <button 
              type="button" 
              className={`region-tab-btn ${activeRegion === 'nairobi' ? 'active' : ''}`}
              onClick={() => setActiveRegion('nairobi')}
            >
              <span>Nairobi Capital</span>
            </button>
            <button 
              type="button" 
              className={`region-tab-btn ${activeRegion === 'rift' ? 'active' : ''}`}
              onClick={() => setActiveRegion('rift')}
            >
              <span>Rift Valley Corridor</span>
            </button>
          </div>
        </div>

        {/* Informational Panel Side */}
        <div className="map-info-panel">
          <div className="info-card-header">
            <div className="info-county-pill">
              <span className="pill-dot" />
              <span>{regionDetails[activeRegion].status}</span>
            </div>
            <h4 className="info-card-title">{regionDetails[activeRegion].name}</h4>
            <span className="info-card-subtitle">{regionDetails[activeRegion].title}</span>
          </div>

          <p className="info-card-description">
            {regionDetails[activeRegion].description}
          </p>

          <div className="info-stats-grid">
            {regionDetails[activeRegion].stats.map((item, idx) => (
              <div key={idx} className="info-stat-item">
                <span className="info-stat-label">{item.label}</span>
                <span className="info-stat-val">{item.value}</span>
              </div>
            ))}
          </div>

          {/* Contextual Box: Why Narok County */}
          <div className="narok-context-box">
            <div className="context-box-header">
              <Shield size={16} className="context-icon" />
              <span>The Shankoe Community Context</span>
            </div>
            <p className="context-box-text">
              Narok County is characterized by semi-arid expanses, remote rural settlements, and pastoral livelihoods. Children in this region face distinct barriers to secondary school completion, healthcare access, and climate vulnerabilities from recurrent droughts.
            </p>
            <div className="context-tags">
              <span className="context-tag">✓ 131 Partner Schools</span>
              <span className="context-tag">✓ Community Child Safeguarding</span>
              <span className="context-tag">✓ Climate-Smart Kitchen Gardens</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
