import React from 'react';
import styled, { css } from 'styled-components';


export const ProfileContainer = styled.div
`
border: 1px solid #f3f3f3;
border-radius: 20px ;
box-shadow: 0px 5px 5px -4px #cacaca;


h1{
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 23px;

color: #343C47;
mix-blend-mode: normal;
}
.profile_details{
  text-align: left;
}
h3{
font-style: normal;
font-weight: normal;
font-size: 18px;
line-height: 16px;
}
`;

export const BusinessContainer = styled.div
`border: 1px solid #f3f3f3;
border-radius: 20px ;
box-shadow: 0px 5px 5px -4px #cacaca;`;


export const ProfileSection = styled.div
`padding: 50px,
border: 1px solid red


div{
    margin: 50px
}
.bio{
    margin-top: -20px;
    margin-left: 100px;
    text-align: left;
}
  `;

export const Flex = styled.div
`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin: 50px;
  flex-direction: row;

  .flexy{
      margin-bottom: -50px;
  }
div {
    margin: 0px 20px 0px 20px;
}
.description {
    text-align: left;
}
`;

export const CroppedImg = styled.div
`
img {
  border-radius: 50%;
  width: 150px;
  height: 150px;
  object-fit: cover;
}`;

export const ImageCropper = styled.div
` width: 150px;
height: 150px; 
position: relative;
overflow: hidden;
display: inline-block;
border-radius: 50%;`

export const DashboardMain = styled.div
`
font-family: Ubuntu;
margin: 100px;
margin-top: 50px;
display: flex;
flex-direction: row;
justify-content: center;
flex-wrap: nowrap;
align-content: center;

`

export const DashboardProfileSection = styled.div
`
flex: 2;
flexShrink: 3.4;`

export const DashboardSide = styled.div
`

`

export const Navigation = styled.div
`
display: flex;
justify-content: space-between;
align-items: center;
padding: 0 16px;
border-bottom: 3px solid #1EA7FC;
background: #EEEEEE;
margin-bottom: 32px;
flex: 1;
width: 100%;

a {
    text-decoration: none;
    font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 16px;
/* identical to box height */


/* Text Color/Bright Gray */

color: #343C47;
}


li{
    list-style-type: none;

    a {
        background: blue;
        text-decoration: none;
    }

    h1{
        font-style: normal;
font-weight: normal;
line-height: 14px;
color: black;
font-size: 20px;
padding: 0px 72px 0px 72px;
    }
}

a.item-sub-nav{
    background: green;
    text-decoration: none;
}

.item-sub-nav{
    border-bottom: 3px solid #1EA7FC;
    justify-content: center;
    margin: 50px 0px 50px 0px;
    
    display: inline-flex;
    margin: 50px 0px;
    padding-left: 0px;
    padding-right: 0px;
    width: 100%;
}

.navbar-list a.chosen,
.navbar-list a:hover {
  border-bottom: 1px solid #F14B31;
}

li .item-sub-nav a {
    color: #a5a5a5;
    text-decoration: none;
    padding: 12px;
  }
  
  .item-sub-nav a.active {
    color: #1c5d76;
    font-weigth: bold;
  }
  
  .item-sub-nav a:first-of-type {
    margin-right: 32px;
  }

nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 16px;
    border-bottom: 1px solid #efefef;
    margin-bottom: 32px;
  }

`

export const QRContainer = styled.div
`
background: #1EA7FC;
 width: 300px;
   width:20em;
    border-radius: 10px;
     margin: 10px; 

`

export const QRForm = styled.form
`
input {
    outline: 0;
    border-width: 0 0 1px;
    border-color: black;
    width: 250px;
  }
  input:focus {
    border-color: #1EA7FC
    border-width: 0 0 3px;
  }

`

export const CreateCardForm = styled.form
`
input {
    outline: 0;
    border-width: 0 0 1px;
    border-color: black;
    height: 50px;

  }
  input:focus {
    border-color: #1EA7FC
    border-width: 0 0 3px;
  }

`

export const CardsListContainer = styled.button
`

width: 290px;
background: #FAFAFA;
box-shadow: 0px 5px 5px -4px #cacaca;
border: 1px solid #f3f3f3;
border-radius: 20px;
font-family: 'Ubuntu', sans-serif;

h1{

font-style: normal;
font-weight: normal;
font-size: 24px;
line-height: 28px;
}

h3{
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 20px;
  color: rgba(0, 0, 0, 0.6);
}

.delete{
  background: #fb7171;
}

.all{
  margin: 20px;
  width: 350px;
  font-size: 20px;
  padding: 20px;
}
`


export const Button = styled.button`
background: #1EA7FC;
border-radius: 3px;
  border: none;
  color: color;
  padding: 0.5em 2em;
  margin: 1em;
 
`;

 const Container = styled.div`
  text-align: center;
`

export const WrapDiv = styled.div`
border-radius:  10px;
border: 1px solid #707070;
margin: 40px;
padding: 10px;
box-shadow: 7px 10px #DACCDB;



img{
    height: 150px
}

h3{
 color: #9F9F9F;
 line-height: 0;
}

a{
   text-decoration: none;
   color: #707070;
  }

  .stars{
      color: #E22424;
  }

  .city{
     font-size: .9em;
  }
`;

export const AlignLeft = styled.div`
position: absolute;
`

export const CropImg = styled.div`

width: 100px;
    height: 100px;
    position: relative;
    overflow: hidden;
    margin-left: 50px;
    margin-top: 20px;

`;

export const CropThumb = styled.div`

width: 100px;
    height: 100px;
    position: relative;
    overflow: hidden;
    margin-left: 50px;
    margin-top: 20px;

`;

export const ProfileArticle = styled.div`
img{
    width: 100px;
}

.top-section{
    display: flex;
    margin-bottom: 50px;
}

.left{
    width: 30%;
}

.right{
    width: 50%;
    text-align: left;

    span{
        
    }
}

h3{
    color: #9F9F9F;
   
   }

   .bottom-row{
       display: inline-flex;
       
   }

   .services{
    text-align: left;
    margin-right: 100px;
   }

`;



// export default (Button, WrapDiv)