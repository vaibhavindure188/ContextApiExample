import React, { useContext } from 'react'
import UserContext from '../context/UserContext.js'

function Profile() {
    const {data} = useContext(UserContext);
    if(!data) return <h1>not logged in</h1>;
  return (
    <h3>
    <br></br>
      Profile:<br></br>
      <ul>
        {
            data.map((val, key)=>{
                return (
                    <li>UserName : {val.user} <br></br>
                        Passward : {val.passward}
                    </li>
                )
            })
        }
      </ul>
      <br/><br/>
      now printing values of keys of object2 
      <br></br>
      <ul>
        {
            data.map((val, key)=>{
                return (
                    <li>UserName : {val.user} <br></br>
                        Passward : {val.passward}
                    </li>
                    
                )
            })
        }
      </ul>
    </h3>
  )  
}

export default Profile
