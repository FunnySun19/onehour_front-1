import React from "react";
import "./host.css";
import { useState } from "react";
import Topbar from "../../components/topbar/Topbar";
import AddressPage from "../../components/becomeHostForms/AddressPage";
import ImagesPage from "../../components/becomeHostForms/ImagesPage";
import SpaceInfoPage from "../../components/becomeHostForms/SpaceInfoPage";
import ReservationInfoPage from "../../components/becomeHostForms/ReservationInfoPage";
import FinishPage from "../../components/becomeHostForms/FinishPage";

export default function Host() {
  const [formData, setFormData] = useState({});
  const [showPage, setShowPage] = useState("SpaceInfoPage");

  return (
    <div className="main-host-div">
      <Topbar />
      {showPage === "AddressPage" ? (
        <AddressPage
          formData={formData}
          setFormData={setFormData}
          setShowPage={setShowPage}
        />
      ) : null}
      {showPage === "ImagesPage" ? (
        <ImagesPage
          formData={formData}
          setFormData={setFormData}
          setShowPage={setShowPage}
        />
      ) : null}
      {showPage === "SpaceInfoPage" ? (
        <SpaceInfoPage
          formData={formData}
          setFormData={setFormData}
          setShowPage={setShowPage}
        />
      ) : null}
      {showPage === "ReservationInfoPage" ? (
        <ReservationInfoPage
          formData={formData}
          setFormData={setFormData}
          setShowPage={setShowPage}
        />
      ) : null}
      {showPage === "FinishPage" ? (
        <FinishPage
          formData={formData}
          setFormData={setFormData}
          setShowPage={setShowPage}
        />
      ) : null}
    </div>
  );
}
