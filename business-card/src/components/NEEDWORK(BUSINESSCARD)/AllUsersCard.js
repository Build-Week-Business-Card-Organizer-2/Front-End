import React, {useState, useEffect} from 'react';
import axiosWithAuth from '../Axios/axiosWithAuth'
import {CardsListContainer} from "../BusinessCard/StyledCss";

export default function AllUsersCard2(){
const [data, setData] = useState([]);
const [query, setQuery] = useState("");

  const handleSearchChange = e => {
    setQuery(e.target.value);
  };

  useEffect(() => {
    axiosWithAuth()
      .get(`https://business-card-collector.herokuapp.com/api/users/cards`)
      .then(res => {
        console.log(res, '<---results')
        console.log(res.data)
        const profiles = res.data.filter(
          c =>
            c.person_name.toLowerCase().includes(query.toLowerCase())
        );

        console.log('profiles', profiles);

        setData(profiles);
        console.log(res.data, "<-res");
      })
      .catch(err => console.log(err, 'Yo, Try again'));
  }, [query]);

  const addToUserListHandler = e =>{
      console.log('add this to my list')
  }

  return (
    <div> 
        <h2>Search all cards</h2>
      <form>
        <input
         className="input navInput"
          id="chars"
          text="text"
          onChange={handleSearchChange}
          value={query}
          name="chars"
          placeholder="search by name"
        />
      </form>
<div style={{
    justifyContent: 'center',
    flexGrow: 0,
    display: 'flex',
    flexWrap: 'wrap'
}}>
      {console.log("~", data)}
      {data.map(item => (
        
        <CardsListContainer className="all cards" style={{ margin: '20px', width: '350px', fontSize: '16px',
        padding: '20px'}}>
            <span onClick={addToUserListHandler} style={{cursor: 'pointer'}}> ⭐️</span>
                      <img alt={item.person_name} src='https://picsum.photos/200' style={{width: '50px', height: '50px'}}/>

          <h3>{item.person_name}</h3>
          <h4>{item.business_name}</h4>
          <p>{item.email}</p>
        <p>{item.category}</p>

        </CardsListContainer>        
      ))}
    </div>
    </div>
  );
}