import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';
import moment from "moment"

const Orders = () => {
    const [order,setOrder] = useState([]);
    const [status,setStatus] = useState("Delivered");
    const getOrders = () => {
      axios.get("http://localhost:4000/api/order/getorders")
      .then(res => {
        console.log(res.data);
        setOrder(res.data.orders)
      }).catch(err => {
        console.log(err)
      })
    }
    useEffect( () => {
      getOrders()
    },[]);

    const sendStatus = (id) => {
      console.log(status);
      axios.put(`http://localhost:4000/api/order/adminstatus/${id}`,{
        status
      }).then(res => {
        console.log(res.data);
      }).catch(err => {
        console.log(err);
      })
    }

  return (
    <>
    <h1 style={{textAlign:"center",marginTop:"2rem"}}>Orders List</h1>
   <table className="table table-hover">
  <thead>
    <tr>
      <th scope="col">Sr. No</th>
      <th scope="col">User Name</th>
      <th scope="col">Address</th>
      <th scope="col">Phone</th>
      <th scope="col">Order Id</th>
      <th scope="col">Price</th>
      <th scope="col">Operations</th>
    </tr>
  </thead>
  <tbody>
    {
     order.map( (order,index) => {
    //   const {title,price,maxPeople,desc,orderNumbers} = order
      return (
        <>
         <tr key={order._id}>
      <th scope="row">{index+1}</th>
      <td>{order.user?.name}</td>
      <td>{order?.user.address}</td>
      <td>{order.user?.phone}</td>
     <td>{order._id  }</td>
     <td>{order.itemsPrice}</td>
     <td>{order.quantity}</td>
     <select onChange={(e) => setStatus(e.target.value)} >
      <option defaultValue="delivered">Delivered</option>
      <option value="on the way">On the Way</option>
      <option value="pending">Pending</option>
     </select>
     <button onClick={() => sendStatus(order._id)}  style={{marginLeft:"1rem",padding:"0.3rem 1rem",outline:"none",borderRadius:"5px",border:"none",backgroundColor:"#16a085",fontWeight:"600"}} >Update</button>
     <td>
     </td>

      

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

export default Orders