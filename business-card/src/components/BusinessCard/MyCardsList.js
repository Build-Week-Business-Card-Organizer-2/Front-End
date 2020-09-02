import React,{useContext} from 'react';
import {Context} from "../Context/Context";
import axiosWithAuth from '../Axios/axiosWithAuth';
import {Button, CardsListContainer} from "./StyledCss";

export default function MyCardsList(){
    const collection=useContext(Context).collection;
    return(
        <div>
            {collection.length === 0 ? <h3>Your collection is empty </h3>: <div>
            <h1>My Business Card Collection</h1>
            <div className="cardList">
                {collection.map(item=>(
                    <Item key={item.id} props={item}/>
                ))}
            </div> 
            </div>}
        </div>
    )
}
const Item=({props})=>{
    const handleChange=(e)=>{
        axiosWithAuth().delete(`api/users/cards/${localStorage.getItem('userID')}/${props.id}`)
    }
    return(
        <CardsListContainer className="cards">
            <h1>{props.person_name}</h1>
            <h3>{props.business_name}</h3>
            <h3>{props.email}</h3>
            <h3>{props.phone_number}</h3>
            <Button onClick={handleChange} className="delete">Delete</Button>
            <img src={props.url_string} alt="bussiness-card"/>
        </CardsListContainer>
    )
}