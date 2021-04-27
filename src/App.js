import React from 'react';
import './App.css';
import { MapContainer, TileLayer } from 'react-leaflet';
import Heatmap from './heatMap';

function App() {
  return (
    <div className="App">
      <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css" 
        integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A==" 
        crossOrigin=""/>
      <script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"
        integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA=="
        crossOrigin=""></script>
      <script src="./leaflet-heat.js"
        crossOrigin=""></script>
      <header className="App-header">
          <MapContainer center={[37.3422,-2.0399]} zoom={3} scrollWheelZoom={true} id="mainmap">
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Heatmap addressPoints={[]}/>
          </MapContainer>
      </header>
    </div>
  );
}

export default App;
