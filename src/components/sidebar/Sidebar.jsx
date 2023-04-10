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
        <Link to="/" style={{ textDecoration: "none" }}>
          <h5 className="logo">Faayda <span style={{color:"red"}}>Bazaar</span></h5>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <DashboardIcon className="icon" />
            <span  onClick={()=>setIcon("dashboard")}>Dashboard</span>
          </li>
          <p className="title">LISTS</p>

          <Link  style={{ textDecoration: "none" }} onClick={()=>setIcon("user")}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>Users</span>
            </li>
          </Link>

          <Link  style={{ textDecoration: "none" }} onClick={()=>setIcon("products")}>
            <li>
              <StoreIcon className="icon" />
              <span>Products</span>
            </li>
          </Link>

          <li onClick={()=>setIcon("addproducts")}>
            {/* <LocalShippingIcon className="icon" /> */}
            <span >Add Product</span>
          </li>
          <p className="title">USEFUL</p>
          <li onClick={()=>setIcon("orders")}>
            <InsertChartIcon className="icon" />
            <span>Bookings</span>
          </li>
          <p className="title">USER</p>
          <li onClick={()=>setIcon("profile")}>
            <AccountCircleOutlinedIcon className="icon" />
            <span>Profile</span>
          </li>
          <li onClick={logout}>
            <ExitToAppIcon className="icon"  />
            <span>Logout</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
