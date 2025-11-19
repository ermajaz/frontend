"use client";

import Map from "./Map";


export default function MapContainer({ destination, isInView }: any) {
  return (
    <Map
      key={destination.id}
      destination={destination}
      isInView={isInView}
    />
  );
}
