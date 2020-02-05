import React, {useState, useEffect} from 'react';
import axiosWithAuth from '../Axios/axiosWithAuth'


const MyCardCollection = () =>{
    const  [bringData, setBringData] = useState([])

    useEffect(()=>{
        axiosWithAuth()
        .get(`https://business-card-collector.herokuapp.com/api/users/`)
        .then(res => {
             console.log('response for card collection', res.data)
             setBringData(res.data)
        })
        .catch(err => console.log(err))
           
    }, [])

    console.log('bringdata', bringData)
    return(
        <>
    <h1>My Collection</h1>
    {/* {bringData ? console.log('BRING DATA,', bringData): 'not found yet'} */}
    {console.log(bringData, '<--data brought')}
    {bringData.map(items=>(
<h4>{items.name}</h4>
    ))}
    </>
    )
  }

  export default MyCardCollection