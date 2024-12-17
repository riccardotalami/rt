import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const MyMap = ({ location, address }) => {
    const position = location; // Latitude, Longitude

    return (
        <MapContainer center={position} zoom={13} scrollWheelZoom={false} style={{ height: "250px", width: "100%", marginBottom: "1rem" }}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
                <Popup>
                    {address}
                </Popup>
            </Marker>
        </MapContainer>
    );
};

export default MyMap;