// src/components/MapView.tsx
import React, { useEffect } from "react";
import {
  MapContainer,
  TileLayer,
  WMSTileLayer,
  useMap,
} from "react-leaflet";
import L from "leaflet";
import { useApp } from "../context/AppContext";

function ZoomControls() {
  const map = useMap();

  return (
    <div
      className="absolute right-6 bottom-36 z-[1000] flex flex-col gap-3"
      data-testid="zoom-controls"
    >
      <button
        className="bg-white w-10 h-10 rounded-xl shadow flex items-center justify-center text-xl"
        onClick={() => map.zoomIn()}
      >
        +
      </button>

      <button
        className="bg-white w-10 h-10 rounded-xl shadow flex items-center justify-center text-xl"
        onClick={() => map.zoomOut()}
      >
        −
      </button>
    </div>
  );
}

function ScaleBar() {
  const map = useMap();
  useEffect(() => {
    const scale = L.control.scale({ metric: true });
    scale.addTo(map);
    return () => scale.remove();
  }, [map]);
  return null;
}

export default function MapView() {
  const { layerVisible } = useApp();

  return (
    <div className="w-full h-full relative">
      <MapContainer
        center={[50.9, 7.1]}
        zoom={12}
        zoomControl={false}
        className="w-full h-full"
      >
        {/* Figma-style CARTOGRAPHIC BASE */}
        <TileLayer
          url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}.png"
          zIndex={1}
        />

        {/* SATELLITE WMS OVERLAY */}
        {layerVisible && (
          <WMSTileLayer
            url="https://www.wms.nrw.de/geobasis/wms_nw_dop"
            params={{ layers: "nw_dop_rgb", format: "image/png", transparent: true }}
            opacity={0.45}
            className="wms-overlay"
            zIndex={5}
          />
        )}

        {/* LABEL-ONLY LAYER ON TOP */}
        <TileLayer
          url="https://tiles.stadiamaps.com/tiles/alidade_smooth_labels/{z}/{x}/{y}.png"
          zIndex={20}
        />

        <ZoomControls />
        <ScaleBar />
      </MapContainer>
    </div>
  );
}

// // src/components/MapView.tsx
// import React, { useEffect } from "react";
// import {
//   MapContainer,
//   TileLayer,
//   WMSTileLayer,
//   useMap,
//   useMapEvent,
// } from "react-leaflet";
// import L from "leaflet";
// import { useApp } from "../context/AppContext";

// function InnerZoomControls() {
//   const map = useMap();

//   return (
//     <div
//       className="absolute right-6 bottom-36 z-[1000] flex flex-col gap-3"
//       data-testid="zoom-controls"
//     >
//       <button className="bg-white h-10 w-10 rounded-lg shadow" onClick={() => map.zoomIn()}>+</button>
//       <button className="bg-white h-10 w-10 rounded-lg shadow" onClick={() => map.zoomOut()}>−</button>
//     </div>
//   );
// }

// function ScaleControl() {
//   const map = useMap();
//   useEffect(() => {
//     const scale = L.control.scale({ metric: true, imperial: false });
//     scale.addTo(map);
//     return () => scale.remove();
//   }, [map]);
//   return null;
// }

// export default function MapView() {
//   const { layerVisible } = useApp();
//   const center: [number, number] = [50.9, 7.1];

//   return (
//     <div className="w-full h-full relative" id="map">
//       <MapContainer center={center} zoom={12} zoomControl={false} className="w-full h-full">

//         {/* Base Map (Figma style: cartographic) */}
//        {/* Base Figma-style map */}
// <TileLayer
//   url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}.png"
//   attribution="&copy; Stadia Maps & OpenStreetMap contributors"
//   zIndex={1}
// />

// {/* Satellite WMS */}
// {layerVisible && (
//   <WMSTileLayer
//     url="https://www.wms.nrw.de/geobasis/wms_nw_dop"
//     params={{ layers: "nw_dop_rgb", format: "image/png", transparent: true }}
//     opacity={0.65}
//     className="wms-overlay"
//     zIndex={5}
//   />
// )}

// {/* Labels-only layer on top ALWAYS */}
// <TileLayer
//   url="https://tiles.stadiamaps.com/tiles/alidade_smooth_labels/{z}/{x}/{y}.png"
//   attribution="&copy; Stadia Maps & OpenStreetMap contributors"
//   zIndex={1000}
// />

//         <InnerZoomControls />
//         <ScaleControl />
//       </MapContainer>
//     </div>
//   );
// }
