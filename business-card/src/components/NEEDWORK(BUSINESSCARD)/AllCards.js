import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch, NavLink} from 'react-router-dom';
import axiosWithAuth from '../Axios/axiosWithAuth'
import CardItems from './CardItems';
import MyCardCollection from './MyCardCollection'
import {Navigation} from "./StyledCss";



const MyCards = (props) =>{
  const [refresh, setRefresh] = useState(props.location.data)

  useEffect(()=>{
setRefresh(props.location.data)
  }, [props.location.data])

  console.log('My Cards brought in data', props.location)
  return(
    <>
  <h1>My Cards</h1>

  <form >
        <input
        className="input"
          id="chars"
          text="text"
          onChange={props.location.handleSearchChange}
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



const AllCards =() =>{
const [data, setData] = useState([]);
const [query, setQuery] = useState("");
const [filter, setFilter] = useState([])

  const handleSearchChange = e => {
    console.log('WHAT I TYPED', e.target.value)
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
<Navigation className="item-sub-nav" style={
  {display:'inline-flex', margin: '50px 0px 50px 0px',
  paddingLeft: '0px',
  paddingRight: '0px',
  }}>

<li><NavLink to={{
              pathname: "/my-cards",
              data: filter, 
              query:query,
              handleDelete: {handleDelete},
              handleSearchChange: handleSearchChange
              }}>
           <h1>My Cards</h1></NavLink>
</li>
        <li><NavLink to='/my-collected-cards'><h1>My Collected Cards</h1></NavLink></li>
        </Navigation>
<Switch>

<Route
        exact
        path="/my-cards"
        render={props => <MyCards {...props} />}
      />
  <Route path={`/my-collected-cards`}>
    {/*dynamic path */}
    <MyCardCollection/>
  </Route>
</Switch>
</Router>
    </div>
  );
}


export default AllCards