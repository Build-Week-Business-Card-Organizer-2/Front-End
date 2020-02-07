import React,{useState} from 'react';
import {BusinessContainer, Button} from "./StyledCss";


export default function QRCard(){
    const [QR,setQR]=useState('https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example');
    const [form,setForm]=useState({
        person_name:'',
        business_name:'',
        url_string:'',
        category:'',
        card_owner: 1,
        email:'',
        phone_number:''
    })
//WILL NEED TO FIGURE OUT A WAY TO EXPORT DATA OUT FROM HERE INTO SEPERATE COMPONENTS NEED BE
    function handleChange(e){
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
    return(
        <BusinessContainer style={{
            padding: '30px', margin: '30px' 
            }}>
        <div style ={{background: 'rosybrown', width: '300px', height: '30vh', width:'20em', borderRadius: '10px', margin: '10px' }}>
            <div className="QR">
                <img src={QR}/>
            </div>   
            <h1>QR Card</h1>
        </div>
        <form className="QRform">
                <label htmlFor="person_name">Your Name:</label>
                <input onChange={handleChange} type="text" id="person_name" name="person_name"/>

                <label htmlFor="business_name">Your Business's Name:</label>
                <input onChange={handleChange} type="text" id="business_name" name="business_name"/>

                <label htmlFor="category">Type Of Business:</label>
                <input onChange={handleChange} type="text" id="category" name="category"/>
                
                <label  htmlFor="url_string">Card URL:</label>
                <input onChange={handleChange}  type="text" id="url_string" name="url_string"/>

                <label htmlFor="email">Email:</label>
                <input onChange={handleChange}  type="text" id="email" name="email"/>

                <label htmlFor="phone_number">Phone Number:</label>
                <input onChange={handleChange}  type="text" id="phone_number" name="phone_number"/>

                    <Button>Share</Button>
        </form>
        
        </BusinessContainer>
    )
}