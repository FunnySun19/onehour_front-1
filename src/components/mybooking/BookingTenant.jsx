import React, { useState } from "react";
import "./booking-tenant.css";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

export default function BookingTenant() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="booking-tenant-main-div">
      <div className="booking-tenant-top-div">
        <span className="booking-time-span">Booking time</span>
        <span className="space-name-span">Space name</span>
        <span className="total-price-span">Total Price</span>
        <button className="cancel-btn">Cancel</button>
      </div>
      <div className="booking-tenant-bot-div">
        <div className="booking-tenant-bot-wrapper">
          <span className="booking-from-span">from</span>
          <span className="booking-to-span">to</span>
        </div>
        <div className="booking-tenant-bot-wrapper2">
          <span className="booking-date-from-span">10/02/2023</span>
          <span className="booking-date-to-span">10/03/2023</span>
        </div>
        <div className="booking-tenant-bot-wrapper3">
          <span className="booking-address-span">Address</span>
          <span className="booking-street-span">bla-bla str. 123</span>
        </div>
        <span className="booking-price-span">50$</span>
        <button onClick={handleOpen} className="view-contacts-btn">
          View contacts{" "}
          {isOpen ? (
            <FiChevronUp size={25} className="booking-icon-up" />
          ) : (
            <FiChevronDown size={25} className="booking-icon-down" />
          )}
        </button>
      </div>
      {isOpen ? (
        <div className="booking-hidden-top-div">
          <span className="booking-hidden-name">Name</span>
          <span className="booking-hidden-phone">Phone number</span>
          <span className="booking-hidden-contact">Contact</span>
        </div>
      ) : null}
      {isOpen ? (
        <div className="booking-hidden-bot-div">
          <span className="booking-hidden-name-span">Name_Surname</span>
          <span className="booking-hidden-phone-span">+12345678901</span>
          <span className="booking-hidden-contact-span">
            1231231@pisa.popa.om
          </span>
        </div>
      ) : null}
    </div>
  );
}
