import React from 'react'
import "./addressPage.css";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate} from "react-router-dom";

export default function AddressPage({ setShowPage }) {

    const navigate = useNavigate();
    function handleClick() {
        navigate(-1);
      }

  return (
    <div className='AddressPage-main-div'>
        <form action="">

       
        <div className='AddressPage-top-div'>
        <IoIosArrowBack className="AddressPage-back-icon" onClick={handleClick} />
        <span className="AddressPage-back-span" onClick={handleClick}>Back</span>
        <h2 className='AddressPage-h2'>Become a host</h2>
        </div>

        <div className='AddressPage-center-div'>
        <label className='AddressPage-label' >Country</label>
        <input type="text" name="country" className='AddressPage-input'/>
        <label className='AddressPage-label' >City</label>
        <input type="text" name="city" className='AddressPage-input'/>
        <label className='AddressPage-label'>Address</label>
        <input type="text" name="address" className='AddressPage-input'/>
        <label className='AddressPage-label'>Area</label>
        <input type="text" name="area" className='AddressPage-input' />
        </div>

        <div className="AddressPage-bot-div">

        <div className='AddressPage-label-div'>
        <label className='AddressPage-label-latlng'>Latitude</label>
        <label className='AddressPage-label-latlng'>Longitude</label>
        </div>

        <div className='AddressPage-input-div'>
        <input type="text" name="lat" className='AddressPage-input-latlng'/>
        <input type="text" name="lng" className='AddressPage-input-latlng' />
        </div>

        <button className='AddressPage-btn' onClick={() => setShowPage('ImagesPage')}>Next Step</button>

        </div>
        </form>
    </div>
  )
}
