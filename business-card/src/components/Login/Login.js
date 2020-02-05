import React from "react";
import { Formik } from "formik";
import {Link} from "react-router-dom";
import styled from "styled-components";
import axios from 'axios'
import axiosWithAuth from "../Axios/axiosWithAuth"

const Button = styled.button`
background: transparent;
border-radius: 3px;
border: 2px solid red;
color: blue;
margin: 0 1em;
padding: 0.25em 1em;
`
const Login = () => (


  <Formik
    initialValues={{ username: "", password: "" }}
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
          <h2>Sign in</h2>
          <label htmlFor="username">Username</label> <br></br>
          <input name="username" type="text" value={values.username} onChange={handleChange} onBlur={handleBlur} className={errors.username && touched.username && "error"}/>
          {errors.username && touched.username && (<div className="input-feedback">{errors.username}</div>)}
          <br></br>

          <label htmlFor="password">Password</label> <br></br>
          <input name="password" type="password" value={values.password} onChange={handleChange} onBlur={handleBlur} className={errors.password && touched.password && "error"}/>
          {errors.password && touched.password && (<div className="input-feedback">{errors.password}</div>)}
          <br></br>
          <button type="submit" disabled={isSubmitting}>
            Login
          </button>
          <p>Don't have an account?</p>
          <Link to="/SignUp">Sign Up</Link>
        </form>
      );
    }}
  </Formik>
);

export default Login;