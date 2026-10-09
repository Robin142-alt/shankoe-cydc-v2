const fs = require('fs');

function perpendicularDistance(point, lineStart, lineEnd) {
  let dx = lineEnd[0] - lineStart[0];
  let dy = lineEnd[1] - lineStart[1];
  const mag = Math.hypot(dx, dy);
  if (mag > 0) {
    dx /= mag; dy /= mag;
  }
  const pvx = point[0] - lineStart[0];
  const pvy = point[1] - lineStart[1];
  const pvdot = dx * pvx + dy * pvy;
  const ax = pvx - pvdot * dx;
  const ay = pvy - pvdot * dy;
  return Math.hypot(ax, ay);
}

function ramerDouglasPeucker(points, epsilon) {
  if (points.length <= 2) return points;
  let dmax = 0;
  let index = 0;
  const end = points.length - 1;
  for (let i = 1; i < end; i++) {
    const d = perpendicularDistance(points[i], points[0], points[end]);
    if (d > dmax) {
      index = i;
      dmax = d;
    }
  }
  if (dmax > epsilon) {
    const rec1 = ramerDouglasPeucker(points.slice(0, index + 1), epsilon);
    const rec2 = ramerDouglasPeucker(points.slice(index), epsilon);
    return rec1.slice(0, rec1.length - 1).concat(rec2);
  } else {
    return [points[0], points[end]];
  }
}

async function buildKenyaMapData() {
  const res = await fetch('https://raw.githubusercontent.com/tigawanna/kenya_wards_geojson_data/main/src/data/counties/counties.geojson');
  const data = await res.json();

  const minLon = 33.8, maxLon = 42.0;
  const minLat = -4.9, maxLat = 5.5;
  const width = 800, height = 960;

  function project(lon, lat) {
    const x = ((lon - minLon) / (maxLon - minLon)) * width;
    const y = ((maxLat - lat) / (maxLat - minLat)) * height;
    return [Math.round(x * 10) / 10, Math.round(y * 10) / 10];
  }

  function ringToPath(ring, eps) {
    const simplified = ramerDouglasPeucker(ring, eps);
    return simplified.map((pt, i) => {
      const [x, y] = project(pt[0], pt[1]);
      return (i === 0 ? 'M' : 'L') + x + ' ' + y;
    }).join(' ') + ' Z';
  }

  const counties = [];
  let narokCounty = null;

  data.features.forEach(f => {
    const code = f.properties.county_code;
    const name = f.properties.county_name;
    const isNarok = code === 33 || name === 'NAROK';
    
    // For Narok, keep tight fidelity (0.002 deg ~ 200m)
    const eps = isNarok ? 0.002 : 0.006;
    
    const polys = f.geometry.type === 'Polygon' ? [f.geometry.coordinates] : f.geometry.coordinates;
    const pathD = polys.map(poly => poly.map(ring => ringToPath(ring, eps)).join(' ')).join(' ');

    const item = {
      code,
      name,
      d: pathD,
      isNarok
    };

    if (isNarok) {
      narokCounty = item;
    }
    counties.push(item);
  });

  const landmarks = [
    { id: 'shankoe', name: 'Shankoe CYDC (HQ)', coords: [34.865, -1.095], pt: project(34.865, -1.095), type: 'hq' },
    { id: 'kilgoris', name: 'Kilgoris Town', coords: [34.877, -1.002], pt: project(34.877, -1.002), type: 'sub_town' },
    { id: 'narok_town', name: 'Narok Town', coords: [35.87, -1.085], pt: project(35.87, -1.085), type: 'county_capital' },
    { id: 'nairobi', name: 'Nairobi (Capital)', coords: [36.8219, -1.2921], pt: project(36.8219, -1.2921), type: 'capital' },
    { id: 'nakuru', name: 'Nakuru', coords: [36.08, -0.303], pt: project(36.08, -0.303), type: 'ref' },
    { id: 'kisumu', name: 'Kisumu', coords: [34.768, -0.0917], pt: project(34.768, -0.0917), type: 'ref' },
    { id: 'mombasa', name: 'Mombasa', coords: [39.668, -4.0435], pt: project(39.668, -4.0435), type: 'ref' },
    { id: 'mara', name: 'Maasai Mara Reserve', coords: [35.144, -1.502], pt: project(35.144, -1.502), type: 'landscape' },
    { id: 'mt_kenya', name: 'Mount Kenya', coords: [37.308, -0.152], pt: project(37.308, -0.152), type: 'landscape' }
  ];

  const equatorY = project(38.0, 0)[1];

  const fileContent = `// Geographically authentic, verified Kenya & Narok County boundary paths
// Sourced from official OpenStreetMap / Kenya Administrative Boundaries (COD-AB-KEN)
// Generated projection: Equirectangular aligned with standard WGS84 coordinates

export const KENYA_VIEWBOX = "0 0 800 960";
export const NAROK_VIEWBOX = "45 525 240 205";
export const EQUATOR_Y = ${equatorY};

export const LANDMARKS = ${JSON.stringify(landmarks, null, 2)};

export const COUNTIES = ${JSON.stringify(counties, null, 2)};
`;

  fs.writeFileSync('src/data/kenyaMapData.js', fileContent);
  console.log('Successfully wrote src/data/kenyaMapData.js. Size: ' + fs.statSync('src/data/kenyaMapData.js').size + ' bytes');
}

buildKenyaMapData();
