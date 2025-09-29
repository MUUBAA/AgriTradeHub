"use client";

import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";

export function GoogleMap() {
  const position = { lat: 28.6139, lng: 77.2090 }; // Delhi coordinates
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  if (!apiKey) {
    return (
      <div className="flex h-full w-full items-center justify-center rounded-lg bg-muted text-muted-foreground">
        <p>Google Maps API key is missing.</p>
      </div>
    );
  }

  return (
    <APIProvider apiKey={apiKey}>
      <Map
        defaultCenter={position}
        defaultZoom={12}
        gestureHandling={"greedy"}
        disableDefaultUI={true}
        mapId={"b75382348c414454"}
        className="h-full w-full rounded-lg border"
      >
        <Marker position={position} />
      </Map>
    </APIProvider>
  );
}
