import React,{useState} from 'react';
import {BusinessContainer, Button, QRContainer, QRForm} from "../BusinessCard/StyledCss";


export default function QRCard(){
    const [QR,setQR]=useState('https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example');
    const [text,setText]=useState('');
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
        setQR(`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data= name:${form.person_name} | business name:${form.business_name} | Type Of Business:${form.category} | Card URL:${form.url_string} | Email:${form.email} | Phone Number:${form.phone_number}`)
    }
    function myFunction(e) {
        e.preventDefault();
        console.log(QR)
        var copyText = document.getElementById("myInput");
        copyText.select();
        copyText.setSelectionRange(0, 99999)
        document.execCommand("copy");
        setText('Link Coppied')
        document.querySelectorAll(".QR-input").forEach(element => element.value="")
        setQR('https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example')
      }
    return(
        <BusinessContainer style={{
            padding: '30px', marginTop: '30px' 
            }}>
        <QRContainer>
            <div className="QR">
                <img src={QR} alt="QR Code"/>
            </div>   
        </QRContainer>
        <QRForm className="QRform">
           
                <input onChange={handleChange} type="text" className="QR-input" id="person_name" name="person_name" placeholder="Your Name"/>

                <input onChange={handleChange} type="text" className="QR-input" id="business_name" name="business_name" placeholder="Your Business Name"/>

                <input onChange={handleChange} type="text" className="QR-input" id="category" name="category" placeholder="Category"/>
                
                <input onChange={handleChange}  type="text" className="QR-input" id="url_string" name="url_string" placeholder="Card Image Url"/>

                <input onChange={handleChange}  type="text" className="QR-input" id="email" name="email" placeholder="Email Address"/>

                <input onChange={handleChange}  type="text" className="QR-input" id="phone_number" name="phone_number" placeholder="Phone Number"/>

                <label htmlFor="myInput">QR Link</label>
                <input type="text" id="myInput" value={QR}/>
                <Button onClick={myFunction}>Copy Link</Button><span>{text}</span>
        </QRForm>
        
        </BusinessContainer>
    )
}