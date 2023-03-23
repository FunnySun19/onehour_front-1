import './apartment.css';
import Topbar from '../../components/topbar/Topbar';
import ApartmentImg from '../../assets/img/apartment.jpg';
import SimpleImageSlider from 'react-simple-image-slider';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getSpacesById } from '../../features/backendRoutes/spaceSlice';
import { useParams } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


export default function Apartment() {
  

  const dispatch = useDispatch();
  const { params } = useParams();
  const {singleSpace} = useSelector(state=>state.space)
  console.log(singleSpace);
  useEffect(() => {
    dispatch(getSpacesById(params))

  }, []);


  const navigate = useNavigate();

  function handleClick() {
    navigate(-1);
  }


  return (
    <div className='apartment-div'>
      <Topbar status={'hide'} />
      <div className='aprtment-left-top'>
            <IoIosArrowBack
              className='back-icon-apartment'
              onClick={handleClick}
            />
            <span className='back-span-apartment' onClick={handleClick}>
              Back
            </span>
          </div>
      <div className='apartment-container'>
        
        <div className='apartment-left'>
         

          {singleSpace ? (
            <SimpleImageSlider
              width={794}
              height={503}
              images={[singleSpace.image_urls]}
              showBullets={true}
              showNavs={true}
              autoPlay={true}
            />
          ) : null}
        </div>
        <div className='apartment-right'>
          {singleSpace ? (
            <div key={singleSpace.id}>
              <h3 className='apratment-h3'>{singleSpace.name}</h3>
              <p className='apartment-desc'>City:{singleSpace.city}</p>
              <p className='apartment-desc'>Country:{singleSpace.country}</p>
              <p className='apartment-desc'>{singleSpace.address}</p>
              <p className='apartment-description'>
              {singleSpace.detailed_description}
              </p>
            </div>
          ) : null}
         
             
             <div className="apartment-right-bot">
              <div>

             {singleSpace ?(
               <span className="apartment-price">{singleSpace.price}$ </span>
               ) : null}
             <span className="perNight-span">per hour</span>
               </div>
             {/* <div className="date-wrapper">
             <RangePicker
                size="large"
                style={{border:"2px solid #AB3B61"}} 
                className="apartment-date"
                renderExtraFooter={() => 'Press OK to confirm'}
                format='DD/MM/YYYY HH:00'
                showTime={{ format: 'HH' }}
                onChange={onChangeRange}
              />
              <Select
                bordered={false}
                style={{
                  border: '2px solid #AB3B61',
                  borderRadius: '5px',
                  inline: 'none',
                }}
                className='select-people'
                placeholder='Number or people'
              />
            </div> */}
            <Link to={`/checkout/${params}`} style={{ textDecoration: 'none' }}>
              <button className='book-now-btn'>Book now !</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
