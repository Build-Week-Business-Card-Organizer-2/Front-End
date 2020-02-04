import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch,Link} from 'react-router-dom';
import axios from 'axios';

const Call = (props) => {
    return(<h2>Call this number</h2>)
}
const Email = (props) => {
    return(<h2>Email me here</h2>)
}
const Website = (props) => {
    return(<h2>This is my site</h2>)
}
export default function ProfileCard(){
const [data, setData] = useState([]);
const [query, setQuery] = useState("");

  const handleSearchChange = e => {
    setQuery(e.target.value);
  };

  useEffect(() => {
    axios
      .get(`https://randomuser.me/api/1.0/`)
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

      {console.log("~", data)}
      {data.map(item => (
          <>
        <div style={{border : '1px solid red', margin: '50px', /*display: 'flex'*/}}>
                      <img alt={item.name.first} src={item.picture.large} style={{borderRadius: '50%' }}/>

          <h2>{item.name.first} {item.name.last}</h2>
          <p>{item.gender}</p> {/*change to Profession */}
          <h3>Cards</h3>
          {item.id.value || 'something' } {/*change to amount of card from user */}
        </div>
        <div style={{border : '1px solid red', display: 'inline-flex'}}>
            {/* <li><Link to="/my-phone">Phone</Link></li>
            <li><Link to='/my-email'>Email</Link></li>
            <li><Link to='/my-site'>Globe</Link></li> */}

            <Router>
    <Link to='/somethingWeird'>Something EMAIL</Link>
    <li><Link to="/my-phone">Phone</Link></li>
            <li><Link to='/my-email'>Email</Link></li>
            <li><Link to='/my-site'>Globe</Link></li>
<Switch>
<Route path='/somethingWeird'> 
        <Email/>
      </Route>

      <Route path={`/my-phone`}>
        {/*dynamic path */}
        <Call/>
      </Route>
      <Route path={`/my-email`}>
        {/*dynamic path */}
        <Email/>
      </Route>
      <Route path={`/my-site`}>
        {/*dynamic path */}
        <Website/>
      </Route>
</Switch>
</Router>
            
            
            
            </div>
           
            </>
        
      ))}
    </div>
  );
}