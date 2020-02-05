import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch,Link} from 'react-router-dom';
import axios from 'axios';
import axiosWithAuth from '../Axios/axiosWithAuth'
import CardItems from './CardItems';

// We need to continuously re

const MyCards = (props) =>{
  const [refresh, setRefresh] = useState(props.location.data)

  useEffect(()=>{
setRefresh(props.location.data)
  }, [props.location.data])

  console.log('My Cards brought in data', props.location)
  return(
    <>
  <h1>My Cards</h1>

  <form>
        <label>Search...</label>
        <input
          id="chars"
          text="text"
          onChange={props.location.handleSearchChange}
          // value={props.location.query}
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


{console.log("~", props.location.data)}
      {
      props.location.data.map(item => ( <CardItems item={item} key={item.id} />))}
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
const [filter, setFilter] = useState([])

  const handleSearchChange = e => {
    console.log(e.target.value)
    console.log(e.currentTarget)
    console.log(query)
    console.log('filter ---->', filter)

    const filterData = data.filter(
      c =>
        c.person_name.toLowerCase().includes(e.target.value.toLowerCase())
)
console.log('changes on filter data', filterData)
setFilter(filterData);

setQuery(e.target.value);



// if (!e.target.value){
//   setFilter(data); //set filter to data again. 
// } 
// else {
//   setFilter(filterData);
// }
// setFilter(filterData);
  };

  const handleDelete = e =>{
      console.log('Delete Card')
  }

  const userID = 2
  useEffect(() => {
    axiosWithAuth()
      .get(`https://business-card-collector.herokuapp.com/api/users/cards/${userID}/collection`)
      .then(res => {
        const profiles = res.data
        // .filter(
        //   c =>
        //     c.person_name.toLowerCase().includes(query.toLowerCase()));

        setData(profiles);
        setFilter(profiles);
        console.log(res.data, "<-res");
      })
      .catch(err => console.log(err));
  }, []);

  useEffect(()=>{
setFilter(filter)

  }, [filter])

  return (
    <div>

      
<Router>
<div style={{display:'inline-flex'}}>

<li><Link to={{
              pathname: "/my-cards",
              data: filter, 
              query:query,
              handleDelete: {handleDelete},
              handleSearchChange: handleSearchChange
              }}>
           <h1>My Cards</h1></Link>
</li>
        <li><Link to='/my-collected-cards'><h1>My Collected Cards</h1></Link></li>
        </div>
<Switch>

<Route
        exact
        path="/my-cards"
        render={props => <MyCards {...props} />}
      />
  <Route path={`/my-collected-cards`}>
    {/*dynamic path */}
    <MyCollection/>
  </Route>
</Switch>
</Router>


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