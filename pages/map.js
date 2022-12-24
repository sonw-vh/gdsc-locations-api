import React from 'react';
import { Marker } from 'google-maps-react';
import GoogleMapReact from 'google-maps-react';

const LocationMarker = ({ location }) => {
  return (
    <Marker
      key={location.id}
      position={{ lat: location.lat, lng: location.lng }}
    />
  );
};

const Map = ({ locations }) => {
  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: YOUR_API_KEY }}
        defaultCenter={{ lat: 0, lng: 0 }}
        defaultZoom={10}
      >
        {locations.map(location => (
          <LocationMarker key={location.id} location={location} />
        ))}
      </GoogleMapReact>
    </div>
  );
};

export default Map;