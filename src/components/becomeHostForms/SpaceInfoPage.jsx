import React from 'react'
import "./spaceInfoPage.css";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate} from "react-router-dom";


export default function SpaceInfoPage() {

    const navigate = useNavigate();
    function handleClick() {
        navigate(-1);
      }

  return (
    <div className='SpaceInfoPage-main-div'>
        <form action="">

        <div className='SpaceInfoPage-top-div'>
        <IoIosArrowBack className="SpaceInfoPage-back-icon" onClick={handleClick} />
        <span className="SpaceInfoPage-back-span" onClick={handleClick}>Back</span>
        <h2 className='SpaceInfoPage-h2'>Space Info</h2>
        </div>

        <div className='SpaceInfoPage-center-div'>
        <label className='SpaceInfoPage-label' >Name</label>
        <input type="text" name="name" className='SpaceInfoPage-input'/>
        <label className='SpaceInfoPage-label' >Space area</label>
        <input type="text" name="area" className='SpaceInfoPage-input'/>
        <label className='SpaceInfoPage-label' >Short description</label>
        <textarea type="text" name="short_desc" className='SpaceInfoPage-textarea1'/>
        <label className='SpaceInfoPage-label' >Detailed description</label>
        <textarea type="text" name="detail_desc" className='SpaceInfoPage-textarea2'/>

        <button className='SpaceInfoPage-btn'>Next step</button>
        </div>


        </form>

    </div>
  )
}
