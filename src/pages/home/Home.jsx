import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import User from './../User/User';
import { useContext } from 'react';
import { AppContext } from "../../context/AuthContext";
import Product from "../Products/Products";
import Dashboard from "../Dashboard/Dashboard";
import AddProducts from "../AddProducts/AddProducts";
import Orders from "../Orders/Orders";

const Home = () => {
  const {icon} = useContext(AppContext)
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          {/* <h1 style={{textAlign:"center"}}>User Lists</h1> */}
           {
            icon==="user"
            ?
            <User/>
            :
            icon==="products"
            ?
            <Product/>
            :
            icon==="addproducts"
            ?
            <AddProducts/>
            :
            icon==="orders"
            ?
            <Orders/>
            :
            icon==="dashboard"
            ?
            <Dashboard/>
            :
            <Dashboard/>

           }
        </div>
      </div>
    </div>
  );
};

export default Home;
