import React,{useContext} from 'react';
import {Context} from "../Context/Context";
import axiosWithAuth from '../Axios/axiosWithAuth'

export default function CardsList(){
    const cards=useContext(Context).cards;
    return(
        <div>
            <h1>Search For A Business Card</h1>
            <div className="cardsList">
                {cards.map(item=>(
                    <Item key={item.id} props={item}/>
                ))}
            </div>
        </div>
    )
}


const Item=({props})=>{
    const addToCollection=useContext(Context).addToCollection;
    const handleChange=()=>{
        addToCollection(props)
        axiosWithAuth().post(`api/users/cards/${localStorage.getItem('userID')}/${props.id}`)
        .then(response=>{
            console.log(response);
        })
    }
    return(
        <div className="cards">
            <h1>Personal Name: {props.person_name}</h1>
            <h3>Business Name: {props.business_name}</h3>
            <h3>Email: {props.email}</h3>
            <h3>Phone Number: {props.phone_number}</h3>
            <img src={props.url_string}/>
            <button onClick={handleChange}>Collect</button>
        </div>
    )
}