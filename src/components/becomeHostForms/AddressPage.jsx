import React from "react";
import "./addressPage.css";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function AddressPage({ formData, setFormData, setShowPage }) {
  
  const navigate = useNavigate();
  function handleClick() {
    navigate(-1);
  }

  const formik = useFormik({
    initialValues: {
      country: "",
      city: "",
      address: "",
      area:"",
      lat: "",
      lng: "",
    },
    validationSchema: Yup.object({
      country: Yup.string()
        .oneOf(["Serbia"], "Country should be Serbia")
        .required("Required"),
      city: Yup.string()
        .matches(/^[a-zA-Z]+$/, "City name should contain only letters")
        .max(18, "You can't enter more then 18 letters")
        .required("Required"),
      address: Yup.string()
        .matches(
          /^[a-zA-Z\s]+\d+$/,
          "Address should be in the format 'StreetName 123'"
        )
        .required("Required"),
        area: Yup.number()
    .typeError("Please enter only numbers")
    .required("Area is required"),
      lat: Yup.number(),
      lng: Yup.number(),
    }),
    onSubmit: (values) => {
      setFormData({ ...formData, ...values });
      setShowPage("ReservationInfoPage");
    },
  });

  return (
    <div className="AddressPage-main-div">
      <form action="">
        <div className="AddressPage-top-div">
          <IoIosArrowBack
            className="AddressPage-back-icon"
            onClick={handleClick}
          />
          <span className="AddressPage-back-span" onClick={handleClick}>
            Back
          </span>
          <h2 className="AddressPage-h2">Space location</h2>
        </div>

        <div className="AddressPage-center-div">
          <label className="AddressPage-label">Country</label>
          <input
            type="text"
            name="country"
            onBlur={formik.handleBlur}
            value={formik.values.country}
            onChange={formik.handleChange}
            className="AddressPage-input"
          />
          {formik.touched.country && formik.errors.country ? (
            <p className="p-error">{formik.errors.country}</p>
          ) : null}
          <label className="AddressPage-label">City</label>
          <input
            type="text"
            name="city"
            onBlur={formik.handleBlur}
            value={formik.values.city}
            onChange={formik.handleChange}
            className="AddressPage-input"
          />
          {formik.touched.city && formik.errors.city ? (
            <p className="p-error">{formik.errors.city}</p>
          ) : null}
          <label className="AddressPage-label">Address</label>
          <input
            type="text"
            name="address"
            onBlur={formik.handleBlur}
            value={formik.values.address}
            onChange={formik.handleChange}
            className="AddressPage-input"
          />
          {formik.touched.address && formik.errors.address ? (
            <p className="p-error">{formik.errors.address}</p>
          ) : null}
           <label className="AddressPage-label">Area</label>
          <input
            type="text"
            name="area"
            onBlur={formik.handleBlur}
            value={formik.values.area}
            onChange={formik.handleChange}
            className="AddressPage-input"
          />
          {formik.touched.area && formik.errors.area ? (
            <p className="p-error">{formik.errors.area}</p>
          ) : null}
        </div>

        <div className="AddressPage-bot-div">
          <div className="AddressPage-label-div">
            <label className="AddressPage-label-latlng">Latitude</label>
            <label className="AddressPage-label-latlng">Longitude</label>
          </div>

          <div className="AddressPage-input-div">
            <input
              type="text"
              name="lat"
              className="AddressPage-input-latlng"
              onBlur={formik.handleBlur}
              value={formik.values.lat}
              onChange={formik.handleChange}
            />
            <input
              type="text"
              name="lng"
              className="AddressPage-input-latlng"
              onBlur={formik.handleBlur}
              value={formik.values.lng}
              onChange={formik.handleChange}
            />
          </div>
          <div className="error-div">
            <div style={{ width: "45%", marginLeft: "6%" }}>
              {formik.touched.lat && formik.errors.lat ? (
                <p className="p-error">{formik.errors.lat}</p>
              ) : null}
            </div>
            <div style={{ width: "45%" }}>
              {formik.touched.lng && formik.errors.lng ? (
                <p className="p-error">{formik.errors.lng}</p>
              ) : null}
            </div>
          </div>
          <button
            className="AddressPage-btn"
            type="submit"
            onClick={formik.handleSubmit}
          >
            NEXT STEP
          </button>
        </div>
      </form>
    </div>
  );
}
