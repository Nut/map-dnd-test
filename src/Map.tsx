import React, { useRef, useEffect, useState } from "react";
import maplibregl, { Map as MapLibre } from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import "./map.css";

export default function Map() {
  const mapContainer = useRef(null);
  const map = useRef<MapLibre>();
  const [lng] = useState(139.753);
  const [lat] = useState(35.6844);
  const [zoom] = useState(3);
  //   const [API_KEY] = useState("YOUR_MAPTILER_API_KEY");

  useEffect(() => {
    if (map.current) return;
    map.current = new maplibregl.Map({
      container: mapContainer.current || "",
      style: "https://demotiles.maplibre.org/style.json",
      center: [lng, lat],
      zoom: zoom,
    });
  });

  return (
    <div className="map-wrap">
      <div ref={mapContainer} className="map" />
    </div>
  );
}
