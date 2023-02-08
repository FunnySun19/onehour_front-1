import React from "react";
import "./reservationInfoPage.css";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { addSpace } from "../../features/backendRoutes/spaceSlice";
import { useDispatch } from "react-redux";
import * as Yup from "yup";

export default function ReservationInfoPage({
  formData,
  setFormData,
  setShowPage,
}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  function handleClick() {
    navigate(-1);
  }

  const formik = useFormik({
    initialValues: {
      price: "",
      available_from: "",
      available_to: "",
    },
    validationSchema: Yup.object({
      price: Yup.number().required("Required"),
      available_from: Yup.string()
        .matches(
          /^\d{4}.\d{2}.\d{2}T\d{2}:\d{2}:\d{2}$/,
          "date should be in format 'YYYY.MM.DDTHH:mm:ss'"
        )
        .required("Required"),
      available_to: Yup.string()
        .matches(
          /^\d{4}.\d{2}.\d{2}T\d{2}:\d{2}:\d{2}$/,
          "date should be in format 'YYYY.MM.DDTHH:mm:ss'"
        )
        .required("Required"),
    }),
    onSubmit: async (values) => {
      setFormData({ ...formData, ...values });
      await dispatch(
        addSpace({
          ...formData,
          ...values,
        })
      );
      setShowPage("FinishPage");
    },
  });

  return (
    <div className="ReservationInfoPage-main-div">
      <form onSubmit={formik.handleSubmit}>
        <div className="ReservationInfoPage-top-div">
          <IoIosArrowBack
            className="ReservationInfoPage-back-icon"
            onClick={handleClick}
          />
          <span className="ReservationInfoPage-back-span" onClick={handleClick}>
            Back
          </span>
          <h2 className="ReservationInfoPage-h2">Reservation Info</h2>
        </div>

        <div className="ReservationInfoPage-center-div">
          <label className="ReservationInfoPage-label">
            Price for one hour
          </label>
          <input
            type="text"
            name="price"
            className="SpaceInfoPage-input"
            onBlur={formik.handleBlur}
            value={formik.values.price}
            onChange={formik.handleChange}
          />
          {formik.touched.price && formik.errors.price ? (
            <p className="p-error">{formik.errors.price}</p>
          ) : null}
        </div>
        <div className="ReservationInfoPage-bot-div">
          <div className="ReservationInfoPage-label-div">
            <label className="ReservationInfoPage-label-available">
              Available from
            </label>
            <label className="ReservationInfoPage-label-available">
              Available to
            </label>
          </div>

          <div className="ReservationInfoPage-input-div">
            <input
              type="text"
              name="available_from"
              className="ReservationInfoPage-input-available"
              onBlur={formik.handleBlur}
              value={formik.values.available_from}
              onChange={formik.handleChange}
            />
            <input
              type="text"
              name="available_to"
              className="ReservationInfoPage-input-available"
              onBlur={formik.handleBlur}
              value={formik.values.available_to}
              onChange={formik.handleChange}
            />
          </div>
          <div className="error-div">
            <div style={{ width: "45%", marginLeft: "6%" }}>
              {formik.touched.available_from && formik.errors.available_from ? (
                <p className="p-error">{formik.errors.available_from}</p>
              ) : null}
            </div>
            <div style={{ width: "45%" }}>
              {formik.touched.available_to && formik.errors.available_to ? (
                <p className="p-error">{formik.errors.available_to}</p>
              ) : null}
            </div>
          </div>
          <button className="ReservationInfoPage-btn" type="submit">
            Finish
          </button>
        </div>
      </form>
    </div>
  );
}
