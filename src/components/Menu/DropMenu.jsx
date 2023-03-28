import React, { useState } from "react";
import "./dropMenu.css";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useNavigate } from "react-router-dom";

export default function DropMenu() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen((prevOpen) => {
      if (!prevOpen) {
        return true;
      } else {
        setOpen(false);
        return false;
      }
    });
  };

  const handleNavigate1 = () => {
    navigate("/sign_up");
  };
  const handleNavigate2 = () => {
    navigate("/booking/tenant");
  };
  const handleNavigate3 = () => {
    navigate("/create_space");
  };
  const handleNavigate4 = () => {
    navigate("/my_space");
  };
  const handleNavigate5 = () => {
    navigate("/booking/owner");
  };

  return (
    <div
      className="menu-wrapper"
      tabIndex={1}
      onBlur={() => {
        setOpen(false);
      }}
    >
      <div className="drop-menu" onClick={handleClick}>
        <span className="menu-span">Menu</span>
        {open ? (
          <IoIosArrowUp size={"20px"} color={"grey"} className="menu-icon" />
        ) : (
          <IoIosArrowDown className="menu-icon" size={"20px"} color={"grey"} />
        )}
      </div>
      {open && (
        <div className="menu-div">
          <div className="menu-option1" onClick={handleNavigate1}>
            <p className="menu-paragraph1">Sign up</p>
          </div>
          <span className="menu-div-span">For tenants</span>
          <div className="menu-option2" onClick={handleNavigate2}>
            <p className="menu-paragraph">Booking</p>
          </div>
          <span className="menu-div-span">For landlord</span>
          <div className="menu-option3" onClick={handleNavigate3}>
            <p className="menu-paragraph">Create space</p>
          </div>
          <div className="menu-option4" onClick={handleNavigate4}>
            <p className="menu-paragraph">Spaces</p>
          </div>
          <div className="menu-option5" onClick={handleNavigate5}>
            <p className="menu-paragraph">Bookings</p>
          </div>
        </div>
      )}
    </div>
  );
}
