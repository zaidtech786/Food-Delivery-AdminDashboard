
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import "./Product.css"
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../../context/AuthContext';

const Hotel = () => {
    const [data,setData] = useState([]);
    const {setIcon} = useContext(AppContext)
   
    const navigate = useNavigate();


    const getData = () => {
      axios.get("http://localhost:4000/api/food/getallfoods")
      .then(res => {
        console.log(res.data);
        setData(res.data.foods)
      }).catch(err => {
        console.log(err)
      })
    }
    useEffect( () => {
        getData()
    },[])

    const deleteProduct = (id) => {
      axios.delete(`http://localhost:4000/api/food/removefood/${id}`)
      .then( (res) => {
        console.log(res.data)
      }).catch(err => {
        console.log(err)
      })
      const filterData = data.filter(product => {
        return product._id!==id
      });
      setData(filterData)
    }
    return (
      <>
      <div className='top'>
      <h1 style={{textAlign:"center"}}>Products List</h1>
      {/* <button className='btn_add' onClick={()=>setIcon("addhotel")}>Add Hotel</button> */}
      </div>
     <table className="table table-hover">
    <thead>
      <tr>
        <th scope="col">Sr. No</th>
        <th scope="col">Name</th>
        <th scope="col">Price</th>
        <th scope="col">Description</th>
        <th scope="col">Category</th>
        <th scope="col">Stock</th>
        <th scope="col">Discount</th>
        <th scope="col">Operations</th>
      </tr>
    </thead>
    <tbody>
      {
       data.map( (data,index) => {
        const {name,price,desc,category,stock,discount} = data
        return (
          <>
           <tr key={data._id}>
        <th scope="row">{index+1}</th>
        <td>{name}</td>
        <td>{price}</td>
        <td>{desc}</td>
        <td>{category}</td>
        <td>{stock}</td>
        <td>{discount}</td>
          <div className='OperBtns' style={{display:"flex",marginTop:"1rem"}}>
          <button style={{marginRight:"10px",padding:"0.3rem 1rem",outline:"none",borderRadius:"5px",border:"none",backgroundColor:"#16a085",fontWeight:"600"}} onClick={() => navigate(`/edit/${data._id}`)}>Edit</button>
          <button style={{padding:"0.3rem 1rem",outline:"none",borderRadius:"5px",border:"none",backgroundColor:"#c0392b",fontWeight:"600"}} onClick={() => deleteProduct(data._id)}>Delete</button>
          </div>
       
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

export default Hotel