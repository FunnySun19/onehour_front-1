import React from 'react'
import "./imagesPage.css";
import { IoIosArrowBack } from "react-icons/io";
import {HiPlus} from "react-icons/hi"
import { useNavigate} from "react-router-dom";

export default function ImagesPage() {


    const navigate = useNavigate();
    function handleClick() {
        navigate(-1);
      }

  return (
    <div className='ImagesPage-main-div'>

        <form action="">
        <div className='ImagesPage-top-div'>
        <IoIosArrowBack className="ImagesPage-back-icon" onClick={handleClick} />
        <span className="ImagesPage-back-span" onClick={handleClick}>Back</span>
        <h2 className='ImagesPage-h2'>Become a host</h2>
        </div>

        <div className='ImagesPage-center-div'>
        <label className='ImagesPage-label' >Link 1</label>
        <input type="text" name="link" className='ImagesPage-input'/>
        <label className='ImagesPage-label' >Link 2</label>
        <input type="text" name="link" className='ImagesPage-input'/>

        <div className='ImagesPage-link-div'>
        <label className='ImagesPage-label-addLink' >Add link  </label>
        <HiPlus className='ImagesPage-addLink-icon'/>
        </div>

        <div className='ImagesPage-bot-div'>
        <label className='ImagesPage-bot-label'>Upload images somewhere and paste link</label>
        <button className='ImagesPage-btn'>Next step</button>
    
        </div>
        

        </div>

        </form>

    </div>
  )
}
