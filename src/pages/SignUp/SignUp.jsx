import React from "react";
import "./signup.css";
import { IoIosArrowBack } from "react-icons/io";
import Topbar from "../../components/topbar/Topbar";
import TelegramIcon from "../../assets/img/telegram-icon.png";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createClient } from "../../features/backendRoutes/clientSlice";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";


export default function SignUp() {

  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      phone_number: "",
      email: "",
    },
    validationSchema: Yup.object({
      first_name: Yup.string().required("Required"),
      last_name: Yup.string().required("Required"),
      phone_number: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email address"),
    }),
    onSubmit: async (values) => {
      try {
        const resp = await dispatch(createClient(values));
        if (resp.meta.requestStatus === "fulfilled") {
          navigate("/");
        }
      } catch (error) {
        console.log(error);
      }
    },
  });

  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };
  const handleTelegram = () => {
    window.open("https://telegram.org/", "_blank");
  };

  return (
    <div className="sign-up-main-div">
      <Topbar />

      <div className="sign-up-header">
        <IoIosArrowBack className="sign-up-back-icon" onClick={handleBack} />
        <span className="sign-up-back-span" onClick={handleBack}>
          Back
        </span>
        <h3 className="sign-up-h3">Sign up</h3>
      </div>
      <div className="sign-up-wrapper">
        <form onSubmit={formik.handleSubmit}>
          <div className="sign-up-left">
            <span className="sign-up-span">Phone number</span>
            <input
              type="text"
              name="phone_number"
              className="sign-up-phone-input"
              onBlur={formik.handleBlur}
              value={formik.values.phone_number}
              onChange={formik.handleChange}
            />
            {formik.touched.phone_number && formik.errors.phone_number ? (
              <p className="sign-up-err">{formik.errors.phone_number}</p>
            ) : null}
            <span className="sign-up-span">Name</span>
            <input
              type="text"
              name="first_name"
              className="sign-up-name-input"
              onBlur={formik.handleBlur}
              value={formik.values.first_name}
              onChange={formik.handleChange}
            />
            {formik.touched.first_name && formik.errors.first_name ? (
              <p className="sign-up-err">{formik.errors.first_name}</p>
            ) : null}
            <span className="sign-up-span">Surname</span>
            <input
              type="text"
              name="last_name"
              className="sign-up-surname-input"
              onBlur={formik.handleBlur}
              value={formik.values.last_name}
              onChange={formik.handleChange}
            />
            {formik.touched.last_name && formik.errors.last_name ? (
              <p className="sign-up-err">{formik.errors.last_name}</p>
            ) : null}

            <span className="sign-up-span">Email*</span>
            <input
              type="email"
              name="email"
              className="sign-up-email-input"
              onBlur={formik.handleBlur}
              value={formik.values.email}
              onChange={formik.handleChange}
            />

            {formik.touched.email && formik.errors.email ? (
              <p className="sign-up-err">{formik.errors.email}</p>
            ) : null}

            <button className="sign-up-btn" type="submit">
              SIGN UP
            </button>
          </div>
        </form>
        <div className="sign-up-right">
          <h4 className="sign-up-h4">Description</h4>
          <p className="sign-up-paragraph">
            Блок доп.информации об объекте Блок доп.информации об объекте Блок
            доп.информации об объекте Блок доп.информации об объекте Блок
            доп.информации об объекте Блок доп.информации об объекте
          </p>
          <span className="sign-up-span-messanger">Supported messangers</span>
          <img
            src={TelegramIcon}
            className="sign-up-telegram-icon"
            onClick={handleTelegram}
          />
        </div>
      </div>
    </div>
  );
}
