import React, { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { 
  MapPin, 
  Shield, 
  School, 
  Users, 
  GraduationCap, 
  Layers, 
  Maximize2, 
  CheckCircle2, 
  Crosshair,
  TrendingUp,
  Church
} from 'lucide-react';
import { BRAND, WHERE_WE_WORK_DATA } from '../data/content';
import './KenyaMap.css';

// Reliable Geographic Coordinates
// Shankoe Methodist Child and Youth Centre (Trans Mara / Narok West, Narok County)
const SHANKOE_COORDS = [-1.095, 34.865];

// Narok County Center
const NAROK_CENTER = [-1.15, 35.55];

// Kenya Country Center
const KENYA_CENTER = [0.2, 37.8];

// Authentic Geographic Boundary Coordinates for Narok County (County 033)
const NAROK_POLYGON = [
  [-0.55, 35.70], // Mau Forest Northern Apex
  [-0.58, 35.85],
  [-0.62, 36.10], // Mau Narok / Nakuru Border
  [-0.70, 36.22],
  [-0.85, 36.35], // Mt Suswa / Kajiado Border
  [-1.05, 36.38],
  [-1.25, 36.25], // Mosiro / Rift Valley Floor
  [-1.45, 36.10],
  [-1.65, 35.95], // Loita Hills East
  [-1.83, 35.85], // Tanzania Border Eastern Edge
  [-1.76, 35.55], // International Border (Serengeti / Mara)
  [-1.68, 35.25],
  [-1.58, 34.95],
  [-1.48, 34.65], // Mara Triangle / Siria Escarpment (Tanzania Border)
  [-1.35, 34.68], // Migori Border
  [-1.25, 34.72],
  [-1.15, 34.78],
  [-1.09, 34.86], // Shankoe / Trans Mara West Border
  [-1.00, 34.88], // Kilgoris Area
  [-0.92, 34.92], // Kisii Border
  [-0.85, 35.05], // Bomet Border (Chebunyo)
  [-0.80, 35.25], // Mulot Area
  [-0.75, 35.45], // Mau Summit
  [-0.55, 35.70]  // Back to Apex
];

// Surrounding Geographic Key Points
const KEY_LOCATIONS = [
  {
    name: 'Shankoe CYDC Headquarters',
    coords: SHANKOE_COORDS,
    type: 'shankoe',
    badge: 'Operational Headquarters',
    desc: 'Shankoe Methodist Church Compound, Trans Mara / Narok West. Serving 131 partner schools & 25,000+ community members.'
  },
  {
    name: 'Narok Town',
    coords: [-1.085, 35.87],
    type: 'capital',
    badge: 'County 033 Headquarters',
    desc: 'Administrative capital of Narok County along the Great Rift Valley.'
  },
  {
    name: 'Maasai Mara National Reserve',
    coords: [-1.502, 35.144],
    type: 'landmark',
    badge: 'Ecological Landscape',
    desc: 'World-renowned savanna ecosystem within Narok County, bordering Tanzania.'
  },
  {
    name: 'Kilgoris Town',
    coords: [-1.002, 34.877],
    type: 'town',
    badge: 'Sub-County Hub',
    desc: 'Commercial and administrative hub of Trans Mara near Shankoe.'
  },
  {
    name: 'Nairobi (Capital)',
    coords: [-1.286, 36.817],
    type: 'reference',
    badge: 'National Capital',
    desc: 'National coordination, partner liaison & university transition hub.'
  }
];

export default function KenyaMap() {
  const mapContainerRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const narokLayerRef = useRef(null);
  const [activeBaseLayer, setActiveBaseLayer] = useState('voyager');
  const [activeViewMode, setActiveViewMode] = useState('narok');
  const [mapLoaded, setMapLoaded] = useState(false);

  useEffect(() => {
    if (!mapContainerRef.current) return;

    // Prevent duplicate map initialization
    if (mapInstanceRef.current) {
      mapInstanceRef.current.remove();
    }

    // Initialize Leaflet Map with smooth interaction
    const map = L.map(mapContainerRef.current, {
      center: NAROK_CENTER,
      zoom: 8,
      minZoom: 6,
      maxZoom: 16,
      zoomControl: false,
      scrollWheelZoom: false, // Prevent accidental scrolling
    });

    mapInstanceRef.current = map;

    // Add Zoom control to top-right
    L.control.zoom({ position: 'topright' }).addTo(map);

    // Modern CartoDB Voyager Tile Layer (Reliable, Beautiful, Fast)
    const baseLayers = {
      voyager: L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://carto.com/">CARTO</a> &copy; <a href="https://openstreetmap.org">OSM</a>',
        subdomains: 'abcd',
        maxZoom: 19
      }),
      dark: L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://carto.com/">CARTO</a> &copy; <a href="https://openstreetmap.org">OSM</a>',
        subdomains: 'abcd',
        maxZoom: 19
      }),
      osm: L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://openstreetmap.org">OpenStreetMap</a> contributors',
        maxZoom: 19
      })
    };

    baseLayers[activeBaseLayer].addTo(map);

    // ========================================================
    // NAROK COUNTY GEOGRAPHIC POLYGON
    // ========================================================
    const narokPolygonLayer = L.polygon(NAROK_POLYGON, {
      color: '#d97706',
      weight: 3,
      opacity: 0.95,
      fillColor: '#f59e0b',
      fillOpacity: 0.24,
      dashArray: '6, 6',
      smoothFactor: 1
    }).addTo(map);

    narokLayerRef.current = narokPolygonLayer;

    narokPolygonLayer.on('mouseover', () => {
      narokPolygonLayer.setStyle({
        fillOpacity: 0.4,
        weight: 4,
        dashArray: null
      });
    });

    narokPolygonLayer.on('mouseout', () => {
      narokPolygonLayer.setStyle({
        fillOpacity: 0.24,
        weight: 3,
        dashArray: '6, 6'
      });
    });

    narokPolygonLayer.bindTooltip(
      '<div class="narok-map-tooltip"><strong>Narok County (033)</strong><br/><span>Shankoe CYDC Operational Territory</span></div>',
      { sticky: true, className: 'leaflet-custom-tooltip' }
    );

    // ========================================================
    // CUSTOM PULSING BEACON MARKER: SHANKOE CYDC
    // ========================================================
    const shankoeIcon = L.divIcon({
      className: 'shankoe-leaflet-marker',
      html: `
        <div class="marker-pulse-wrapper">
          <div class="marker-pulse-ring"></div>
          <div class="marker-pulse-ring delay"></div>
          <div class="marker-core">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
            </svg>
          </div>
          <div class="marker-flag">SHANKOE CYDC</div>
        </div>
      `,
      iconSize: [40, 40],
      iconAnchor: [20, 20]
    });

    const shankoeMarker = L.marker(SHANKOE_COORDS, { icon: shankoeIcon, zIndexOffset: 1000 }).addTo(map);
    
    shankoeMarker.bindPopup(`
      <div class="shankoe-popup-card">
        <div class="popup-badge">OPERATIONAL HEADQUARTERS</div>
        <h4 class="popup-title">${BRAND.fullName}</h4>
        <p class="popup-sub">Shankoe Methodist Church Compound, Narok County</p>
        <div class="popup-stats-list">
          <div>✓ 131 Partner Schools Reached</div>
          <div>✓ 25,000+ Citizens Mobilised</div>
          <div>✓ 693 Higher Ed Scholars Supported</div>
        </div>
      </div>
    `, { className: 'leaflet-custom-popup', maxWidth: 300 });

    // Other Key Reference Points (Narok Town, Maasai Mara, Nairobi)
    KEY_LOCATIONS.filter(loc => loc.type !== 'shankoe').forEach(loc => {
      const locIcon = L.divIcon({
        className: 'ref-leaflet-marker',
        html: `
          <div class="ref-marker-dot ${loc.type}">
            <div class="ref-label-pill">${loc.name}</div>
          </div>
        `,
        iconSize: [20, 20],
        iconAnchor: [10, 10]
      });

      const marker = L.marker(loc.coords, { icon: locIcon }).addTo(map);
      marker.bindPopup(`
        <div class="ref-popup-card">
          <span class="ref-popup-badge">${loc.badge}</span>
          <strong>${loc.name}</strong>
          <p>${loc.desc}</p>
        </div>
      `, { className: 'leaflet-custom-popup' });
    });

    // Invalidate size to ensure crisp rendering
    setTimeout(() => {
      map.invalidateSize();
      setMapLoaded(true);
    }, 200);

    return () => {
      map.remove();
    };
  }, [activeBaseLayer]);

  // View Controls
  const handleFocusShankoe = () => {
    setActiveViewMode('shankoe');
    if (mapInstanceRef.current) {
      mapInstanceRef.current.flyTo(SHANKOE_COORDS, 11, { duration: 1.2 });
    }
  };

  const handleFocusNarok = () => {
    setActiveViewMode('narok');
    if (mapInstanceRef.current && narokLayerRef.current) {
      mapInstanceRef.current.flyToBounds(narokLayerRef.current.getBounds(), {
        padding: [30, 30],
        duration: 1.2
      });
    }
  };

  const handleFocusKenya = () => {
    setActiveViewMode('kenya');
    if (mapInstanceRef.current) {
      mapInstanceRef.current.flyTo(KENYA_CENTER, 6, { duration: 1.4 });
    }
  };

  return (
    <div className="kenya-gis-map-card">
      <div className="map-workspace-grid">
        {/* Left Column: Interactive Leaflet GIS Map */}
        <div className="gis-map-col">
          {/* Top Map Toolbar: View Mode & Layer Controls */}
          <div className="map-toolbar">
            <div className="toolbar-btn-group">
              <button 
                type="button" 
                className={`map-view-btn ${activeViewMode === 'narok' ? 'active' : ''}`}
                onClick={handleFocusNarok}
              >
                <Shield size={14} />
                <span>Narok County (County 033)</span>
              </button>
              <button 
                type="button" 
                className={`map-view-btn ${activeViewMode === 'shankoe' ? 'active' : ''}`}
                onClick={handleFocusShankoe}
              >
                <Crosshair size={14} />
                <span>Focus: Shankoe CYDC</span>
              </button>
              <button 
                type="button" 
                className={`map-view-btn ${activeViewMode === 'kenya' ? 'active' : ''}`}
                onClick={handleFocusKenya}
              >
                <Maximize2 size={14} />
                <span>All Kenya Overview</span>
              </button>
            </div>

            <div className="toolbar-layer-select">
              <span className="layer-label">Base Style:</span>
              <button 
                type="button" 
                className={`layer-toggle-btn ${activeBaseLayer === 'voyager' ? 'active' : ''}`}
                onClick={() => setActiveBaseLayer('voyager')}
                title="CartoDB Voyager Cartography"
              >
                Modern
              </button>
              <button 
                type="button" 
                className={`layer-toggle-btn ${activeBaseLayer === 'dark' ? 'active' : ''}`}
                onClick={() => setActiveBaseLayer('dark')}
                title="High Contrast Dark View"
              >
                Dark
              </button>
              <button 
                type="button" 
                className={`layer-toggle-btn ${activeBaseLayer === 'osm' ? 'active' : ''}`}
                onClick={() => setActiveBaseLayer('osm')}
                title="OpenStreetMap Details"
              >
                Terrain
              </button>
            </div>
          </div>

          {/* Leaflet DOM Map Container */}
          <div className="gis-map-viewport-wrapper">
            <div 
              ref={mapContainerRef} 
              className="leaflet-map-element"
              aria-label="Geographic map of Kenya with Narok County and Shankoe CYDC"
            />

            {/* Map Legend Floating Strip */}
            <div className="map-legend-floating">
              <div className="legend-entry">
                <span className="legend-color-box narok-gold"></span>
                <span>Narok County (Highlighted)</span>
              </div>
              <div className="legend-entry">
                <span className="legend-marker-dot"></span>
                <span>Shankoe CYDC (Headquarters)</span>
              </div>
              <div className="legend-entry">
                <span className="legend-town-dot"></span>
                <span>Key Landmark / Hub</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Geographic & Community Context Panel */}
        <div className="gis-info-col">
          <div className="gis-info-card">
            <div className="gis-card-header">
              <div className="county-code-badge">
                <span>KENYA COUNTY 033</span>
              </div>
              <h4 className="gis-county-title">{WHERE_WE_WORK_DATA.county}</h4>
              <span className="gis-county-sub">Trans Mara / Narok West Sub-County</span>
            </div>

            <p className="gis-county-description">
              {WHERE_WE_WORK_DATA.description}
            </p>

            <div className="gis-metrics-grid">
              {WHERE_WE_WORK_DATA.keyMetrics.map((metric, idx) => (
                <div key={idx} className="gis-metric-card">
                  <span className="metric-card-label">{metric.label}</span>
                  <span className="metric-card-val">{metric.value}</span>
                </div>
              ))}
            </div>

            {/* Community Reality Box */}
            <div className="community-anchor-box">
              <div className="anchor-box-header">
                <Church size={16} className="anchor-gold-icon" />
                <span>The Shankoe CYDC Mission Ground</span>
              </div>
              <p className="anchor-box-text">
                Situated at the Shankoe Methodist Church Compound, our centre provides an essential lifeline for children across remote rural settlements, offering accessible education support, nutritional safety nets, and community child safeguarding across 131 schools.
              </p>
              <div className="anchor-checklist">
                <div className="check-item">
                  <CheckCircle2 size={14} className="check-gold" />
                  <span>GPS: 1.095° S, 34.865° E (Trans Mara West)</span>
                </div>
                <div className="check-item">
                  <CheckCircle2 size={14} className="check-gold" />
                  <span>Bordering Serengeti / Maasai Mara Ecosystem</span>
                </div>
                <div className="check-item">
                  <CheckCircle2 size={14} className="check-gold" />
                  <span>Child Protection Network Across 131 Schools</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
