import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link, useNavigate } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";
// import { AppContext } from './../../../../frontend/src/context/AuthContext';
import { AppContext } from './../../context/AuthContext';

const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);
  const {setIcon} = useContext(AppContext);
  const {dispatch2} = useContext(AppContext)
  const navigate = useNavigate();
  const logout = () => {
    dispatch2({type:"ADMIN_LOGOUT"})
  }
  return (
    <div className="sidebar">
      <div className="top">
       
          <h5 className="logo">Faayda <span style={{color:"red"}}>Bazaar</span></h5>
       
      </div>
      <hr />
      <div className="center" style={{color:"#fff"}}>
        <ul >
         
          <p className="title">LISTS</p>

          <li  style={{ textDecoration: "none", }} onClick={()=>setIcon("user")}>
            <li>
              <PersonOutlineIcon className="icon" />
              <Link style={{ textDecoration: "none" ,color:"#fff" }}>Users</Link>
            </li>
          </li>

          <li style={{ textDecoration: "none" }} onClick={()=>setIcon("products")}>
            <li>
              <StoreIcon className="icon" />
              <Link style={{ textDecoration: "none",color:"#fff" }}>Products</Link>
            </li>
          </li>
          
          <li style={{ textDecoration: "none",padding:"0.5rem"  }}  onClick={()=>setIcon("addproducts")}>
            {/* <LocalShippingIcon className="icon" /> */}
            <Link  style={{ textDecoration: "none",color:"#fff" }} >Add Product</Link>
          </li>
          <p className="title">USEFUL</p>
          <li style={{ textDecoration: "none" ,padding:"0.5rem" }}  onClick={()=>setIcon("orders")}>
            <InsertChartIcon className="icon" />
            <Link style={{ textDecoration: "none",color:"#fff" }}>Orders</Link>
          </li>
          <p className="title">USER</p>
          <li style={{ textDecoration: "none",padding:"0.5rem" }}  onClick={()=>setIcon("profile")}>
            <AccountCircleOutlinedIcon className="icon" />
            <Link style={{ textDecoration: "none",color:"#fff" }} >Profile</Link>
          </li>
          <li style={{ textDecoration: "none", padding:"0.5rem" }}  onClick={logout}>
            <ExitToAppIcon className="icon"  />
            <Link style={{ textDecoration: "none",color:"#fff" }}>Logout</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
