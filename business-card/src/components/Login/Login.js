import React from "react";
import { Formik } from "formik";
import {Link} from "react-router-dom";
import styled from "styled-components";
import axios from 'axios';
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
const Login = (props) => (


  <Formik
    initialValues={{ username: "", password: "" }}
    onSubmit={(values, { setSubmitting }) => {
      setTimeout(() => {
        console.log("Logging in", values);
        axiosWithAuth().post("api/users/login", values)
        .then(response=>{
            console.log(response);
            localStorage.setItem('token',response.data.token);
            localStorage.setItem('userID',response.data.user.id)
            localStorage.setItem('name',response.data.user.name)
            localStorage.setItem('job_description',response.data.user.job_description)
            localStorage.setItem('email',response.data.user.email)
            localStorage.setItem('phone_number',response.data.user.phone_number)
            localStorage.setItem('profile_img_src',response.data.user.profile_img_src)
            localStorage.setItem('token',response.data.token);
            props.history.push("/profile/mycards");
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
          <h1>Log In</h1>
          <br></br>
        <form className="signUpForm" onSubmit={handleSubmit}>
          <label htmlFor="username">Username</label> <br></br>
          <Input name="username" type="text" value={values.username} onChange={handleChange} onBlur={handleBlur} className={errors.username && touched.username && "error"}/>
          {errors.username && touched.username && (<div className="input-feedback">{errors.username}</div>)}
          <br></br>

          <label htmlFor="password">Password</label> <br></br>
          <Input name="password" type="password" value={values.password} onChange={handleChange} onBlur={handleBlur} className={errors.password && touched.password && "error"}/>
          {errors.password && touched.password && (<div className="input-feedback">{errors.password}</div>)}
          <br></br>
          <Button type="submit" disabled={isSubmitting}>
            Log In
          </Button>
          
        </form>
        <p>Don't have an account?</p>
          <Link to="/SignUp">Sign Up</Link>
        </Container>
      );
    }}
  </Formik>
);

export default Login;