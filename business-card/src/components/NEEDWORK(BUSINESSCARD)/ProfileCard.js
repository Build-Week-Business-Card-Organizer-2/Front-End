import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch,Link} from 'react-router-dom';
import axios from 'axios';
import axiosWithAuth from '../Axios/axiosWithAuth'
import {Button, ProfileContainer, ProfileSection, Flex, ImageCropper, WrapDiv, CropImg, CropThumb, AlignLeft, ProfileArticle} from "./StyledCss";


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

const userID = 1;

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

  console.log(data, '<-data')
  return (
    <ProfileContainer>

{
data ? <>


<ProfileSection className="profile">
                      {/* <img alt={data.user.name} src={`https://picsum.photos/200`} style={{borderRadius: '50%' }}/> */}
{`${data}`}
          <Flex className="flexy">
               {/* <ImageCropper className="image-cropper">
                      <img alt={data.user.name} src={data.user.profile_img_src || `https://picsum.photos/310`} style={{
                        display: 'inline', margin: '-50px', backgroundSize: 'cover', height: '300px',
                        }}/>
                      </ImageCropper> */}

              <div className="description">
  <h2>{data.user.name}</h2>
  <p>{data.user.job_description}</p> {/*change to Profession */}

              </div>
              

            <div>
<h3>Cards</h3>
<p>{data.collection.length === 0 ? data.collection.length + 1 : data.collection.length}</p>
<div><Button>Edit</Button></div>
            </div>

          </Flex>
          <div className="bio">
          <h2>Bio</h2>
          <p>This is the Bio section and it is hard coded. Somehow we have missed this paramater.</p>
         </div>
          {/* {data.user.id.value || 'something' } change to amount of card from user */}
        </ProfileSection>



</>

: <h1>...Loading</h1>
}

<div style={{border : '1px solid red', display: 'inline-flex'}}>
<Router>

        {/* <li><Link to="/my-phone">Phone</Link></li>
        <li><Link to='/my-email'>Email</Link></li>
        <li><Link to='/my-site'>Globe</Link></li> */}
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

    </ProfileContainer>
  );
}