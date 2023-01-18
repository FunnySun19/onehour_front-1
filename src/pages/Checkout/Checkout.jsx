import "./checkout.css"
import Topbar from '../../components/topbar/Topbar'
import {IoIosArrowBack} from "react-icons/io"
import { DatePicker } from 'antd';
import { MapContainer, TileLayer, } from 'react-leaflet';
import { useNavigate } from 'react-router-dom';
import moment from "moment";

export default function () {
    
    const navigate = useNavigate();
    
    function handleClick(){
       navigate(-1);
    }

    const { RangePicker } = DatePicker;
  
    const onChangeRange = (dates, dateStrings) => {
      if (dates) {
          console.log(encodeURIComponent(moment(dateStrings[0], 'DD/MM/YYYY HH').format()));
          console.log(encodeURIComponent(moment(dateStrings[1], 'DD/MM/YYYY HH').format()))
      } else {
          console.log(null);
          console.log(null);
      }
    }

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
                <span className="cost-span">Total Cost: <span className="price-span">1500$</span></span>
                <span className="price-per-day-span">300$ x 5 days</span>
                <button className="confirm-btn" type="submit" >Book Now</button>
            </div>
            <div className="checkout-right">
                <h4 className="description-h4">Description</h4>
                <p>
                Lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lore <br />
                Lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lore<br />
                Lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lore
                </p>
                <h4 className="address-h4">Address</h4>
                <p className="address-p">Gavrila Principa 60, Krusevac Srbija</p>
            <MapContainer  className='checkout-map' center={[44.804,20.4651]} zoom={13}>
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                </MapContainer>
            </div>
            </div>
        </div>
   
  )
}
