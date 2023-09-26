import { useRef, memo, type FunctionComponent } from 'react';
// https://github.com/vasturiano/react-globe.gl
import Globe from 'react-globe.gl';
import * as THREE from 'three';

import goeJson from '../utils/ne_110m_admin_0_countries.geojson.json';

interface GlobeAllCitiesProps {
  data: any;
}

const GlobeAllCities: FunctionComponent<GlobeAllCitiesProps> = memo(({ data }) => {
  const globeEl = useRef<any>();

  const globeReady = () => {
    if (globeEl.current) {
      globeEl.current.controls().autoRotate = true;
      globeEl.current.controls().enableZoom = false;

      globeEl.current.pointOfView({
        lat: 19.054339351561637,
        lng: -50.421161072148465,
        altitude: 2,
      });
    }
  };

  const points = data.map((data) => {
    const { latitude, longitude, total } = data;
    return {
      lat: latitude,
      lng: longitude,
      altitude: total / 50,
      radius: 0.3,
      color: '#ff6090',
    };
  });

  return (
    <div className='relative rounded border border-brand-outline bg-brand-surface/40 cursor-move'>
      <div className='flex justify-center overflow-hidden'>
        <Globe
          ref={globeEl}
          onGlobeReady={globeReady}
          width={380}
          height={434}
          rendererConfig={{ antialias: true, alpha: true }}
          animateIn={true}
          backgroundColor={'rgba(255, 255, 255, 0)'}
          globeMaterial={
            new THREE.MeshPhongMaterial({
              color: '#120f30',
              opacity: 0.7,
              transparent: true,
            })
          }
          customLayerData={[...Array(500).keys()].map(() => ({
            lat: (Math.random() - 0.5) * 180,
            lng: (Math.random() - 0.5) * 360,
            alt: Math.random() * 1.4 + 0.1,
          }))}
          customThreeObject={() =>
            new THREE.Mesh(
              new THREE.SphereGeometry(0.3),
              new THREE.MeshBasicMaterial({
                color: '#6f69a7',
                opacity: 0.9,
                transparent: true,
              })
            )
          }
          customThreeObjectUpdate={(obj, d: any) => {
            Object.assign(obj.position, globeEl.current?.getCoords(d.lat, d.lng, d.alt));
          }}
          atmosphereColor='#655ea0'
          hexPolygonsData={goeJson.features}
          hexPolygonResolution={3}
          hexPolygonMargin={0.4}
          hexPolygonColor={(geometry: any) => {
            return ['#2a2469', '#322a7a', '#3d338e', '#423b8f'][geometry.properties.abbrev_len % 4];
          }}
          showGraticules={true}
          pointsData={points}
          pointAltitude='altitude'
          pointRadius='radius'
          pointColor='color'
        />
      </div>
    </div>
  );
});

export default GlobeAllCities;