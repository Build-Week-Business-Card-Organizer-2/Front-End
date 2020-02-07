import React from "react";
import { Formik } from "formik";
import {Link} from "react-router-dom";
import axios from 'axios';
import styled from "styled-components";
import axiosWithAuth from "../Axios/axiosWithAuth"

const Container = styled.div`
margin:5rem 0rem 0rem 0rem;
display:flex;
flex-direction:column;
justify-content: center
`
const Button = styled.button`
display:flex;
align-items:center;
background: lightGrey;
justify-content:center;
border-radius: 5px;
border: 2px lightGrey;
color: white;
margin: 2em 0em 2em 0em;
padding: .75em 2em;
width: 100%;
`;
const P =styled.p`
margin: 0rem;
font-size: .65rem;
`;
const Input = styled.input`
  width: 300px;
  height: 1.5rem;
  border:none;
  border-bottom:solid grey;
  background-color: #fff;
`;
const SignUp = (props) => (
  <Formik
    initialValues={{username:"", password:"", name:"", job_description:"", email:"",  phone_number:"", profile_img_src:""}}
    onSubmit={(values, { setSubmitting }) => {
      setTimeout(() => {
        console.log("Signing in", values);
        axiosWithAuth().post('api/users/register', values).then(response=>{
          props.history.push("/login")
        })
        .then(response=>{
            console.log(response);
        })
        .catch(error=>{
            console.log(error);
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
        <Container>
        <h1>Sign Up</h1>
        <br></br>
        <form className="signUpForm" onSubmit={handleSubmit}>
          <label htmlFor="name">Full Name</label> <br></br>
          <Input name="name" type="text" value={values.name} onChange={handleChange} onBlur={handleBlur} className={errors.name && touched.name && "error"}/>
          {errors.name && touched.name && (<div className="input-feedback">{errors.name}</div>)}
          <P>First & Last</P>
          <br></br>

          <label htmlFor="email">Email</label> <br></br>
          <Input name="email" type="text" value={values.email} onChange={handleChange} onBlur={handleBlur} className={errors.email && touched.email && "error"}/>
          {errors.email && touched.email && ( <div className="input-feedback">{errors.email}</div>)}
          <P>Ex: name@gmail.com</P>
          <br></br>

          <label htmlFor="job_description">Job Description</label> <br></br>
          <Input name="job_description" type="text" value={values.job_description} onChange={handleChange} onBlur={handleBlur} className={errors.job_description && touched.job_description && "error"}/>
          {errors.job_description && touched.job_description && ( <div className="input-feedback">{errors.job_description}</div>)}
          <P>Job Title</P>
          <br></br>


          <label htmlFor="profile_url">Profile Image URL</label> <br></br>
          <Input name="profile_img_src" type="text" value={values.profile_img_src} onChange={handleChange} onBlur={handleBlur} className={errors.profile_img_src && touched.profile_img_src && "error"}/>
          {errors.profile_img_src && touched.profile_img_src && (<div className="input-feedback">{errors.profile_img_src}</div>)}
          <P>First & Last</P>
          <br></br>


          <label htmlFor="phone_number">Phone Number</label> <br></br>
          <Input name="phone_number" type="number" value={values.phone_number} onChange={handleChange} onBlur={handleBlur} className={errors.phone_number && touched.phone_number && "error"}/>
          {errors.phone && touched.phone && ( <div className="input-feedback">{errors.phone_number}</div>)}
          <br></br>

          <label htmlFor="username">Username</label> <br></br>
          <Input name="username" type="text" value={values.username} onChange={handleChange} onBlur={handleBlur} className={errors.username && touched.username && "error"}/>
          {errors.username && touched.username && ( <div className="input-feedback">{errors.username}</div>)}
          <br></br>

          <label htmlFor="password">Password</label> <br></br>
          <Input name="password" type="password" value={values.password} onChange={handleChange} onBlur={handleBlur} className={errors.password && touched.password && "error"}/>
          {errors.password && touched.password && (<div className="input-feedback">{errors.password}</div>)}
          <P>Min. 8 Characters</P>
          <br></br>
          
          <Button type="submit" disabled={isSubmitting}>
            Sign Up
          </Button> 
        </form>
            <p>Already have an account?</p>
            <Link to="/login">Log in</Link>
        </Container>
      );
    }}
  </Formik>
);

export default SignUp;