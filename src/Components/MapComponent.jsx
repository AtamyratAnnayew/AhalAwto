import React from 'react'
import { useRef, useEffect } from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { Marker } from '@react-google-maps/api';

const containerStyle = {
    width: '100%',
    height: '400px'
  };
  
  // Map center coordinates (latitude, longitude)
  const center = {
    lat: 37.95,  // Example: New York City
    lng: 58.38333
  };

  

export default function MapComponent() {
    const mapRef = useRef(null);

  useEffect(() => {
    if (mapRef.current) {
      // Initialize the new AdvancedMarkerElement
      const { AdvancedMarkerElement } = window.google.maps.marker;

      const markerElement = new AdvancedMarkerElement({
        position: center,
        map: mapRef.current,
        title: 'New York City', // Optional: title for the marker
      });
    }
  }, []);
  return (
    <div>
      <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={(map) => (mapRef.current = map)}  // Store the map instance in ref
      >
        {/* Add markers or other map features here */}
      </GoogleMap>
    </LoadScript>
    </div>
  )
}
