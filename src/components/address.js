import React, { Component } from 'react'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarker, faEnvelope, faPhoneSquare } from '@fortawesome/free-solid-svg-icons'

import '../style/address.css'

class Address extends React.Component {
    constructor() {
        super()
        this.state = {
            lat: 48.8907916,
            lng: 8.6917183,
            zoom: 15
        }
    }

    render() {
        const position = [this.state.lat, this.state.lng];
        return (
            <div>
                <link rel="stylesheet" href="https://unpkg.com/leaflet@1.4.0/dist/leaflet.css"
                    integrity="sha512-puBpdR0798OZvTTbP4A8Ix/l+A4dHDD0DGqYW6RQ+9jxkRFclaxxQb/SJAWZfWAkuyeQUytO7+7N4QKrDh+drA=="
                    crossOrigin=""/>
                <Map style={{ width: '100%', height: '600px' }} center={position} zoom={this.state.zoom}>
                    <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
                    />
                    <Marker position={position}>
                        <Popup>
                            Evangelisch Freie Gemeinde<br />
                            Zerrenerstraße 53, Pforzheim
                        </Popup>
                    </Marker>
                </Map>
                <div className="Container AddressContent" style={
                    {
                        position: 'relative',
                        top: '-150px',
                        backgroundColor: '#fff',
                        paddingTop: '20px',
                        zIndex: 1111
                    }
                }>

                    <h3>Evangelisch Freie Gemeinde</h3>

                    <div class="AddressAddress">
                        <span>
                            <i><FontAwesomeIcon icon={faMapMarker} /></i>
                            Zerrenerstraße 53 <br/>
                            75172 Pforzheim
                        </span>
                        
                    </div>

                    <div class="AddressContact">
                        <span>
                            <i><FontAwesomeIcon icon={faPhoneSquare} /></i>
                            07231/480256 oder 0160/95762453
                        </span>
                        <span>
                            <i><FontAwesomeIcon icon={faEnvelope} /></i>
                            info@ev-freie-gemeinde.de
                        </span>
                    </div>


                
                </div>

            </div>
        );
    }
}

export default Address