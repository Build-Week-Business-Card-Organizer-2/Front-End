import React, {useState} from 'react';
import ProfileCard from './ProfileCard';


export default function Notification(props){
    const [likeCount, setLikeCount] = useState(0);
    
    const Like = () =>{
        console.log('Liked this post/comment')
    }
    return(
        <div style={{border : '1px solid red', margin: '50px'}}>
        <h3>Profile Post</h3>
        <form>
       <textarea
       type="textarea"
       placeholder="Click to give an update?" />
        </form>
        {/* THIS PART BELOW WILL PROBABLY HAVE TO BE MAPPED FROM API AND BE DYNAMIC*/}
        <div>
<div style={{borderBottom: '1px solid green',}}>
    <h4>Job Posting</h4>
    <p>Junior Sales Associates at Nifling Prods</p>
    <div style={{display: 'inline-flex', cursor: 'pointer'}}>
    <li style={{background: 'orange'}} onClick={Like}>Like</li>
    <li>Comment</li>
    <li>View</li>
    </div>
</div>
<div style={{borderBottom: '1px solid green'}}>
    <h4>Job Posting</h4>
    <p>Oliver accepted a promotion to Sales Manager at Nifflin Rednud</p>
    <i>Your contacts have your updated card</i>
</div>
<div style={{borderBottom: '1px solid green'}}>
    <h4>Sales Blog Post</h4>
    <p>How to sell like a legend</p>
    
</div>
        </div>
        </div>
    )
}