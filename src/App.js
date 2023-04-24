import Home from "./pages/home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import User from "./pages/User/User"
import Products from "./pages/Products/Products.jsx"
import Dashboard from "./pages/Dashboard/Dashboard";
import Edit from "./pages/Edit/Edit";
import AddProducts from "./pages/AddProducts/AddProducts";
import Orders from './pages/Orders/Orders';
import Login from "./pages/login/Login";
import Profile from "./pages/Profile/Profile";
import NavbarC from "./components/CommonNav/NavbarC.jsx";
import Signup from "./pages/SignUp/Signup";
import { AppContext } from "./context/AuthContext";



function App() {
  const { admin } = useContext(AppContext);

  return (
    <div>

      <BrowserRouter>

        <Routes>
          <Route path="/" element={admin._id ? <Home/> : <Login/>}/>
          <Route path="/users" element={<User/>}/>
          <Route path="/products" element={<Products/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/edit/:id" element={<Edit/>}/>
          <Route path="/addproduct" element={<AddProducts/>}/>
          <Route path="/orders" element={<Orders/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/navbar" element={<NavbarC/>}/>
        </Routes>

      </BrowserRouter>
      
    </div>
  );
}

export default App;
