import React, { useState, useEffect } from "react";
import "./my-space.css";
import Topbar from "../../components/topbar/Topbar";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import Space from "../../components/space/Space";
import { useDispatch, useSelector } from "react-redux";
import { getOwnerSpaces } from "../../features/backendRoutes/spaceOwnerSlice";

export default function MySpaces() {
  const { ownerSpaces, isLoading } = useSelector((state) => state.owner);

  const dispatch = useDispatch();
  //  const { params } = useParams(); handle it later
  useEffect(() => {
    dispatch(getOwnerSpaces("79999111111"));
  }, []);

  
  const navigate = useNavigate();
  function handleClick() {
    navigate(-1);
  }

  return (
    <div className="myspace-main-div">
      <Topbar />
      <div className="myspace-header-div">
        <IoIosArrowBack className="myspace-back-icon" onClick={handleClick} />
        <span className="myspace-back-span" onClick={handleClick}>
          Back
        </span>
        <h3 className="my-space-h3">My Spaces</h3>
      </div>
      <div className="myspace-content-div">
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          ownerSpaces.map((space) => <Space space={space} key={space.id} />)
        )}
      </div>
    </div>
  );
}
