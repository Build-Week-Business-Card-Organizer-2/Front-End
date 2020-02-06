import React from 'react';
import ProfileCard from './ProfileCard';
import Notification from './Notification';
import Articles from './Articles';
import styled, { css } from 'styled-components';
import {BusinessContainer, Button, WrapDiv, CropImg, CropThumb, AlignLeft, ProfileArticle} from "./StyledCss";


export default function QRCard(){
//WILL NEED TO FIGURE OUT A WAY TO EXPORT DATA OUT FROM HERE INTO SEPERATE COMPONENTS NEED BE

    return(
        <BusinessContainer style={{
            padding: '30px', margin: '30px' 
            }}>
        <div style ={{background: 'rosybrown', width: '300px', height: '200px', borderRadius: '10px', margin: '10px' }}>
<h1>QR Card</h1>

        </div>
<form style={{display: 'block', width: '100px',    justifyContent: 'center',}}>
    <input placeholder ="Name"/>
    <input placeholder ="Last"/>
    <input placeholder="number"/>
    <input placeholder="add url here" />
    <input type="checkbox"/><label>Private</label>


        <Button>Share</Button>
</form>
        
        </BusinessContainer>
    )
}