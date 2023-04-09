import React from "react";
import "./reservationInfoPage.css";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { DatePicker } from "antd";
import moment from "moment";

export default function ReservationInfoPage({
  formData,
  setFormData,
  setShowPage,
}) {
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
      available_from: Yup.date()
        .nullable()
        .required("Please enter correct date"),
      available_to: Yup.date().nullable().required("Please enter correct date"),
    }),
    onSubmit: (values) => {
      const formattedValues = {
        ...values,
        available_from: values.available_from.format("YYYY-MM-DDTHH:mmZ"),
        available_to: values.available_to.format("YYYY-MM-DDTHH:mmZ"),
      };
      setFormData({ ...formData, ...formattedValues });
      setShowPage("ImagesPage");
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
          <h2 className="ReservationInfoPage-h2">Booking info</h2>
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
            <DatePicker
              name="available_from"
              required
              style={{ marginRight: "5px", outline: "none", border: "none" }}
              format="DD/MM/YYYY HH"
              showTime={{ format: "HH" }}
              disabledDate={(current) => {
                return current && current < moment().startOf("day");
              }}
              disabledTime={(current) =>
                current &&
                (current < moment().startOf("day") || current > moment()) && {
                  disabledHours: () =>
                    [...Array(24).keys()].splice(0, moment().hour()),
                }
              }
              onChange={(dateString) => {
                formik.setFieldValue("available_from", dateString);
                formik.handleChange();
              }}
              value={formik.values.available_from}
            />

            <DatePicker
              name="available_to"
              required
              style={{ outline: "none", border: "none" }}
              format="DD/MM/YYYY HH"
              showTime={{ format: "HH" }}
              disabledDate={(current) => {
                return (
                  current &&
                  current < moment(formik.values.available_from).startOf("day")
                );
              }}
              disabledTime={(current) =>
                current &&
                current <
                  moment(formik.values.available_from).startOf("day") && {
                  disabledHours: () =>
                    [...Array(24).keys()].splice(
                      0,
                      moment(formik.values.available_from).hour()
                    ),
                }
              }
              onChange={(dateString) => {
                formik.setFieldValue("available_to", dateString);
                formik.handleChange();
              }}
              onBlur={formik.handleBlur}
              value={formik.values.available_to}
            />
          </div>
          <div className="error-div">
            <div style={{ width: "45%", marginLeft: "2%" }}>
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
            NEXT STEP
          </button>
        </div>
      </form>
    </div>
  );
}
