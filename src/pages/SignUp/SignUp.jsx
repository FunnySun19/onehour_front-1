import React, { useState } from "react";
import "./signup.css";
import Topbar from "../../components/topbar/Topbar";
import { useDispatch } from "react-redux";
import {
  createClient,
  loginClient,
} from "../../features/backendRoutes/clientSlice";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const dispatch = useDispatch();
  const [active, setActive] = useState(true);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      phone_number: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      first_name: Yup.string().required("Required"),
      last_name: Yup.string().required("Required"),
      phone_number: Yup.string()
        .matches(/^\d+$/, "You can only enter numbers")
        .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .matches(/^(?=.*\d).+$/, "Password must contain at least one number")
        .required("Required"),
    }),
    onSubmit: (values, { resetForm }) => {
      values.phone_number = parseInt(values.phone_number);
      dispatch(createClient(JSON.stringify(values, null, 2)));
      resetForm();
    },
  });

  const loginValidation = useFormik({
    initialValues: {
      phone_number: "",
      password: "",
    },
    validationSchema: Yup.object({
      phone_number: Yup.string()
        .matches(/^\d+$/, "You can only enter numbers")
        .required("Required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .matches(/^(?=.*\d).+$/, "Password must contain at least one number")
        .required("Required"),
    }),
    onSubmit: (values, { resetForm }) => {
      values.phone_number = parseInt(values.phone_number);
      dispatch(loginClient(JSON.stringify(values, null, 2)));
      resetForm();
      setTimeout(() => {
        navigate("/");
      }, 1000);
    },
  });

  return (
    <>
      <Topbar />
      <div className="login-container">
        <div className={active ? "container" : "container right-panel-active"}>
          <div className="form-container sign-up-container">
            <form action="none" onSubmit={formik.handleSubmit}>
              <h1 className="sign-in-h2">Sign up</h1>
              <span className="spanHome">Phone number</span>
              <input
                type="text"
                name="phone_number"
                onBlur={formik.handleBlur}
                value={formik.values.phone_number}
                onChange={formik.handleChange}
              />
              {formik.touched.phone_number && formik.errors.phone_number ? (
                <p className="paragraph-error">{formik.errors.phone_number}</p>
              ) : null}
              <span className="spanHome">Name</span>
              <input
                type="text"
                name="first_name"
                onBlur={formik.handleBlur}
                value={formik.values.first_name}
                onChange={formik.handleChange}
              />
              {formik.touched.first_name && formik.errors.first_name ? (
                <p className="paragraph-error">{formik.errors.first_name}</p>
              ) : null}
              <span className="spanHome"> Surname</span>
              <input
                type="text"
                name="last_name"
                onBlur={formik.handleBlur}
                value={formik.values.last_name}
                onChange={formik.handleChange}
              />
              {formik.touched.last_name && formik.errors.last_name ? (
                <p className="paragraph-error">{formik.errors.last_name}</p>
              ) : null}
              <span className="spanHome">email</span>
              <input
                type="email"
                name="email"
                onBlur={formik.handleBlur}
                value={formik.values.email}
                onChange={formik.handleChange}
              />
              {formik.touched.email && formik.errors.email ? (
                <p className="paragraph-error">{formik.errors.email}</p>
              ) : null}
              <span className="spanHome">Password</span>
              <input
                type="password"
                name="password"
                onBlur={formik.handleBlur}
                value={formik.values.password}
                onChange={formik.handleChange}
              />
              {formik.touched.password && formik.errors.password ? (
                <p className="paragraph-error">{formik.errors.password}</p>
              ) : null}
              <button className="btnHome" type="submit">
                Sign Up
              </button>
            </form>
          </div>
          <div className="form-container sign-in-container">
            <form action="none" onSubmit={loginValidation.handleSubmit}>
              <h1 className="sign-in-h2">Sign in</h1>
              <span className="spanHome">Phone number</span>
              <input
                type="text"
                name="phone_number"
                onBlur={loginValidation.handleBlur}
                value={loginValidation.values.phone_number}
                onChange={loginValidation.handleChange}
              />
              {loginValidation.touched.phone_number &&
              loginValidation.errors.phone_number ? (
                <p className="paragraph-error">
                  {loginValidation.errors.phone_number}
                </p>
              ) : null}
              <span className="spanHome">Password</span>
              <input
                type="password"
                name="password"
                onBlur={loginValidation.handleBlur}
                value={loginValidation.values.password}
                onChange={loginValidation.handleChange}
              />
              {loginValidation.touched.password &&
              loginValidation.errors.password ? (
                <p className="paragraph-error">
                  {loginValidation.errors.password}
                </p>
              ) : null}
              <button className="btnHome" type="submit">
                Sign In
              </button>
            </form>
          </div>
          <div className="overlay-container">
            <div className="overlay">
              <div className="overlay-panel overlay-left">
                <h1 className="h1Home">Already registered?</h1>
                <p className="sign-in-description-paragraph">
                  Sign in to your account to continue!
                </p>
                <button
                  className="ghost"
                  onClick={() => setActive((prev) => !prev)}
                >
                  Sign In
                </button>
              </div>
              <div className="overlay-panel overlay-right">
                <h1 className="h1Home">First time here?</h1>
                <p className="sign-up-description-paragraph">
                  You can create an account to rent and rent out spaces!
                </p>
                <button
                  className="ghost q"
                  onClick={() => setActive((prev) => !prev)}
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
