import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const mapStyles = {
  width: '80%',
  height: '50%'
};

export class MapContainer extends Component {
    render() {
        return (
          <Map
            google={this.props.google}
            zoom={5}
            style={mapStyles}
            initialCenter={{
             lat: parseFloat(this.props.coordinate[1]),
             lng: parseFloat(this.props.coordinate[0]),
            }}
          >
          <Marker
            position={{
              lat: parseFloat(this.props.coordinate[1]),
              lng: parseFloat(this.props.coordinate[0])
            }}
          />
          </Map>

        );
      }    
}

export default GoogleApiWrapper(
  (props) => ({
    apiKey: 'AIzaSyBSYa5lOrekOzHpfmqH_qFdC9Z_f9a3uBM',
    props
  })
)(MapContainer);