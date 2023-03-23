import React from "react";
import "./spaceInfoPage.css";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function SpaceInfoPage({ formData, setFormData, setShowPage }) {
  const navigate = useNavigate();
  function handleClick() {
    navigate(-1);
  }

  const formik = useFormik({
    initialValues: {
      name: "",
      phone_number: "",
      short_description: "",
      detailed_description: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
      phone_number: Yup.number().required("Required"),
      short_description: Yup.string()
        .max(100, "Short description cannot be more than 100 characters")
        .required("Required"),
      detailed_description: Yup.string()
        .max(1000, "Detailed description cannot be more than 100 words")
        .required("Required"),
    }),
    onSubmit: (values) => {
      setFormData(values);
      setShowPage("AddressPage");
    },
  });

  return (
    <div className="SpaceInfoPage-main-div">
      <form onSubmit={formik.handleSubmit}>
        <div className="SpaceInfoPage-top-div">
          <IoIosArrowBack
            className="SpaceInfoPage-back-icon"
            onClick={handleClick}
          />
          <span className="SpaceInfoPage-back-span" onClick={handleClick}>
            Back
          </span>
          <h2 className="SpaceInfoPage-h2">Space and owner info</h2>
        </div>

        <div className="SpaceInfoPage-center-div">
        <label className="SpaceInfoPage-label">Registrated phone number</label>
          <input
            type="text"
            name="phone_number"
            className="SpaceInfoPage-input"
            onBlur={formik.handleBlur}
            value={formik.values.phone_number}
            onChange={formik.handleChange}
          />
          {formik.touched.phone_number && formik.errors.phone_number ? (
            <p className="p-error">You can only enter numbers</p>
          ) : null}
          <label className="SpaceInfoPage-label">Space name</label>
          <input
            type="text"
            name="name"
            className="SpaceInfoPage-input"
            onBlur={formik.handleBlur}
            value={formik.values.name}
            onChange={formik.handleChange}
          />
          {formik.touched.name && formik.errors.name ? (
            <p className="p-error">{formik.errors.name}</p>
          ) : null}
        
          <label className="SpaceInfoPage-label">Short description</label>
          <textarea
            type="text"
            name="short_description"
            className="SpaceInfoPage-textarea1"
            onBlur={formik.handleBlur}
            value={formik.values.short_description}
            onChange={formik.handleChange}
          />
          {formik.touched.short_description &&
          formik.errors.short_description ? (
            <p className="p-error">{formik.errors.short_description}</p>
          ) : null}
          <label className="SpaceInfoPage-label">Detailed description</label>
          <textarea
            type="text"
            name="detailed_description"
            className="SpaceInfoPage-textarea2"
            onBlur={formik.handleBlur}
            value={formik.values.detailed_description}
            onChange={formik.handleChange}
          />
          {formik.touched.detailed_description &&
          formik.errors.detailed_description ? (
            <p className="p-error">{formik.errors.detailed_description}</p>
          ) : null}

          <button className="SpaceInfoPage-btn" type="submit">
          NEXT STEP
          </button>
        </div>
      </form>
    </div>
  );
}
