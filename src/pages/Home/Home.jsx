import React from "react";
import "./home.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Topbar from "../../components/topbar/Topbar";
import Flat from "../../components/flats/Flat";
import icon from "leaflet/dist/images/marker-icon.png";
import L from "leaflet";
import { useState } from "react";
import { usePaginate } from "../../hooks/usePaginate";
import { Link } from "react-router-dom";

export default function Home() {
  const [params, setParams] = useState({
    offset: 0,
    limit: 10,
    city: "",
  });
  const [data, setData] = useState([]);

  const DefaultIcon = L.icon({
    iconUrl: icon,
    iconSize: [20, 30],

    iconAnchor: [10, 30],
  });

  const LatLong = [44.804, 20.4651];

  const handleScroll = (e) => {
    const { scrollHeight, scrollTop, clientHeight } = e.currentTarget;
    const bottom = Math.abs(scrollHeight - clientHeight - scrollTop) < 10;

    if (bottom) {
      setParams((prev) => {
        const copy = { ...prev };
        copy.offset = copy.offset + copy.limit;
        return copy;
      });
    }
  };
  usePaginate("space/", params, setData);

  return (
    <div className="home-container">
      <Topbar status={"show"} setParams={setParams} setData={setData} />
      <div className="home-content">
        <div className="flat-container">
          <div className="flatwrapper" onScroll={handleScroll}>
            {data && data.map((item) => <Flat key={item.id} item={item} />)}
          </div>
        </div>
        <div className="map-container">
          <MapContainer className="leaflet-map" center={LatLong} zoom={13}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {data &&
              data.map((item) => (
                <Marker
                  key={item.id}
                  position={[item.lat, item.lng]}
                  icon={DefaultIcon}
                >
                  <Popup offset={[0, -30]}>
                    <div className="popup-div">
                      <Link to={`/space/${item.id}`} className="popup-link">
                        <h4 className="popup-h-name">{item.name}</h4>
                      </Link>
                      <span className="popup-span-city">{item.address}</span>
                      <span className="popup-span-price">
                        {item.price + "$ "}per hour
                      </span>
                    </div>
                  </Popup>
                </Marker>
              ))}
          </MapContainer>
        </div>
      </div>
    </div>
  );
}
