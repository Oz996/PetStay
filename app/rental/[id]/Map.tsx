"use client";

import { Rental } from "@/types/types";
import { Loader } from "@googlemaps/js-api-loader";
import React, { useEffect } from "react";

interface props {
  rental: Rental;
}

const Map = ({ rental }: props) => {
  const mapRef = React.useRef(null);

  useEffect(() => {
    const initMap = async () => {
      const loader = new Loader({
        apiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY as string,
        version: "weekly",
      });

      const { Map } = await loader.importLibrary("maps");
      const { Marker } = await loader.importLibrary("marker");
      const position = {
        lat: rental.latitude,
        lng: rental.longitude,
      };

      const mapOptions: google.maps.MapOptions = {
        center: position,
        zoom: 14,
        mapId: "PETSTAY_MAP",
      };

      const map = new Map(mapRef.current, mapOptions);

      const marker = new Marker({
        map,
        position,
      });
    };

    initMap();
  }, []);

  return <div className="h-[27rem] w-full rounded-xl" ref={mapRef}></div>;
};

export default Map;
