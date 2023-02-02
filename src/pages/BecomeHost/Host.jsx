import React from 'react'
import "./host.css";
import { useState } from 'react';
import Topbar from "../../components/topbar/Topbar";
import AddressPage from '../../components/becomeHostForms/AddressPage';
import ImagesPage from '../../components/becomeHostForms/ImagesPage';
import SpaceInfoPage from '../../components/becomeHostForms/SpaceInfoPage';
import ReservationInfoPage from '../../components/becomeHostForms/ReservationInfoPage';
import FinishPage from '../../components/becomeHostForms/FinishPage';

export default function Host() {

  const [showPage, setShowPage] = useState('AddressPage');



  return (
    <div className='main-host-div'>
    <Topbar />
      {showPage === 'AddressPage' ? <AddressPage setShowPage={setShowPage} /> : null}
      {showPage === 'ImagesPage' ? <ImagesPage setShowPage={setShowPage} /> : null}
      {showPage === 'SpaceInfoPage' ? <SpaceInfoPage setShowPage={setShowPage} /> : null}
      {showPage === 'ReservationInfoPage' ? <ReservationInfoPage setShowPage={setShowPage} /> : null}
      {showPage === 'FinishPage' ? <FinishPage setShowPage={setShowPage} /> : null}
    </div>
  )
}
