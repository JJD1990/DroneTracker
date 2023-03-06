import React from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker.tsx';

const Map = () => {
    const mapOptions = {
      center: { lat: 51.5037, lng: -0.1196 },
      zoom: 14,
    };
  
    const guyMarker = {
      lat: 51.5043,
      lng: -0.0865,
    };
  
    const thomasMarker = {
      lat: 51.4987,
      lng: -0.1173,
    };
  
    return (
      <div style={{ height: '80vh', width: '80%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyC7ZRf8i1l1O1a55IKJLIeDXCZCPA0mWN8" }} // insert your Google Maps API key here
          defaultCenter={mapOptions.center}
          defaultZoom={mapOptions.zoom}
        >
          <Marker lat={guyMarker.lat} lng={guyMarker.lng} name="Guy's Hospital" />
          <Marker lat={thomasMarker.lat} lng={thomasMarker.lng} name="St Thomas' Hospital" />
        </GoogleMapReact>
      </div>
    );
  };
  
//   const Marker = (props) => {
//     return (
//       <div>
//         <img src="https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png" alt="marker" />
//         <p>{props.name}</p>
//       </div>
//     );
//   };
  
  export default Map;