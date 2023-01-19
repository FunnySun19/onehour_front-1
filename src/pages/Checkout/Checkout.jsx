import "./checkout.css"
import Topbar from '../../components/topbar/Topbar'
import {IoIosArrowBack} from "react-icons/io"
import { DatePicker } from 'antd';
import { MapContainer, TileLayer, Marker,Popup} from 'react-leaflet';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import L from "leaflet";


export default function () {

    const space = useSelector(state => state.space.singleSpace);
    console.log(space)


    const navigate = useNavigate();
    
    function handleClick(){
       navigate(-1);
    }

    const DefaultIcon = L.icon({
        iconUrl: icon,
        shadowUrl: iconShadow,
      });

  return (
    <div className="checkout-div">
        <Topbar/>
            <div className="checkout-top">
                <IoIosArrowBack className="back-icon" onClick={handleClick}/>
                <span className="back-span" onClick={handleClick}>Back</span>
                <h2 className="checkout-h2">Confirmation and payment</h2>
            </div>
            <div className="checkout-wrapper">
            <div className="checkout-left">
                <span className="booking-period-span">Booking period</span>
                <div className="booking-period-div">
                <DatePicker className='chechkout-arrive-date' />
                <DatePicker className='checkout-leave-date' />
                </div>
                <span className="surename-span">Surname</span>
                <input type="text" className="surename-input" required/>
                <span className="name-span">Name</span>
                <input type="text" className="name-input" required/>
                <span className="phone-span">Phone Number</span>
                <input type="text" className="phone-input" required/>
                <span className="email-span">Email</span>
                <input type="email" className="email-input" required/>
                <span className="cost-span">Total Cost: <span className="price-span">1500$</span></span>
                <span className="price-per-day-span">300$ x 5 days</span>
                <button className="confirm-btn" type="submit" >Book Now</button>
            </div>
            <div className="checkout-right">
                <h4 className="description-h4">Description</h4>
                <p>{space.detailed_description}</p>
                <h4 className="address-h4">Address</h4>
                <p className="address-p">{space.address}</p>
            <MapContainer  className='checkout-map' center={[44.804,20.4651]} zoom={13}>
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker
                  key={space.id}
                  position={[space.lat, space.lng]}
                  icon={DefaultIcon}
                >
                  <Popup >
                     {space.name} 
                    </Popup>
                </Marker>
                </MapContainer>
            </div>
            </div>
        </div>
   
  )
}
