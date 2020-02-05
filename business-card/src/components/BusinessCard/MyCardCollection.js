import React, {useState, useEffect} from 'react';
import axiosWithAuth from '../Axios/axiosWithAuth'
import { Container, Header, List, Dropdown } from "semantic-ui-react";

const mockData = [
    {name: 'Ebi',
age: '29',
status: 'awesome'},
{name: 'PPrincess Consuela', 
age: 39,
status: 'carefree'}

    
]

const DropdownExampleSearchSelection = () => (
    <Dropdown
      placeholder='Select Country'
      fluid
      search
      selection
      options={mockData}
    />
  )

const MyCardCollection = ({children}) =>{
    const  [bringData, setBringData] = useState([])

    useEffect(()=>{
        axiosWithAuth()
        .get(`https://business-card-collector.herokuapp.com/api/users/`)
        .then(res => {
             console.log('response for card collection', res.data)
             setBringData(res.data)
        })
        .catch(err => console.log(err))
           
    }, [])

    console.log('bringdata', bringData)
    return(
    <div>
    <h1>My Collection</h1>
    {/* {bringData ? console.log('BRING DATA,', bringData): 'not found yet'} */}
    <Container style={{ margin: 20 }}>
    <Header as="h3">This example is powered by Semantic UI React 😊</Header>
    <List bulleted>
      <List.Item
        as="a"
        content="💌 Official documentation"
        href="https://react.semantic-ui.com/"
        target="_blank"
      />
      <List.Item
        as="a"
        content="💡 StackOverflow"
        href="https://stackoverflow.com/questions/tagged/semantic-ui-react?sort=frequent"
        target="_blank"
      />

{/* <Dropdown
    placeholder='Select Country'
    fluid
    search
    selection
    options={mockData}
  /> */}
    </List>
    {children}
</Container>


    {bringData.map(items=>(
<h4>{items.name}</h4>
    ))}
    </div>
    )
  }

  export default MyCardCollection