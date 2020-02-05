import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch,Link} from 'react-router-dom';
import axios from 'axios';

// const

const MyCards = () =>{
  return(
    <>
  <h1>My Cards</h1>

  <form>
        <label>Search...</label>
        <input
          id="chars"
          text="text"
          // onChange={handleSearchChange}
          // value={query}
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

  <h1>Output My Cards</h1>
      {/* {console.log("~", data)}
      {data.map(item => (
        //   <div style={{display: 'inline-flex'}}>
        <div style={{background : 'tomato', margin: '20px', width: '350px', height: '200px'}}>
            <span style={{cursor: 'pointer'}} onClick={handleDelete}> ❌</span>
                      <img alt={item.name.first} src={item.picture.thumbnail} style={{width: '50px', height: '50px'}}/>

          <h2>{item.name.first} {item.name.last}</h2>
          <p>{item.email}</p>
          <p>Business: {item.phone}</p>
          <p>Cell: {item.cell}</p>
        </div>

            // </div>
        
      ))} */}
    </div>

  </>
  
  
  )
}

const MyCollection = () =>{
  return(<h1>My Collection</h1>)
}

const AllCards =() =>{
const [data, setData] = useState([]);
const [query, setQuery] = useState("");

  const handleSearchChange = e => {
    setQuery(e.target.value);
  };

  const handleDelete = e =>{
      console.log('Delete Card')
  }

  useEffect(() => {
    axios
      .get(`https://randomuser.me/api/1.0/?results=5&seed=may`)
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
<Router>
<div style={{display:'inline-flex'}}>
<li><Link to="/my-cards"><h1>My Cards</h1></Link></li>
        <li><Link to='/my-collected-cards'><h1>My Collected Cards</h1></Link></li>
        </div>
<Switch>

  <Route path={`/my-cards`}>
    {/*dynamic path */}
    <MyCards/>
  </Route>
  <Route path={`/my-collected-cards`}>
    {/*dynamic path */}
    <MyCollection/>
  </Route>
</Switch>
</Router>

<div><h2>Hello there</h2></div>


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
        //   <div style={{display: 'inline-flex'}}>
        <div style={{background : 'tomato', margin: '20px', width: '350px', height: '200px'}}>
            <span style={{cursor: 'pointer'}} onClick={handleDelete}> ❌</span>
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


export default AllCards