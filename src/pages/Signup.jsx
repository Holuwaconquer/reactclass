import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router";


const Signup = () => {
  // const [firstname, setfirstname] = useState('')
  const navigate=useNavigate();

  const phoneRegExp = /^\+(?:[0-9] ?){6,14}[0-9]$/;

  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      phoneNumber: "",
      email: "",
      course: "",
      regNum: "",
      password: "",
      confirmPassword: "",
    },

    validationSchema: Yup.object({
      firstname: Yup.string()
        .min(3, "Must be 3 characters or more")
        .required("This field must not be empty"),
      lastname: Yup.string("this must be a string").required(
        "This field must not be empty",
      ),
      email: Yup.string()
        .email("This must be a valid email")
        .required("This field must not be empty"),
      phoneNumber: Yup.string()
        .matches(phoneRegExp, "Phone number must include country code")
        .min(6, "this password must be or more than 6")
        .required("This field must not be empty"),
      password: Yup.string("this must be a string")
        .min(6, "this password must be or more than 6")
        .required("This field must not be empty"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Password does not match")
        .required("This field must not be empty"),
      course: Yup.string("this fiend must be a string").required("required!"),
      regNum: Yup.string("this fiend must be a string").required("required!"),
    }),

    onSubmit: (values) => {
      const { confirmPassword, ...dataValue } = values;

      console.log("These are the values:", dataValue);
      axios.post("http://localhost:3001/Users", dataValue).then((res) => {
        console.log("This is the response: ", res);
        navigate("/");
      });
    },
  });

  return (
    <div className="w-3/4 bg-white shadow p-4! mx-auto!">
      <div className="flex flex-col gap-4">
        <h1>Sign Up</h1>

        <form
          onSubmit={formik.handleSubmit}
          className="w-full flex flex-col gap-4"
        >
          {/* for the first input fields */}
          <div className="w-full grid md:grid-cols-2 gap-4 ">
            {/* for firstname */}
            <div>
              <label htmlFor="firstname">Fistname</label>
              <input
                type="text"
                name="firstname"
                value={formik.values.firstname}
                onChange={formik.handleChange}
                className="w-full rounded-[6px] bg-gray-50 shadow outline-0 p-4!"
                onBlur={formik.handleBlur}
              />
              {formik.touched.firstname && formik.errors.firstname && (
                <small className="text-red-500">
                  {formik.errors.firstname}
                </small>
              )}
            </div>
            {/* for lastname */}
            <div>
              <label htmlFor="lastname">Lastname</label>
              <input
                type="text"
                name="lastname"
                value={formik.values.lastname}
                onChange={formik.handleChange}
                className="w-full rounded-[6px] bg-gray-50 shadow outline-0 p-4!"
                onBlur={formik.handleBlur}
              />
              {formik.touched.lastname && formik.errors.lastname && (
                <small className="text-red-500">{formik.errors.lastname}</small>
              )}
            </div>
          </div>
          {/* for the seconds input fields */}
          <div className="w-full grid md:grid-cols-2 gap-4 ">
            {/* for email */}
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                className="w-full rounded-[6px] bg-gray-50 shadow outline-0 p-4!"
                onBlur={formik.handleBlur}
              />
              {formik.touched.email && formik.errors.email && (
                <small className="text-red-500">{formik.errors.email}</small>
              )}
            </div>
            {/* for phonenumber */}
            <div>
              <label htmlFor="phoneNumber">Phone Number</label>
              <input
                type="tel"
                name="phoneNumber"
                value={formik.values.phoneNumber}
                onChange={formik.handleChange}
                className="w-full rounded-[6px] bg-gray-50 shadow outline-0 p-4!"
                onBlur={formik.handleBlur}
              />
              {formik.touched.phoneNumber && formik.errors.phoneNumber && (
                <small className="text-red-500">
                  {formik.errors.phoneNumber}
                </small>
              )}
            </div>
          </div>
          {/* for the third input fields */}
          <div className="w-full grid md:grid-cols-2 gap-4 ">
            {/* for email */}
            <div>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                className="w-full rounded-[6px] bg-gray-50 shadow outline-0 p-4!"
                onBlur={formik.handleBlur}
              />
              {formik.touched.password && formik.errors.password && (
                <small className="text-red-500">{formik.errors.password}</small>
              )}
            </div>
            {/* for phonenumber */}
            <div>
              <label htmlFor="lastname">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                value={formik.values.confirmPassword}
                onChange={formik.handleChange}
                className="w-full rounded-[6px] bg-gray-50 shadow outline-0 p-4!"
                onBlur={formik.handleBlur}
              />
              {formik.touched.confirmPassword &&
                formik.errors.confirmPassword && (
                  <small className="text-red-500">
                    {formik.errors.confirmPassword}
                  </small>
                )}
            </div>
          </div>
          <div className="w-full grid md:grid-cols-2 gap-4 ">
            {/* course */}
            <div>
              <label htmlFor="course">Course</label>
              <input
                type="text"
                name="course"
                value={formik.values.course}
                onChange={formik.handleChange}
                className="w-full rounded-[6px] bg-gray-50 shadow outline-0 p-4!"
                onBlur={formik.handleBlur}
              />
              {formik.touched.course && formik.errors.course && (
                <small className="text-red-500">{formik.errors.course}</small>
              )}
            </div>
            {/* for reg-number */}
            <div>
              <label htmlFor="regNum">Registration No:</label>
              <input
                type="regNum"
                name="regNum"
                value={formik.values.confirmregNum}
                onChange={formik.handleChange}
                className="w-full rounded-[6px] bg-gray-50 shadow outline-0 p-4!"
                onBlur={formik.handleBlur}
              />
              {formik.touched.regNum && formik.errors.regNum && (
                <small className="text-red-500">{formik.errors.regNum}</small>
              )}
            </div>
          </div>

          <button
            type="submit"
            disabled={!(formik.isValid && formik.dirty)}
            className={` ${formik.isValid && formik.dirty ? "bg-blue-700 text-white cursor-pointer" : "bg-blue-400 text-black cursor-not-allowed"} w-full py-3! rounded-[4px]`}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
