import React from 'react'


const CardItems = (props) =>{

    return(
<div key={props.item.id} style={{display: 'inline-flex'}}>
        <div style={{background : 'tomato', margin: '20px', width: '350px', height: '200px'}}>
            <span style={{cursor: 'pointer'}} onClick={props.handleDelete}> ❌</span>
                      <img alt={props.item.person_name} src='https://picsum.photos/200' style={{width: '50px', height: '50px'}}/>

          <h2>{props.item.person_name}</h2>
          <p>{props.item.business_name}</p>
          <p>{props.item.email}</p>
          <p>Cell: {props.item.phone_number}</p>
        </div>

            </div>
    )
}

export default CardItems

