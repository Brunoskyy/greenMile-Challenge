import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
  width: '80%',
  height: '50%'
};

export class MapContainer extends Component {
    render() {
        return (
          <Map
            google={this.props.google}
            zoom={14}
            style={mapStyles}
            initialCenter={{
             lat: 49.2819,
             lng: -123.11874
            }}
          />
        );
      }    
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyBSYa5lOrekOzHpfmqH_qFdC9Z_f9a3uBM'
  })(MapContainer);