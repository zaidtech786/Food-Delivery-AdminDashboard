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



function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>

      <BrowserRouter>

        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/user" element={<User/>}/>
          <Route path="/products" element={<Products/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/edit/:id" element={<Edit/>}/>
          <Route path="/addproducts" element={<AddProducts/>}/>
          <Route path="/orders" element={<Orders/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>

      </BrowserRouter>
      
    </div>
  );
}

export default App;
