import React from 'react'
import "./reservationInfoPage.css";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate} from "react-router-dom";

export default function ReservationInfoPage() {

    const navigate = useNavigate();
    function handleClick() {
        navigate(-1);
      }

  return (
    <div className='ReservationInfoPage-main-div'>

    <form action="">
        <div className='ReservationInfoPage-top-div'>
        <IoIosArrowBack className="ReservationInfoPage-back-icon" onClick={handleClick} />
        <span className="ReservationInfoPage-back-span" onClick={handleClick}>Back</span>
        <h2 className='ReservationInfoPage-h2'>Reservation Info</h2>
        </div>

        <div className='ReservationInfoPage-center-div'>
        <label className='ReservationInfoPage-label' >Price for one hour</label>
        <input type="text" name="price" className='SpaceInfoPage-input'/>
        </div>
        <div className="ReservationInfoPage-bot-div">

        <div className='ReservationInfoPage-label-div'>
        <label className='ReservationInfoPage-label-available'>Available from</label>
        <label className='ReservationInfoPage-label-available'>Available to</label>
        </div>

        <div className='ReservationInfoPage-input-div'>
        <input type="text" name="available_from" className='ReservationInfoPage-input-available'/>
        <input type="text" name="available_to" className='ReservationInfoPage-input-available' />
        </div>

        <button className='ReservationInfoPage-btn'>Finish</button>
        </div>
    </form>

    </div>
  )
}
