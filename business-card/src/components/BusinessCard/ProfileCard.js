import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch,Link} from 'react-router-dom';
import axios from 'axios';
import axiosWithAuth from '../Axios/axiosWithAuth'

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
const [data, setData] = useState();
// const [query, setQuery] = useState("");


  // const handleSearchChange = e => {
  //   setQuery(e.target.value);
  // };

const userID = 5

  useEffect(() => {
    // axiosWithAuth()
    
    //   .get(`https://business-card-collector.herokuapp.com/api/users/`)
    //   .then(res => {const grabProf = res.data.length -1
    //     console.log('grabProf', grabProf )
    //   return axiosWithAuth().get(`https://business-card-collector.herokuapp.com/api/users/${grabProf}`)

    // } )

   axiosWithAuth()
   .get(`https://business-card-collector.herokuapp.com/api/users/${userID}`)
      .then(fee => {

        console.log('One User --->', fee)

        setData(fee.data);
      })
      .catch(err => console.log(err, 'Yo, Try again'));
  }, []);

  return (
    <div>

{
data ? <>


<div style={{border : '1px solid red', margin: '50px', /*display: 'flex'*/}}>
                      {/* <img alt={data.user.name} src={`https://picsum.photos/200`} style={{borderRadius: '50%' }}/> */}

                      <div className="image-cropper" style={{
                         width:' 200px', 
                         height: '200px', 
                         position: 'relative',
                         overflow: 'hidden',
                         display: 'inline-block',
                         borderRadius: '50%'
                      }}>
                      <img alt={data.user.name} src={data.user.profile_img_src || `https://picsum.photos/310`} style={{
                        display: 'inline', margin: '-50px', backgroundSize: 'cover', height: '300px',
                        }}/>
                      </div>

          <h2>{data.user.name}</h2>
          <p>{data.user.job_description}</p> {/*change to Profession */}
          <h3>Cards</h3>
          {/* {data.user.id.value || 'something' } change to amount of card from user */}
        </div>



</>

: <h1>...Loading</h1>
}

<div style={{border : '1px solid red', display: 'inline-flex'}}>
<Router>

<li><Link to="/my-phone">Phone</Link></li>
        <li><Link to='/my-email'>Email</Link></li>
        <li><Link to='/my-site'>Globe</Link></li>
<Switch>

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

    </div>
  );
}