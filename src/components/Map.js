import React from 'react';
import PropTypes from 'prop-types';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker';

const Map = ({ lat, lng, apiKey, zoom }) => (
  <div
    style={{
      height: '80vh',
      width: '80vw',
    }}
  >
    <GoogleMapReact
      bootstrapURLKeys={{ key: apiKey }}
      center={{ lat, lng }}
      zoom={zoom}
    >
      <Marker lat={lat} lng={lng} />
    </GoogleMapReact>
  </div>
);

Map.propTypes = {
  lat: PropTypes.number.isRequired,
  lng: PropTypes.number.isRequired,
  apiKey: PropTypes.string.isRequired,
  zoom: PropTypes.number.isRequired,
};

export default Map;
