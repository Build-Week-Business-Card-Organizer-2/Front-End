import React,{useState,useContext} from 'react';
import {Context} from "../Context/Context";
import axiosWithAuth from '../Axios/axiosWithAuth';
import {CreateCardForm, Button} from "./StyledCss";


export default function CreateCards(props){
    const [form,setForm]=useState({
        person_name:'',
        business_name:'',
        url_string:'',
        category:'',
        card_owner: 1,
        email:'',
        phone_number:''
    })
    const cards=useContext(Context).cards;
    const setCards=useContext(Context).setCards;
    const handleChange=(e)=>{
        if(e.target.name==='person_name'){
            setForm({
                ...form,
                person_name:e.target.value
            })
        }else if(e.target.name==='business_name'){
            setForm({
                ...form,
                business_name:e.target.value
            })
        }else if(e.target.name==='category'){
            setForm({
                ...form,
                category:e.target.value
            })
        }else if(e.target.name==='url_string'){
            setForm({
                ...form,
                url_string:e.target.value
            })
        }else if(e.target.name==='email'){
            setForm({
                ...form,
                email:e.target.value
            })
        }else if(e.target.name==='phone_number'){
            setForm({
                ...form,
                phone_number:e.target.value
            })
        }
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        setCards([...cards,form]);
        axiosWithAuth().post('/api/users/cards', form)
        .then(res=>{
            console.log(res);
        })
        .catch(error=>{
            console.log(error);
        })
        props.history.push("/profile/findcards");
    }
    return (
        <div className="createCard">
            <CreateCardForm>
                <h1>Create a Business Card</h1>
            
                <input onChange={handleChange} type="text" id="person_name" name="person_name" placeholder="Your Name"/>

    
                <input onChange={handleChange}  type="text" id="business_name" name="business_name" placeholder="Your Business Name"/>

          
                <input onChange={handleChange} type="text" id="category" name="category" placeholder="Category"/>
                
        
                <input onChange={handleChange} type="text" id="url_string" name="url_string" placeholder="Card Image URL"/>

           
                <input onChange={handleChange} type="text" id="email" name="email" placeholder="Email"/>

        
                <input onChange={handleChange} type="text" id="phone_number" name="phone_number" placeholder="Phone Number"/>

                <Button onClick={handleSubmit}>Submit</Button>

            </CreateCardForm>
        </div>
    )
}





