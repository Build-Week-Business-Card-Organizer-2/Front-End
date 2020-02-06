import React from 'react';
import styled, { css } from 'styled-components';

export const ProfileContainer = styled.div
`
border: 1px solid #cacaca;
border-radius: 20px ;
box-shadow: 0px 5px 3px 0px #cacaca;
`;

export const BusinessContainer = styled.div
`border: 1px solid #cacaca;
border-radius: 20px ;
box-shadow: 0px 5px 3px 0px #cacaca;
`

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

export const ImageCropper = styled.div
` width: 150px;
height: 150px; 
position: relative;
overflow: hidden;
display: inline-block;
border-radius: 50%;`

export const DashboardMain = styled.div
`
margin: 100px;
display: flex;
flex-direction: row;
justify-content: center;
flex-wrap: nowrap;
align-content: center;

`

export const DashboardProfileSection = styled.div
`
flex: 2,
flexShrink: 3.4`

export const DashboardSide = styled.div
`
flex: 1
`


export const Button = styled.button`
  background: #ac8daf;
  border-radius: 3px;
  border: none;
  color: #F1D4D4;
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