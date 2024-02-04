import React, { useContext, useState } from 'react'
import UserContext from '../context/UserContext.js';

function Login() {
    const [user, setUsername] = useState("");
    const [passward, setPassward] = useState("");

    const {setData} = useContext(UserContext);
    const handlesubmit = (e)=>{
        e.preventDefault();
        const obj1 = {
            "user":user,
            "passward":passward
        }
        const obj2 = {
            "user":"val1",
            "passward":"val2"
        }
        setData([obj1, obj2])
    }
  return (
    <div>
      <input type='text' placeholder='username'
        value={user}
        onChange={(e)=>setUsername(e.target.value)}
      />
      <input type='passward' placeholder='passward'
        
        onChange={(e)=>setPassward(e.target.value)}
      />
      <button type='submit' onClick={handlesubmit}>submit</button>
    </div>
  )
}

export default Login
