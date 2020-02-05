import React from "react";
import { Formik } from "formik";
import {Link} from "react-router-dom";
import axios from 'axios'
import axiosWithAuth from "../Axios/axiosWithAuth"
const SignUp = () => (
  <Formik
    initialValues={{ 
        name: "", 
        email: "",
        description: "",
        phone: "",
        username: "", 
        password: "" , 
    }}
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
          <label htmlFor="name">Name</label> <br></br>
          <input name="name" type="text" value={values.name} onChange={handleChange} onBlur={handleBlur} className={errors.name && touched.name && "error"}/>
          {errors.name && touched.name && (<div className="input-feedback">{errors.name}</div>)}
          <br></br>

          <label htmlFor="email">Email</label> <br></br>
          <input name="email" type="text" value={values.email} onChange={handleChange} onBlur={handleBlur} className={errors.email && touched.email && "error"}/>
          {errors.email && touched.email && ( <div className="input-feedback">{errors.email}</div>)}
          <br></br>

          <label htmlFor="description">Job Description</label> <br></br>
          <input name="description" type="text" value={values.description} onChange={handleChange} onBlur={handleBlur} className={errors.description && touched.description && "error"}/>
          {errors.description && touched.description && ( <div className="input-feedback">{errors.description}</div>)}
          <br></br>

          <label htmlFor="phone">Phone Number</label> <br></br>
          <input name="phone" type="number" value={values.phone} onChange={handleChange} onBlur={handleBlur} className={errors.phone && touched.phone && "error"}/>
          {errors.phone && touched.phone && ( <div className="input-feedback">{errors.phone}</div>)}
          <br></br>

          <label htmlFor="username">Username</label> <br></br>
          <input name="username" type="text" value={values.username} onChange={handleChange} onBlur={handleBlur} className={errors.username && touched.username && "error"}/>
          {errors.username && touched.username && ( <div className="input-feedback">{errors.username}</div>)}
          <br></br>

          <label htmlFor="password">Password</label> <br></br>
          <input name="password" type="password" value={values.password} onChange={handleChange} onBlur={handleBlur} className={errors.password && touched.password && "error"}/>
          {errors.password && touched.password && (<div className="input-feedback">{errors.password}</div>)}
          <br></br>
          
          <button type="submit" disabled={isSubmitting}>
            Sign Up
          </button>
          <p>Already have an account?</p>
          <Link to="/login">Log in</Link>
          
        </form>
      );
    }}
  </Formik>
);

export default SignUp;