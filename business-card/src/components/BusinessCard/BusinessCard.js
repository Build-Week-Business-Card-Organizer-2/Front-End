import React, { useState,useEffect} from 'react';
import axiosWithAuth from '../Axios/axiosWithAuth'
import {BrowserRouter as Router, Route, Switch, NavLink, Redirect} from 'react-router-dom';
import MyCardsList from './MyCardsList';
import CardsList from './CardsList';
import CreateCards from './CreateCards'
import {Context} from '../Context/Context';
import axios from 'axios';
import QRCard from './QRCard'
import { DashboardSide, CroppedImg, Navigation, DashboardProfileSection, DashboardMain, Button, ProfileContainer, BusinessContainer, ProfileSection, Flex} from "./StyledCss";


export default function BusinessCard(){
    
    const [profile,setProfile]=useState({
        name:'',
        job_description:'',
        email:'',
        phone_number:'',
        profile_img_src:''
    })

    const [QR,setQR]=useState('');
    const [value,setValue]=useState('');
    const [cards,setCards]=useState([])
    const [collection,setCollection]=useState([]);
    const addToCollection=(item)=>{
        setCollection([...collection,item]);
    }
// added collection and profile as a useEffect parameters
    useEffect(() => {
            axiosWithAuth().get('/api/users/cards')
            .then(response=>{
                setCards(response.data);
                setProfile({
                    name:localStorage.getItem('name'),
                    email:localStorage.getItem('email'),
                    job_description:localStorage.getItem('job_description'),
                    phone_number:localStorage.getItem('phone_number'),
                    profile_img_src:localStorage.getItem('profile_img_src')
                })
            })
            .catch(error=>{
                console.log(error)
            })
            axiosWithAuth().get(`api/users/cards/${localStorage.getItem('userID')}/collection/`)
            .then(res=>{
                console.log(res);
                setCollection([...res.data])
            })
    },[]);
    


    const handleChange=(e)=>{
        setQR(e.target.value);
    }
    const handleSubmit=(e)=>{
        let encodedURL=encodeURI(QR)
        let encode = encodeURIComponent(encodedURL)
        axios.get(`http://api.qrserver.com/v1/read-qr-code/?fileurl=${encode}`)
        .then(response=>{
            setValue(response.data[0].symbol[0].data)
            console.log(response.data[0].symbol[0].data)
        })
        document.querySelector(".input").value="";
    }
    return(
        <DashboardMain className="main">
            <DashboardProfileSection className="profile">
                <ProfileContainer>
                    <ProfileSection className="Yer">
                        <Flex>
                            <CroppedImg>
                                <img alt={`${profile.name}`} className="myimg" src={`${(profile.profile_img_src !== 'null') ? profile.profile_img_src : 'https://api.adorable.io/avatars/200/abott@adorable'}`}/>
                            </CroppedImg>
                            <div className="profile_details">
                                <h1>{profile.name || 'Stranger'}</h1>
                                <h3>{profile.job_description || 'New User'}</h3>
                            </div>
                        </Flex>
                            <div className="bio">
                                <h3>Email: {profile.email || 'ebi@aol.com'}</h3>
                                <h3>Number: {profile.phone_number || '3174444444'}</h3>
                            </div>
                    </ProfileSection>
                </ProfileContainer>
                <Router>      
                    <div className="collections">
                        <Navigation className="item-sub-nav" style={{display:'inline-flex', margin: '50px 0px 50px 0px',paddingLeft: '0px',paddingRight: '0px',}}>
                        <NavLink to="/profile/mycards">My Collections</NavLink>
                        <NavLink to="/profile/findcards">Find a Business Cards</NavLink>
                        <NavLink to="/profile/createcards">Create a Card</NavLink>
                        </Navigation>
                    </div>
                    <Switch>
                        <Context.Provider value={{cards,addToCollection,collection, setCards}}>
                            <Route path="/profile/mycards">
                                <MyCardsList/>
                            </Route>
                            <Route path="/profile/findcards" component={CardsList}/> 
                            <Route path="/profile/createcards" component={CreateCards}/>
                            <Redirect to="/profile/mycards" />
                        </Context.Provider>
                    </Switch> 
                </Router>
            </DashboardProfileSection>
            <DashboardSide>
                <BusinessContainer style={{padding: '30px'}}>
                    <div>
                            <h3>Enter QR code URL<span> (Make sure URL is secure)</span></h3>
                            <input onChange={handleChange} className="input"/>
                            <div className="QR-decoder">{value}</div>
                            <Button onClick={handleSubmit}>Submit</Button>
                    </div>
                </BusinessContainer>
                <QRCard/>
            </DashboardSide>       
        </DashboardMain>
    
    )
}