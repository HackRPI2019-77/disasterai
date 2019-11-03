 /* global google */
import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Button from '@material-ui/core/Button';
const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
class Map extends Component {
  static defaultProps = {
    center: {
      lat: 18.2208,
      lng: -66.5901
    },
    zoom: 10
  };

    constructor(props) {
        super(props)
        this.state = {
            heatmapVisible: true,
            heatmapPoints: [
                {lat: 18.2208, lng: -66.5901},
                        //{lat: 59.96, lng: 30.32}
            ]
        }
    }

    onMapClick({x, y, lat, lng, event}) {
        if (!this.state.heatmapVisible) {
          return
        }
        
          this.setState({
              heatmapPoints: [ ...this.state.heatmapPoints, {lat, lng}]
          })
        if (this._googleMap !== undefined) {      
          const point = new google.maps.LatLng(lat, lng)
          this._googleMap.heatmap.data.push(point)
        }
    }

    toggleHeatMap() {    
        this.setState({
          heatmapVisible: !this.state.heatmapVisible
        }, () => {
          if (this._googleMap !== undefined) {
            this._googleMap.heatmap.setMap(this.state.heatmapVisible ? this._googleMap.map_ : null)
          }      
        })
    }
 
    render() {
        const apiKey = { key: "AIzaSyBP4bUerInEVvjocWF2AR_UVe59JqzK1fs" }
        const heatMapData = {
            positions: this.state.heatmapPoints,
            options: {
                radius: 20,
                opacity: 0.6
            }
        }
        console.log(this.state)
        return (
        // Important! Always set the container height explicitly
        <div style={{ height: '100vh', width: '100%' }}>
            <GoogleMapReact
                ref={(el) => this._googleMap = el}
                bootstrapURLKeys={apiKey}
                defaultCenter={this.props.center}
                defaultZoom={this.props.zoom}
                heatmapLibrary={true}          
                heatmap={heatMapData}          
                onClick={this.onMapClick.bind(this)}
            >
            {/* <AnyReactComponent
                lat={18.2208}
                lng={-66.5901}
                //text="My Marker"
            /> */}
            </GoogleMapReact>
            <Button
                className='toggleButton'
                color='inherit'
                justify='flex-end'
                onClick={this.toggleHeatMap.bind(this)}
            >
            Toggle heatmap
            </Button>
        </div>
        );
    }
}
 
export default Map;