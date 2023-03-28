import React from "react";
import "./imagesPage.css";
import { IoIosArrowBack } from "react-icons/io";
import { HiPlus } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { addSpace } from "../../features/backendRoutes/spaceSlice";
import { useDispatch } from "react-redux";

export default function ImagesPage({ formData, setFormData, setShowPage }) {
  const navigate = useNavigate();
  function handleClick() {
    navigate(-1);
  }

  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      image_urls1: "",
      image_urls2: "",
    },
    validationSchema: Yup.object({
      image_urls1: Yup.string().url("Invalid URL"),
      image_urls2: Yup.string().url("Invalid URL"),
    }),
    onSubmit: async (values) => {
      setFormData({
        ...formData,
        ...values,
        image_urls: [values.image_urls1, values.image_urls2],
      });
      await dispatch(
        addSpace({
          ...formData,
          ...values,
          image_urls: [values.image_urls1, values.image_urls2]
        })
      );
      setShowPage("FinishPage");
    },
  });

  return (
    <div className="ImagesPage-main-div">
      <form onSubmit={formik.handleSubmit}>
        <div className="ImagesPage-top-div">
          <IoIosArrowBack
            className="ImagesPage-back-icon"
            onClick={handleClick}
          />
          <span className="ImagesPage-back-span" onClick={handleClick}>
            Back
          </span>
          <h2 className="ImagesPage-h2">Images</h2>
        </div>

        <div className="ImagesPage-center-div">
          <label className="ImagesPage-label">Link 1</label>
          <input
            type="text"
            name="image_urls1"
            onBlur={formik.handleBlur}
            value={formik.values.image_urls1}
            onChange={formik.handleChange}
            className="ImagesPage-input"
          />
          {formik.touched.image_urls1 && formik.errors.image_urls1 ? (
            <p className="p-error">{formik.errors.image_urls1}</p>
          ) : null}
          <label className="ImagesPage-label">Link 2</label>
          <input
            type="text"
            name="image_urls2"
            onBlur={formik.handleBlur}
            value={formik.values.image_urls2}
            onChange={formik.handleChange}
            className="ImagesPage-input"
          />
          {formik.touched.image_urls2 && formik.errors.image_urls2 ? (
            <p className="p-error">{formik.errors.image_urls2}</p>
          ) : null}
          <div className="ImagesPage-link-div">
            <label className="ImagesPage-label-addLink">Add link </label>
            <HiPlus className="ImagesPage-addLink-icon" />
          </div>

          <div className="ImagesPage-bot-div">
            <label className="ImagesPage-bot-label">
              Upload images somewhere and paste link
            </label>
            <button className="ImagesPage-btn" type="submit">
              Finish
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
