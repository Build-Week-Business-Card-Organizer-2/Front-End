import React from 'react';
import ProfileCard from './ProfileCard';
import AllCards from './AllCards';
import {DashboardMain, DashboardProfileSection, DashboardSide, Flex, WrapDiv, CropImg, CropThumb, AlignLeft, ProfileArticle} from './StyledCss';



export default function BusinessCard(){
 //MOST LIKELY BRING AXIOS CALL HERE TO PASS PROPS DOWN COMPONENTS

    return(

        <DashboardMain className="main">
        
        <DashboardProfileSection className="article">
        <ProfileCard /> Needs API data
        <AllCards/>
        {/* <Notification /> Needs API data */}
        </DashboardProfileSection>
        <DashboardSide>
        {/* <QRCard /> */}
        {/* <Articles /> */}
        </DashboardSide>
        </DashboardMain>
        
    )
}