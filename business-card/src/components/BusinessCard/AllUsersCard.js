import React, {useState, useEffect} from 'react';
import {Route, Link } from 'react-router-dom'
import axios from 'axios';

export default function AllUsersCards(){
const [data, setData] = useState([]);
const [query, setQuery] = useState("");

  const handleSearchChange = e => {
    setQuery(e.target.value);
  };

  useEffect(() => {
    axios
      .get(`https://randomuser.me/api/1.0/?results=30&seed=may`)
      .then(res => {
        const profiles = res.data.results.filter(
          c =>
            c.name.first.toLowerCase().includes(query.toLowerCase()) ||
            c.name.last.toLowerCase().includes(query.toLowerCase())
        );

        console.log('profiles', profiles);

        setData(profiles);
        console.log(res.data.results, "<-res");
      })
      .catch(err => console.log(err));
  }, [query]);

  return (
    <div>
      <form>
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
            
                      <img alt={item.name.first} src={item.picture.thumbnail} style={{width: '50px', height: '50px'}}/>

          <h2>{item.name.first} {item.name.last}</h2>
          <p>{item.email}</p>
          <p>Business: {item.phone}</p>
          <p>Cell: {item.cell}</p>
        </div>

            // </div>
        
      ))}
    </div>
    </div>
  );
}