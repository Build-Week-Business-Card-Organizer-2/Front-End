import React from 'react';


export default function Articles(){
 //MOST LIKELY BRING AXIOS CALL HERE TO PASS PROPS DOWN COMPONENTS
 
    return(
 
        <div style={{display: 'inline-flex'}}> {/*STYLE POSSIBILITY: CARD */}
        <div style={{width: '150px', height: '230px', background:'tomato', margin: '50px'}}>
          <div style={{background: 'white', marginTop: '160px'}}>
              <h2>Finance 101</h2><h4>Conference Event</h4> </div> 
            </div>
        <div style={{width: '150px', height: '230px', background:'tomato', margin: '50px'}}>
            <div style={{background: 'white', marginTop: '130px'}}>
            <h2>Mind Mapping</h2><h4>Conference Event</h4></div>
            </div>
        </div>

    )
}