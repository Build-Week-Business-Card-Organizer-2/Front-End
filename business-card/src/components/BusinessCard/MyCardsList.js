import React,{useContext} from 'react';
import {Context} from "../Context/Context";

export default function MyCardsList(){
    const collection=useContext(Context).collection;
    return(
        <div>
            <h1>My Business Card Collection</h1>
            <div className="cardList">
                {collection.map(item=>(
                    <Item key={item.id} props={item}/>
                ))}
            </div>
        </div>
    )
}
const Item=({props})=>{
    return(
        <div className="cards">
            <h1>Personal Name: {props.person_name}</h1>
            <h3>Business Name: {props.business_name}</h3>
            <h3>Email: {props.email}</h3>
            <h3>Phone Number: {props.phone_number}</h3>
            <img src={props.url_string}/>
        </div>
    )
}