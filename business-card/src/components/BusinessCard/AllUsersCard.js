import React, {useState, useEffect} from 'react';
import {Route, Link } from 'react-router-dom'
import axios from 'axios';
import axiosWithAuth from '../Axios/axiosWithAuth'

export default function AllUsersCard2(){
const [data, setData] = useState([]);
const [query, setQuery] = useState("");

console.log('Hello Crazy Wolrd')
  const handleSearchChange = e => {
    setQuery(e.target.value);
  };

  useEffect(() => {
    axiosWithAuth()
      .get(`https://business-card-collector.herokuapp.com/api/users/cards`)
      .then(res => {
        console.log(res, '<---results')
        // const profiles = res.data.results.filter(
        //   c =>
        //     c.name.first.toLowerCase().includes(query.toLowerCase()) ||
        //     c.name.last.toLowerCase().includes(query.toLowerCase())
        // );

        // console.log('profiles', profiles);

        // setData(profiles);
        // console.log(res.data.results, "<-res");
      })
      .catch(err => console.log(err, 'Yo, Try again'));
  }, [query]);

  const addToUserListHandler = e =>{
      console.log('add this to my list')
  }

  return (
    <div> 
        <h2>Hi Crazy World</h2>
      {/* <form>
        <label>Search...</label>
        <input
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
        
        <div style={{background : 'tomato', margin: '20px', width: '350px', height: '200px'}}>
            <span onClick={addToUserListHandler} style={{cursor: 'pointer'}}> ⭐️</span>
                      <img alt={item.name.first} src={item.picture.thumbnail} style={{width: '50px', height: '50px'}}/>

          <h2>{item.name.first} {item.name.last}</h2>
          <p>{item.email}</p>
          <p>Business: {item.phone}</p>
          <p>Cell: {item.cell}</p>
        </div>

            // </div>
        
      ))}
    </div> */}
    </div>
  );
}