import React, { useState,useEffect,useContext, Profiler } from 'react';
import axiosWithAuth from '../Axios/axiosWithAuth'
import {BrowserRouter as Router, Route, Switch,Link} from 'react-router-dom';
import MyCardsList from './MyCardsList';
import CardsList from './CardsList';
import CreateCards from './CreateCards'
import {Context} from '../Context/Context';
import axios from 'axios';
import QRCard from '../NEEDWORK(BUSINESSCARD)/QRCard'
import Articles from '../NEEDWORK(BUSINESSCARD)/Articles'
import './BusinessCardStyles/styles.css'
export default function BusinessCard(props){
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
    const deleteFromCollection=(item)=>{
        
    }
    useEffect(() => {
        axiosWithAuth().get('/api/users/cards')
        .then(response=>{
            setCards(response.data);
            setProfile({
                ...profile,
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
            setCollection([...collection,...res.data])
        })

    },[]);

    const handleChange=(e)=>{
        setQR(e.target.value);
    }
    const handleSubmit=(e)=>{
        axios.get(`http://api.qrserver.com/v1/read-qr-code/?fileurl=${QR}`)
        .then(response=>{
            console.log(response.data[0].symbol[0].data);
            setValue(response.data[0].symbol[0].data)
        })
    }
    return(
        <div>
            <div className="profile">
                <div className="profile_img">
                  <img src={profile.profile_img_src}/>
                </div>
                <div className="profile_details">
                    <h1>Welcome {profile.name}</h1>
                    <h3>{profile.job_description}</h3>
                    <h3>{profile.email}</h3>
                    <h3>{profile.phone_number}</h3>
                </div>
            </div>
            <div className="QRcode">
                    <h3>Enter QR code URL<span> (Make sure URL encoded) </span></h3>
                    <input onChange={handleChange}/>
                    <div>{value}</div>
                    <button onClick={handleSubmit}>Submit</button>
            </div>
        <Router>
            <QRCard/>
            <div className="collections">
                <Link to="/profile/mycards">My Collections</Link>
                <Link to="/profile/findcards">Find a Business Cards</Link>
                <Link to="/profile/createcards">Create a Card</Link>
            </div>
            <Switch>
                <Context.Provider value={{cards,addToCollection,collection,setCards,deleteFromCollection}}>
                    <Route path="/profile/mycards">
                        <MyCardsList/>
                    </Route>
                    <Route path="/profile/findcards" component={CardsList}/> 
                    <Route path="/profile/createcards" component={CreateCards}/>
                </Context.Provider>
            </Switch> 
        </Router>
        
        </div>
    )
}