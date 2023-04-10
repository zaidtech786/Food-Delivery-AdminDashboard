import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
// import { AuthContext } from "../../context/AuthContext";
import './Login.scss';
import { AppContext } from "../../context/AuthContext";







const Login = () => {
    const [email, setEmail] = useState(""); 
    const [password, setpassword] = useState("");
    const {dispatch2} = useContext(AppContext)
    const navigate = useNavigate()

const loginUser = () => {
    axios.post("http://localhost:4000/api/userlogin",{
        email,
        password
    })
    .then(res => {
        console.log(res.data)
        dispatch2({type:"ADMIN_LOGIN",payload:res.data.user})
    }).catch(err => {
        console.log(err)
    })
}

  return (
   <>
   <h1>Login Form</h1>
    <div className="login">
        <div className="left">
            <img src="https://img.freepik.com/premium-vector/food-delivery-service-fast-food-delivery-scooter-delivery-service-illustration_67394-869.jpg?w=740"/>
        </div>
        <div className="right">
        <label className="label">Email</label>
          <input
            type="email"
            className="input"
            
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
          <br></br>
          <label className="label">Password</label>
          <input
            type="Password"
            className="input"
            placeholder="Password"
            onChange={(e) => setpassword(e.target.value)}
          />
          <button onClick={loginUser}>Login</button>
        </div>
    </div>
   </>
  );
};

export default Login;
