import React from 'react';
import './style.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import { useState } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import spendlikUrl from './img/spendlik.svg';

export const Map = () => {
  const [viewport, setViewport] = useState({
    latitude: 50.03213575581375,
    longitude: 14.5193442555677,
    zoom: 15,
  });
  const [popupOtevren, setPopupOtevren] = useState(false);
  return (
    <>
      <h1>Psí mapa</h1>
      <ReactMapGL
        {...viewport}
        width="100%"
        height={400}
        onViewportChange={(nextViewport) => setViewport(nextViewport)}
        mapStyle={{
          version: 8,
          sources: {
            'raster-tiles': {
              type: 'raster',
              tiles: ['https://mapserver.mapy.cz/base-m/{z}-{x}-{y}'],
              tileSize: 256,
              attribution:
                'Mapové podklady od <a target="_top" rel="noopener" href="https://mapy.cz/">Seznam.cz</a> a <a target="_top" rel="noopener" href="http://openstreetmap.org">OpenStreetMap</a>.',
            },
          },
          layers: [
            {
              id: 'simple-tiles',
              type: 'raster',
              source: 'raster-tiles',
              minzoom: 0,
              maxzoom: 18,
            },
          ],
        }}
      >
        <Marker
          latitude={50.03213575581375}
          longitude={14.5193442555677}
          offsetLeft={-25}
          offsetTop={-50}
        >
          <button
            className="marker-button"
            onClick={() => setPopupOtevren(true)}
          >
            <img src={spendlikUrl} width={50} height={50} alt="veterina" />
          </button>
        </Marker>
        {popupOtevren && (
          <Popup
            onClose={() => setPopupOtevren(false)}
            latitude={50.03213575581375}
            longitude={14.5193442555677}
            offsetTop={-50}
          >
            Regia Vet
          </Popup>
        )}
      </ReactMapGL>
    </>
  );
};

export default Map;
