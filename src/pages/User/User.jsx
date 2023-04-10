import React, { useEffect, useState } from 'react';
import "./User.css"
import  axios from 'axios';

const User = () => {
  const [userData,setUserData] = useState([]);
  const getUserData = () => {
    axios.get("http://localhost:4000/api/getusers")
    .then(res => {
      console.log(res.data);
      setUserData(res.data.users)
    }).catch(err => {
      console.log(err)
    })
  }
  useEffect( () => {
    getUserData()
  },[])
    // const [user,setUser] = use
  return (
    <>
    <h1 style={{textAlign:"center"}}>User Lists</h1>
   <table className="table table-hover">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      {/* <th scope="col">UserName</th> */}
      <th scope="col">City</th>
      <th scope="col">Email</th>
      <th scope="col">Phone</th>
    </tr>
  </thead>
  <tbody>
    {
     userData.map( (user,index) => {
      const {name,userName,email,city,phone} = user
      return (
        <>
         <tr>
      <th scope="row">{index+1}</th>
      <td>{name}</td>
      {/* <td>{userName}</td> */}
      <td>{city}</td>
      <td>{email}</td>
      <td>{phone}</td>
    </tr>
        </>
      )
     })
    }
   
  </tbody>
</table>
</>
  )
}

export default User