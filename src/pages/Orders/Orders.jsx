import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';
import moment from "moment"

const Orders = () => {
    const [order,setOrder] = useState([]);
    const getRoomsData = () => {
      axios.get("http://localhost:4000/order/getorders")
      .then(res => {
        console.log(res.data);
        setOrder(res.data.orders)
      }).catch(err => {
        console.log(err)
      })
    }
    useEffect( () => {
        getRoomsData()
    },[]);

    const checkOutUser = (roomId,bookingId) => {
        console.log(roomId)
        axios.put(`http://localhost:5000/booked/checkout/${roomId}`)
        .then(res => {
            console.log("Room res:",res.data)
        }).catch(err => {
            console.log(err)
        })

        axios.delete(`http://localhost:5000/booked/removeroom/${bookingId}`)
        .then(res => {
            console.log("Booking res :",res.data)
        }).catch(error => {
            console.log(error)
        })
    }
    
  return (
    <>
    <h1 style={{textAlign:"center"}}>Orders List</h1>
   <table className="table table-hover">
  <thead>
    <tr>
      <th scope="col">Sr. No</th>
      <th scope="col">User Name</th>
      <th scope="col">Address</th>
      <th scope="col">Phone</th>
      <th scope="col">Product Id</th>
      <th scope="col">Price</th>
      <th scope="col">Quantity</th>
      <th scope="col">isPaid</th>
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
     <td>{order.product._id  }</td>
     <td>{order.product.price}</td>
     <td>{order.quantity}</td>
     <td>{order.isPaid ? "paid" : "---"}</td>
     <td>
     </td>

      
      {/* <td>{isFeatured}</td> */}
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