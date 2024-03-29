import React, { useState } from "react";
import "./topbar.css";
import Logo from "../../assets/img/logo.png";
import { DatePicker, Select } from "antd";
import { Link, useNavigate } from "react-router-dom";
import DropMenu from "../Menu/DropMenu";
import moment from "moment";
import Cookies from "universal-cookie";

export default function (props) {
  const [dateFrom, setDateFrom] = useState(null);
  const [dateTo, setDateTo] = useState(null);
  const { RangePicker } = DatePicker;
  const navigate = useNavigate();
  const cookies = new Cookies();
  const hasCookie = cookies.get("token");

  const handleSelect = (value, name) => {
    props.setData([]);
    props.setParams((prev) => {
      const copy = { ...prev };
      copy[name] = value;
      return copy;
    });
  };

  const handleSignIn = () => {
    navigate("/sign_up");
  };

  return (
    <div className="topbar-container">
      <div className="logo-container">
        <Link to={"/"} style={{ textDecoration: "none" }}>
          <img src={Logo} alt="" className="logo-img" />
        </Link>
      </div>
      {props.status === "show" && (
        <div className="button-container">
          <RangePicker
            size="large"
            className="date-selector"
            format="DD/MM/YYYY HH:00"
            disabledDate={(current) => current < moment().add(-1, "days")}
            showTime={{ format: "HH" }}
          />

          <Select
            placeholder="Select City"
            name="city"
            onChange={(value) => handleSelect(value, "city")}
            className="city-selector"
            size="large"
            showSearch
            options={[
              {
                value: "Krusevac",
                label: "Krusevac",
              },
              {
                value: "Novi Sad",
                label: "Novi Sad",
              },
            ]}
          />
          <Select
            placeholder="Select Type"
            className="type-selector"
            size="large"
            options={[
              {
                value: "Type 1",
                label: "Type 1",
              },
              {
                value: "Type 2",
                label: "Type 2",
              },
            ]}
          />
        </div>
      )}
      {hasCookie === undefined ? (
        <button className="topbar-sign-in-btn" onClick={handleSignIn}>
          Sign up
        </button>
      ) : (
        <DropMenu />
      )}
    </div>
  );
}
