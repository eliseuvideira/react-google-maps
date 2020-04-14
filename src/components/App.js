import { hot } from 'react-hot-loader/root';
import React, { useState } from 'react';
import Address from './Address';
import Map from './Map';

const DEFAULT_LAT = -22.314459;
const DEFAULT_LNG = -49.0586951;
const DEFAULT_ZOOM = 11;

const App = () => {
  const [lat, setLat] = useState(DEFAULT_LAT);
  const [lng, setLng] = useState(DEFAULT_LNG);
  const [zoom, _setZoom] = useState(DEFAULT_ZOOM);

  const submitAddress = async address => {
    const url = 'https://maps.googleapis.com/maps/api/geocode/json';
    const res = await fetch(
      `${url}?address=${encodeURI(address)}&key=${
        process.env.GOOGLE_MAPS_API_KEY
      }`,
    );
    const data = await res.json();
    const location = data.results[0] ? data.results[0].geometry.location : null;
    if (location) {
      setLat(location.lat);
      setLng(location.lng);
    } else {
      alert('location not found');
    }
  };

  return (
    <div
      className="app"
      style={{
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        width: '100vw',
        height: '100vh',
        alignItems: 'center',
      }}
    >
      <Map
        lat={lat}
        lng={lng}
        apiKey={process.env.GOOGLE_MAPS_API_KEY}
        zoom={zoom}
      />
      <Address submitAddress={submitAddress} />
    </div>
  );
};

export default hot(App);
