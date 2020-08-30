import React,{useContext} from 'react';
import {Context} from "../Context/Context";
import axiosWithAuth from '../Axios/axiosWithAuth';
import {Button, CardsListContainer} from "./StyledCss";


export default function CardsList(){
    const cards=useContext(Context).cards;
    console.log("CARDS HERE")
    console.log(cards)
    return(
        <div>
            <h1>Search For A Business Card</h1>

            <div className="cardsList">
                {cards.map(item=>(
                    <div>

                        <h1>{item.id}</h1>
                        <Item key={item.id} props={item}/>
                    </div>
                ))}
            </div>
        </div>
    )
}


const Item=({props})=>{
    console.log("PROOOOOPS")
    console.log(props)
    const addToCollection=useContext(Context).addToCollection;
    const handleChange=()=>{
        addToCollection(props)
        axiosWithAuth().post(`api/users/cards/${localStorage.getItem('userID')}/${props.id}`)
        .then(response=>{
            console.log("CHECHE")
            console.log(response)
        })
    }
    return(
        <CardsListContainer className="cards">
            <h1>{props.person_name}</h1>
            <h3>{props.business_name}</h3>
            <h3>{props.email}</h3>
            <h3>{props.phone_number}</h3>
            <img src={props.url_string}/>
            <Button onClick={handleChange}>Collect</Button>
        </CardsListContainer>
    )
}