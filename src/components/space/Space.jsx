import React from "react";
import "./space.css";
import photo from "../../assets/img/Rectangle64.png";
import { FaWindowClose } from "react-icons/fa";

export default function Space({ space }) {
  const dateFrom = new Date(space.available_from);
  const dateTo = new Date(space.available_to);

  const dateOptions = {
    day: "numeric",
    month: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
  };

  const formattedDateFrom = new Intl.DateTimeFormat(
    "en-US",
    dateOptions
  ).format(dateFrom);
  const formattedDateTo = new Intl.DateTimeFormat("en-us", dateOptions).format(
    dateTo
  );

  return (
    <div className="space-main-div">
      <div className="space-left-container">
        <h4 className="space-left-h4">{space.name}</h4>
        <img src={photo} alt="" />
      </div>
      <div className="space-right-container">
        <div className="right-container-header">
          <h4 className="space-right-h4">Description</h4>
          <FaWindowClose className="delete-icon" />
        </div>
        <p className="space-detail-desc">{space.detailed_description}</p>
        <span className="space-address-span">Address</span>
        <p className="space-paragraph-address">{space.address}</p>
        <span className="space-available-span">Available</span>
        <div className="right-container-bottom">
          <p className="right-container-bottom-paragraph">
            from {formattedDateFrom} to {formattedDateTo}
          </p>
          <span className="right-container-price-span">
            ${space.price} per hour
          </span>
        </div>
      </div>
    </div>
  );
}
