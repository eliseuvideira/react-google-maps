import { hot } from 'react-hot-loader/root';
import React from 'react';
import Address from './Address';
import Map from './Map';

const App = () => (
  <div className="app">
    <Map />
    <Address />
  </div>
);

export default hot(App);
