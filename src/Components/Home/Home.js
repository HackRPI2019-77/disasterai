import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
 
const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
class Map extends Component {
  static defaultProps = {
    center: {
      lat: 18.2208,
      lng: -66.5901
    },
    zoom: 10
  };
 
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyBP4bUerInEVvjocWF2AR_UVe59JqzK1fs" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={18.2208}
            lng={-66.5901}
            //text="My Marker"
          />
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default Map;