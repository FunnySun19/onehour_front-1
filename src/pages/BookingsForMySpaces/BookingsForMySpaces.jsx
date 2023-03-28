import React, { useEffect } from "react";
import "./bookings-for-my-spaces.css";
import Topbar from "../../components/topbar/Topbar";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import Myspaces from "../../components/myspaces/Myspaces";
import { useDispatch, useSelector } from "react-redux";
import { getOwnerBookings } from "../../features/backendRoutes/spaceOwnerSlice";

export default function BookingsForMySpaces() {
  const navigate = useNavigate();
  function handleClick() {
    navigate(-1);
  }
  const { ownerBookings, isLoading } = useSelector((state) => state.owner);
  const dispatch = useDispatch();
  //  const { params } = useParams(); handle it later
  useEffect(() => {
    dispatch(getOwnerBookings("79999111111"));
  }, []);

  return (
    <div className="bookings-for-myspace-main-div">
      <Topbar />
      <div className="bookings-for-myspace-header-div">
        <IoIosArrowBack
          className="bookings-for-myspace-back-icon"
          onClick={handleClick}
        />
        <span className="bookings-for-myspace-back-span" onClick={handleClick}>
          Back
        </span>
        <h2 className="bookings-for-myspace-h2">Bookings for my spaces</h2>
      </div>
      <div className="bookings-for-myspace-wrapper">
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          ownerBookings.map((space) => <Myspaces space={space} key={space.id} />)
        )}
      </div>
    </div>
  );
}
