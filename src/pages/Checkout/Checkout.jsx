import "./checkout.css"
import Topbar from '../../components/topbar/Topbar'
import {IoIosArrowBack} from "react-icons/io"
import { DatePicker } from 'antd';
import { MapContainer, TileLayer, Marker,Popup} from 'react-leaflet';
import { useNavigate } from 'react-router-dom';
import moment from "moment";
import { useSelector } from 'react-redux';
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import L from "leaflet";
import { useState } from 'react';

export default function () {
  const [days, setDays] = useState(0);
  const [dateFrom, setDateFrom] = useState(null);
  const [dateTo, setDateTo] = useState(null);

    const space = useSelector(state => state.space.singleSpace);
    console.log(space)


    const navigate = useNavigate();
    
    function handleClick(){
       navigate(-1);
    }

    const { RangePicker } = DatePicker;
  
    const onChangeRange = (dates, dateStrings) => {
      if (dates) {
          setDateFrom(encodeURIComponent(moment(dateStrings[0], 'DD/MM/YYYY HH').format()));
          setDateTo(encodeURIComponent(moment(dateStrings[1], 'DD/MM/YYYY HH').format()));
          let date_from = new Date(moment(dateStrings[0], 'DD.MM.YYYY').format('YYYY, MM, DD'));
          let date_to = new Date(moment(dateStrings[1], 'DD.MM.YYYY').format('YYYY, MM, DD'));
          function diffDates(date_to, date_from) {
            return (date_from - date_to) / (60 * 60 *24 * 1000);
        };
        setDays(diffDates(date_from, date_to));

      } else {
          console.log(null);
          console.log(null);
      }
    }

    const DefaultIcon = L.icon({
        iconUrl: icon,
        shadowUrl: iconShadow,
      });

    const totalCost = space.price*days;

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
                <RangePicker
                size="large"
                className="chechkout-date"
                renderExtraFooter={() => 'Press OK to confirm'}
                format="DD/MM/YYYY HH:00" 
                showTime={{ format: "HH"}}
                onChange={onChangeRange} />
                </div>
                <span className="surename-span">Surname</span>
                <input type="text" className="surename-input" required/>
                <span className="name-span">Name</span>
                <input type="text" className="name-input" required/>
                <span className="phone-span">Phone Number</span>
                <input type="text" className="phone-input" required/>
                <span className="email-span">Email</span>
                <input type="email" className="email-input" required/>
                <span className="cost-span">Total Cost: <span className="price-span">{totalCost}$</span></span>
                <span className="price-per-day-span">{space.price}$ x {days} days</span>
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
