import React, { useState } from "react";
import "./my-spaces.css";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

export default function Myspaces({ space }) {
  const [isOpen, setIsOpen] = useState(false);
  const dateFrom = new Date(space.datetime_from);
  const dateTo = new Date(space.datetime_to);

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
  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="space-landlord-main-div">
      <div className="space-landlord-top-div">
        <span className="space-landlord-time-span">Booking time</span>
        <span className="space-landlord-name-span">{space.space.name}</span>
        <span className="space-landlord-total-price-span">Total Price</span>
        <button className="space-landlord-cancel-btn">Cancel</button>
      </div>
      <div className="space-landlord-bot-div">
        <div className="space-landlord-bot-wrapper">
          <span className="space-landlord-from-span">from</span>
          <span className="space-landlord-to-span">to</span>
        </div>
        <div className="space-landlord-bot-wrapper2">
          <span className="space-landlord-date-from-span">
            {formattedDateFrom}
          </span>
          <span className="space-landlord-date-to-span">{formattedDateTo}</span>
        </div>
        <div className="space-landlord-bot-wrapper3">
          <span className="space-landlord-address-span">Address</span>
          <span className="space-landlord-street-span">
            {space.space.address} {space.space.city}
          </span>
        </div>
        <span className="space-landlord-price-span">50$</span>
        <button onClick={handleOpen} className="space-landlord-contacts-btn">
          View contacts{" "}
          {isOpen ? (
            <FiChevronUp size={25} className="booking-icon-up" />
          ) : (
            <FiChevronDown size={25} className="booking-icon-down" />
          )}
        </button>
      </div>
      {isOpen ? (
        <div className="space-landlord-hidden-top-div">
          <span className="space-landlord-hidden-name">Name</span>
          <span className="space-landlord-hidden-phone">Phone number</span>
          <span className="space-landlord-hidden-contact">Contact</span>
        </div>
      ) : null}
      {isOpen ? (
        <div className="space-landlord-hidden-bot-div">
          <span className="space-landlord-hidden-name-span">
            {space.contact.first_name} {space.contact.last_name}
          </span>
          <span className="space-landlord-hidden-phone-span">
            {space.contact.phone_number}
          </span>
          <span className="space-landlord-hidden-contact-span">
            {space.contact.email}
          </span>
        </div>
      ) : null}
    </div>
  );
}
