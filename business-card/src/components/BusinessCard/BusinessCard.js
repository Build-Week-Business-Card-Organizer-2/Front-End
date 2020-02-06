import React from 'react';
import {BrowserRouter as Router, Route, Switch,Link} from 'react-router-dom';
import ProfileCard from './ProfileCard';
import Notification from './Notification';
import Articles from './Articles';
import QRCard from './QRCard';
import AllCards from './AllCards';
import AllUsersCard from './AllUsersCard'
import {DashboardMain, DashboardProfileSection, DashboardSide, Flex, WrapDiv, CropImg, CropThumb, AlignLeft, ProfileArticle} from './StyledCss';



export default function BusinessCard(){
 //MOST LIKELY BRING AXIOS CALL HERE TO PASS PROPS DOWN COMPONENTS

    return(

        <DashboardMain className="main">
        
        <DashboardProfileSection className="article" style={{
            // background: 'burlywood',
            // flex: 2,
            // flexShrink: 3.4
        }}>
            <Link to='/allusercards'>All Cards from All Users</Link>
        <ProfileCard /> {/*Needs API data */}
        <AllCards/>
        {/* <Notification /> Needs API data */}
        </DashboardProfileSection>
        <DashboardSide className="side" style={{
            background: 'crimson', flex: 1
            }}>
        <QRCard />
        <Articles />
        </DashboardSide>
        </DashboardMain>
        
    )
}