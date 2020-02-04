import React from "react";
import { Formik } from "formik";
import axios from 'axios'
import axiosWithAuth from "../Axios/axiosWithAuth"
const SignUp = () => (
  <Formik
    initialValues={{ username: "", password: "" , name:""}}
    onSubmit={(values, { setSubmitting }) => {
      setTimeout(() => {
        console.log("Logging in", values);
        axiosWithAuth().post("api/users/login", values)
        .then(response=>{
            console.log(response);
            localStorage.setItem('token',response.data.token);
        })
        axios.get("https://business-card-collector.herokuapp.com/api/users")
        .then(res=>{
            console.log(res);
        })
        .catch(err=>{
            console.log(err)
        })
        setSubmitting(false);
      }, 500);
    }}>
    {props => {
      const {values, touched, errors, isSubmitting, handleChange, handleBlur, handleSubmit} = props;
      return (
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username</label>
          <input
            name="username"
            type="text"
            placeholder="Enter your email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.username && touched.username && "error"}
          />
          {errors.username && touched.username && (
            <div className="input-feedback">{errors.username}</div>
          )}
          <br></br>
          <label htmlFor="password">Password</label>
          <input
            name="password"
            type="password"
            placeholder="Enter your password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.password && touched.password && "error"}
          />
          {errors.password && touched.password && (
            <div className="input-feedback">{errors.password}</div>
          )}
          <br></br>
          <label htmlFor="name">Name</label>
          <input
            name="name"
            type="text"
            placeholder="Enter your Name"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.name && touched.name && "error"}
          />
          {errors.name && touched.name && (
            <div className="input-feedback">{errors.name}</div>
          )}
          <br></br>
          <button type="submit" disabled={isSubmitting}>
            Sign Up
          </button>
        </form>
      );
    }}
  </Formik>
);

export default SignUp;