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
  border-bottom:solid grey;
  background-color: #fff;
`;
const SignUp = () => (
  <Formik
    initialValues={{name: "", email: "", description: "", phone: "", username: "", password: ""}}
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

          <label htmlFor="description">Job Description</label> <br></br>
          <Input name="description" type="text" value={values.description} onChange={handleChange} onBlur={handleBlur} className={errors.description && touched.description && "error"}/>
          {errors.description && touched.description && ( <div className="input-feedback">{errors.description}</div>)}
          <P>Job Title</P>
          <br></br>

          <label htmlFor="phone">Phone Number</label> <br></br>
          <Input name="phone" type="number" value={values.phone} onChange={handleChange} onBlur={handleBlur} className={errors.phone && touched.phone && "error"}/>
          {errors.phone && touched.phone && ( <div className="input-feedback">{errors.phone}</div>)}
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