import React,{useContext} from 'react';
import {Context} from "../Context/Context";
import axiosWithAuth from '../Axios/axiosWithAuth';
import {Button, CardsListContainer, GlobalStyle, ProfileContainer, ProfileSection, Flex, ImageCropper, WrapDiv, CropImg, CropThumb, AlignLeft, ProfileArticle} from "./StyledCss";


export default function CardsList(){
    const cards=useContext(Context).cards;
    return(
        <div>
            <h1>Search For A Business Card</h1>
            <form >
        <input
        className="input"
          id="chars"
          text="text"
          onChange={''/*props.location.handleSearchChange*/}
          // value={props.location.query}
          name="chars"
          placeholder="search by name"
        />
      </form>

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
            console.log(response, '<--hello there');
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