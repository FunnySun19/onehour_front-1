import React from "react";
import "./finishPage.css";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

export default function FinishPage() {
  const navigate = useNavigate();
  function handleClick() {
    navigate(-1);
  }

  return (
    <div className="FinishPage-main-div">
      <div className="FinishPage-back-div">
        <IoIosArrowBack
          className="SpaceInfoPage-back-icon"
          onClick={handleClick}
        />
        <span className="SpaceInfoPage-back-span" onClick={handleClick}>
          Back
        </span>
      </div>

      <div className="FinishPage-center-div">
        <h2 className="FinishPage-h2">
          Congratulations! Your space has been successfully created!
        </h2>
        <h2 className="FinishPage-h2-2">Now it shows up in "My spaces"</h2>
        <button className="FinishPage-btn">CHECK ""MY SPACES"</button>
      </div>
    </div>
  );
}
