import React from "react";
import "./style.css";
import "mapbox-gl/dist/mapbox-gl.css";
import { useState, useEffect } from "react";
import ReactMapGL, { Marker, Popup, NavigationControl } from "react-map-gl";
import spendlikUrl from "./img/spendlik.svg";

/*const mista = [
	{
		id: 1,
		ikonaUrl: spendlikUrl,
		latitude: 50.05872180714727,
		longitude: 14.320820395331165,
	},
	{
		id: 2,
		ikonaUrl: spendlikUrl,
		latitude: 50.05758297186479,
		longitude: 14.324045362741034,
	},
]*/

export const Map = () => {
  const [viewport, setViewport] = useState({
    latitude: 50.05872180714727,
    longitude: 14.320820395331165,
    zoom: 12,
  });
  const [popupOtevren, setPopupOtevren] = useState(null);
  const [mista, setMista] = useState([]);
  const dataUrl =
    "https://sheets.googleapis.com/v4/spreadsheets/1IJoc0OI8JyPvLLJFr_9u45UiiK5EpFMoiJWB12V_2QM?key=AIzaSyDIwamOn-0qkbyAJmujKElLuL5wk_udHNE&includeGridData=true";

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
              latitude: parseFloat(row.values[3].effectiveValue.stringValue.split(', ')[0]),
              longitude: parseFloat(row.values[3].effectiveValue.stringValue.split(', ')[1]),
              url: row.values[4].effectiveValue.stringValue,
              description: row.values[5].effectiveValue.stringValue,

            };
          })
        );
      });
  }, [setMista]);

  console.log(mista)

  return (
    <section className="main--section__map">
      <h1>Psí mapa</h1>
      <ReactMapGL
        {...viewport}
        width="100%"
        height={400}
        onViewportChange={(nextViewport) => setViewport(nextViewport)}
        mapStyle={{
          version: 8,
          sources: {
            "raster-tiles": {
              type: "raster",
              tiles: ["https://mapserver.mapy.cz/base-m/{z}-{x}-{y}"],
              tileSize: 256,
              attribution:
                'Mapové podklady od <a target="_top" rel="noopener" href="https://mapy.cz/">Seznam.cz</a> a <a target="_top" rel="noopener" href="http://openstreetmap.org">OpenStreetMap</a>.',
            },
          },
          layers: [
            {
              id: "simple-tiles",
              type: "raster",
              source: "raster-tiles",
              minzoom: 0,
              maxzoom: 18,
            },
          ],
        }}
      >
        <div className="control">
	        <NavigationControl />
        </div>
        {mista.map((misto, index) => (<Marker
            key={index}
            latitude={misto.latitude}
            longitude={misto.longitude}
            offsetLeft={-15}
            offsetTop={-15}
            onClick={() => setPopupOtevren(misto)}

          >
            <img src={spendlikUrl} width={30} height={30} alt="" />
          </Marker>)
        )}
        {popupOtevren && (
          <Popup
            onClose={() => setPopupOtevren(null)}
            latitude= {popupOtevren.latitude}
            longitude={popupOtevren.longitude}
            offsetTop={-15}
          >
            {popupOtevren.name}
          </Popup>
        )}
      </ReactMapGL>
    </section>
  );
};

export default Map;
