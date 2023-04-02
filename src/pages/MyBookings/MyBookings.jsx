import React, { useEffect } from "react";
import Topbar from "../../components/topbar/Topbar";
import "./my-bookings.css";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import BookingTenant from "../../components/mybooking/BookingTenant";
import { useDispatch, useSelector } from "react-redux";
import { getTenantBooking } from "../../features/backendRoutes/tenantSlice";

export default function MyBookings() {
  const navigate = useNavigate();
  function handleClick() {
    navigate(-1);
  }
  const { tenantBooking, isLoading } = useSelector((state) => state.tenant);
  const dispatch = useDispatch();
  //  const { params } = useParams(); handle it later
  useEffect(() => {
    dispatch(getTenantBooking("79999111111"));
  }, []);
  console.log(tenantBooking);

  return (
    <div className="my-bookings-main-div">
      <Topbar />
      <div className="my-bookings-header-div">
        <IoIosArrowBack
          className="my-bookings-back-icon"
          onClick={handleClick}
        />
        <span className="my-bookings-back-span" onClick={handleClick}>
          Back
        </span>
        <h2 className="my-bookings-h2">My Bookings</h2>
      </div>
      <div className="my-bookings-wrapper">
        <BookingTenant />
        <BookingTenant />
      </div>
    </div>
  );
}
