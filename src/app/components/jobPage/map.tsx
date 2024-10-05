"use client";

import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";

// Documentation for this component can be found at:
// /docs/components_&_pages/job_page.md

interface Props {
  lon: string;
  lat: string;
}

const MapAndPin = ({ lon, lat }: Props) => {
  const position: [number, number] = [parseFloat(lat), parseFloat(lon)];

  const CustomIcon = new Icon({
    iconUrl:
      "data:image/svg+xml;utf8," +
      encodeURIComponent(`
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24">
        <path fill="red" d="M12 2C8.13 2 5 5.13 5 9c0 4 7 13 7 13s7-9 7-13c0-3.87-3.13-7-7-7zm0 19c-1.1 0-2-.9-2-2h4c0 1.1-.9 2-2 2z"/>
        <circle cx="12" cy="9" r="3" fill="white" />
      </svg>
    `),
    iconSize: [20, 20],
  });

  return (
    <div className="flex justify-center">
      <MapContainer
        center={position}
        zoom={10}
        className="h-96 w-full m-1 border-[1px] border-black rounded-md md:w-10/12">
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker
          position={position}
          icon={CustomIcon}
        />
      </MapContainer>
    </div>
  );
};

export default MapAndPin;
