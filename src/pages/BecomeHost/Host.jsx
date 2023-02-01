import React from 'react'
import "./host.css";
import Topbar from "../../components/topbar/Topbar";
import AddressPage from '../../components/becomeHostForms/AddressPage';
import ImagesPage from '../../components/becomeHostForms/ImagesPage';
import SpaceInfoPage from '../../components/becomeHostForms/SpaceInfoPage';
import ReservationInfoPage from '../../components/becomeHostForms/ReservationInfoPage';
import FinishPage from '../../components/becomeHostForms/FinishPage';

export default function Host() {
  return (
    
    <div className='main-host-div'>
    <Topbar />
     <AddressPage/>
    {/* <ImagesPage/>
    <SpaceInfoPage/>
    <ReservationInfoPage/> 
    <FinishPage/> */}
    </div>
  )
}
