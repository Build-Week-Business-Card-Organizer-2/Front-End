import React,{useState,useContext} from 'react';
import {Context} from "../Context/Context";
import axiosWithAuth from '../Axios/axiosWithAuth'

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
    const [QR,setQR]=useState('https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example');

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
        setQR(`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data= name : ${form.person_name} | business name : ${form.business_name} | Type Of Business : ${form.category} | Card URL : ${form.url_string} | Email : ${form.email} | Phone Number: ${form.phone_number}`)
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
            <div>
                <img src={QR}/>
            </div>
            <form>
                <h1>Create a Business Card</h1>
                <label htmlFor="person_name">Your Name:</label>
                <input onChange={handleChange} type="text" id="person_name" name="person_name"/>

                <label htmlFor="business_name">Your Business's Name:</label>
                <input onChange={handleChange}  type="text" id="business_name" name="business_name"/>

                <label htmlFor="category">Type Of Business:</label>
                <input onChange={handleChange} type="text" id="category" name="category"/>
                
                <label htmlFor="url_string">Card URL:</label>
                <input onChange={handleChange} type="text" id="url_string" name="url_string"/>

                <label htmlFor="email">Email:</label>
                <input onChange={handleChange} type="text" id="email" name="email"/>

                <label htmlFor="phone_number">Phone Number:</label>
                <input onChange={handleChange} type="text" id="phone_number" name="phone_number"/>

                <button onClick={handleSubmit}>Submit</button>

            </form>
        </div>
    )
}





