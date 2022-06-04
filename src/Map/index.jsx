import React from 'react';
import './style.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import { useState, useEffect, useRef } from 'react';
import ReactMapGL, {
  Marker,
  Popup,
  NavigationControl,
  WebMercatorViewport,
} from 'react-map-gl';
import spendlikUrl from './img/spendlik.svg';
import cx from 'classnames';
import { useSize } from 'react-hook-size';

const applyToArray = (func, array) => func.apply(Math, array);

export const Map = () => {
  const [viewport, setViewport] = useState({
    latitude: 50.03372651009443,
    longitude: 14.595659182553074,
    zoom: 8,
  });

  const [popupOtevren, setPopupOtevren] = useState(null);
  const [mista, setMista] = useState([]);
  const [filter, setFilter] = useState({
    veterina: true,
    nonstop: true,
    zachranka: true,
    cvicak: true,
    hotel: true,
  });
  const emptyFilter = {
    veterina: false,
    nonstop: false,
    zachranka: false,
    cvicak: false,
    hotel: false,
  };

  const dataUrl =
    'https://sheets.googleapis.com/v4/spreadsheets/1IJoc0OI8JyPvLLJFr_9u45UiiK5EpFMoiJWB12V_2QM?key=AIzaSyDIwamOn-0qkbyAJmujKElLuL5wk_udHNE&includeGridData=true';

  useEffect(() => {
    fetch(`${dataUrl}`)
      .then((response) => response.json())
      .then((data) => {
        setMista(
          data.sheets[0].data[0].rowData.slice(1).map((row) => {
            return {
              name: row.values[0].effectiveValue.stringValue,
              type: row.values[1].effectiveValue.stringValue,
              address: row.values[2].effectiveValue.stringValue,
              latitude: parseFloat(
                row.values[3].effectiveValue.stringValue.split(', ')[0],
              ),
              longitude: parseFloat(
                row.values[3].effectiveValue.stringValue.split(', ')[1],
              ),
              url: row.values[4].effectiveValue.stringValue,
              description: row.values[5].effectiveValue.stringValue,
            };
          }),
        );
      });
  }, [setMista]);

  const mapRef = useRef();
  const mapContainerRef = useRef(null);

  const { width, height } = useSize(mapContainerRef);

  useEffect(() => {
    if (mista.length === 0) return;

    const pointsLong = mista.map((misto) => misto.longitude);
    const pointsLat = mista.map((misto) => misto.latitude);

    const cornersLongLat = [
      [applyToArray(Math.min, pointsLong), applyToArray(Math.min, pointsLat)],
      [applyToArray(Math.max, pointsLong), applyToArray(Math.max, pointsLat)],
    ];

    if (mapRef.current && width && height) {
      const viewport = new WebMercatorViewport({ width, height }).fitBounds(
        cornersLongLat,
        { padding: 35 },
      );
      const { longitude, latitude, zoom } = viewport;
      setViewport({ longitude, latitude, zoom });
    }
  }, [mista, width, height]);

  return (
    <section className="main--section__map">
      <div className="map-btns">
        <button
          onClick={() =>
            setFilter({
              veterina: true,
              nonstop: true,
              zachranka: true,
              cvicak: true,
              hotel: true,
            })
          }
          className={
            filter.zachranka &&
            filter.hotel &&
            filter.nonstop &&
            filter.cvicak &&
            filter.veterina
              ? 'btn-all isActive'
              : 'btn-all'
          }
        >
          Vše
        </button>
        <button
          onClick={() => setFilter({ ...emptyFilter, veterina: true })}
          className={filter.veterina ? 'btn-veterina isActive' : 'btn-veterina'}
        >
          veterina
        </button>
        <button
          onClick={() => setFilter({ ...emptyFilter, nonstop: true })}
          className={filter.nonstop ? 'btn-nonstop isActive' : 'btn-nonstop'}
        >
          nonstop veterina
        </button>
        <button
          onClick={() => setFilter({ ...emptyFilter, zachranka: true })}
          className={
            filter.zachranka ? 'btn-zachranka isActive' : 'btn-zachranka'
          }
        >
          {' '}
          zvířecí záchranka
        </button>
        <button
          onClick={() => setFilter({ ...emptyFilter, cvicak: true })}
          className={filter.cvicak ? 'btn-cvicak isActive' : 'btn-cvicak'}
        >
          cvičák
        </button>
        <button
          onClick={() => setFilter({ ...emptyFilter, hotel: true })}
          className={filter.hotel ? 'btn-hotel isActive' : 'btn-hotel'}
        >
          psí hotel
        </button>
      </div>
      <div ref={mapContainerRef}>
        <ReactMapGL
          {...viewport}
          ref={mapRef}
          width="100%"
          height="60vh"
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
          <div className="control">
            <NavigationControl />
          </div>
          {mista
            .filter((misto) => {
              const cvicak = misto.type.includes('cvicak');
              const hotel = misto.type.includes('hotel');
              const nonstop = misto.type.includes('nonstop');
              const zachranka = misto.type.includes('zachranka');
              const veterina = misto.type.includes('veterina');

              let pass = false;

              if (filter.cvicak) {
                pass = pass || cvicak;
              }
              if (filter.hotel) {
                pass = pass || hotel;
              }
              if (filter.nonstop) {
                pass = pass || nonstop;
              }
              if (filter.zachranka) {
                pass = pass || zachranka;
              }
              if (filter.veterina) {
                pass = pass || veterina;
              }
              return pass;
            })
            .map((misto, index) => {
              const cvicak = misto.type.includes('cvicak');
              const hotel = misto.type.includes('hotel');
              const nonstop = misto.type.includes('nonstop');
              const zachranka = misto.type.includes('zachranka');
              const veterina = misto.type.includes('veterina');
              return (
                <Marker
                  key={index}
                  latitude={misto.latitude}
                  longitude={misto.longitude}
                  offsetLeft={-15}
                  offsetTop={-15}
                  onClick={() => setPopupOtevren(misto)}
                  className={cx({
                    'type-cvicak': cvicak,
                    'type-hotel': hotel,
                    'type-nonstop': nonstop,
                    'type-zachranka': zachranka,
                    'type-veterina': veterina,
                  })}
                >
                  <img src={spendlikUrl} width={30} height={30} alt="" />
                </Marker>
              );
            })}
          {popupOtevren && (
            <Popup
              onClose={() => setPopupOtevren(null)}
              latitude={popupOtevren.latitude}
              longitude={popupOtevren.longitude}
              offsetTop={-15}
            >
              <a href={popupOtevren.url} target="_blank">
                {popupOtevren.name}
              </a>

              <br />
              {popupOtevren.description}
            </Popup>
          )}
        </ReactMapGL>
      </div>
    </section>
  );
};

export default Map;
