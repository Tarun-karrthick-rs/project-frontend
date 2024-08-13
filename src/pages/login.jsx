import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "./AuthContext"
import HomeNav from "./HomeNav"
var LogIn=()=>{
    var [emailUser,setEmailUser]=useState("")
    var [password,setPassword]=useState("")
    const navigate=useNavigate()
    const { login } = useAuth();
    async function userlog(event) {
        event.preventDefault()
        const record=await axios.post("https://project-backend-cl3o.onrender.com/login",({
            email:emailUser,
            username:emailUser,
            password:password
        }))
        if(record.data==="Login Success")
        {
            login();
            navigate('/home')
        }
        else
        {
            alert(record.data)
        }
    }
    return(
        <div>
            <HomeNav />
        <div className="container">
        <div className="box">
        <center><h3>Log In</h3><br></br>
           <form onSubmit={userlog}>
            <div className="form-floating">
                    <input className="form-control" type="text" placeholder="Username/Email" required onChange={(e)=>setEmailUser(e.target.value)}></input>
                    <label className="form-label">Username/Email</label>
                </div><br></br>
                <div className="form-floating">
                    <input className="form-control" type="password" placeholder="Password" required onChange={(e)=>setPassword(e.target.value)}></input>
                    <label className="form-label">Password</label>
                </div><br></br>
                <button className="btn btn-primary" style={{width:'50%'}}>Log In</button><br></br>
                <span>Don't have an account? <a className="SignUpanchor" href="#">Sign Up</a></span>
            </form></center>
            
        </div>
    </div>
    </div>
    )
}
export default LogIn