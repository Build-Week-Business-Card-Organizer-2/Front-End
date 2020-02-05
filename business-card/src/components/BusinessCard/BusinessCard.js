import React from 'react';
import {BrowserRouter as Router, Route, Switch,Link} from 'react-router-dom';
import ProfileCard from './ProfileCard';
import Notification from './Notification';
import Articles from './Articles';
import QRCard from './QRCard';
import AllCards from './AllCards';
import AllUsersCard from './AllUsersCard'


export default function BusinessCard(){
 //MOST LIKELY BRING AXIOS CALL HERE TO PASS PROPS DOWN COMPONENTS

    return(

        // <div style={{height: '100%', overflow: 'hidden', margin: '0px', display: 'flex', boxSizing: 'border-box'}}>
        // {/* <h1>PrivateRoute</h1> */}
        
        // <div style={{height: '100%', display: 'flex', flexDirection: 'column', flexShrink: '0'}}>
        // <ProfileCard /> {/*Needs API data */}
        // <AllCards style={{display: 'inline-flex'}} />
        // <Notification /> {/*Needs API data */}
        // </div>
        // <div style={{height: '100%', display: 'flex', flexDirection: 'column', flexShrink: '0', display: 'inline-flex'}}>
        // <QRCard />
        // <Articles />
        // </div>
// =========

        <div className="main" style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            flexWrap: 'nowrap',
            alignContent: 'center'}}>
        
        <div className="article" style={{
            background: 'burlywood',
            flex: 2,
            flexShrink: 3.4
        }}>
            <Link to='/allusercards'>All Cards from All Users</Link>
        <ProfileCard /> {/*Needs API data */}
        <AllCards/>
        {/* <Notification /> Needs API data */}
        </div>
        <div className="side" style={{background: 'crimson', flex: 1}}>
        <QRCard />
        <Articles />
        </div>
        </div>
        
    )
}