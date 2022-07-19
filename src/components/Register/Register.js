import React from "react";
import axios from 'axios';
import {Navigate} from 'react-router-dom'
import styles from './Register.css'
class Register extends React.Component{
    state={
        username:"",
        password:"",
        email:"",
        fullname:""
    }
   
    handleSubmit(username,password,email,fullname){
      if(this.state.username===""||this.state.password===""||this.state.email===""){
         document.querySelector(".error").innerHTML="Please Fill The Require Field"
      }else{
        const {username,password,fullname,email} ={
            username:this.state.username,
            password:this.state.password,
            fullname:this.state.fullname,
            email:this.state.email
          }
          console.log(username,password,fullname,email)
          document.querySelector(".error").innerHTML=""
          axios.post('http://localhost:4000/api/register',{username,password,fullname,email})
          .then(res=>{
            console.log(res)
            alert(res.data.message)
           window.location="/Login"
          })
          .catch(err=>{
            console.log(err.response.data)
            document.querySelector(".error").innerHTML=err.response.data.message
          })
          //Return Backend include {token,name,username,password,loggedIn:true or false}
      }
      
   }
   
    render(){
        var username = username
        var password = password
        var email = email
        var fullname = fullname
        return(
            <>
            <div className="background">
            </div>
            <section className="input">
                <div className="inputContainer">
                <h1>REGISTER</h1>
                <div className="inputBox">
                    <input type="text"required="required" name="email"onChange={(value)=>this.setState({email:value.target.value})}/>
                    <span>Email</span>
                </div>
                <div className="inputBox">
                    <input type="text"required="required" name="fullname"onChange={(value)=>this.setState({fullname:value.target.value})}/>
                    <span>Fullname</span>
                </div>
                <div className="inputBox">
                    <input type="text"required="required" name="username"onChange={(value)=>this.setState({username:value.target.value})}/>
                    <span>Username</span>
                </div>
                <div className="inputBox">
                    <input type="password"required="required" name="password"onChange={(value)=>this.setState({password:value.target.value})}/>
                    <span>Password</span>
                </div>
                <h5 className="error"></h5>
                <button className="buttonLogin" onClick={()=>this.handleSubmit(username,password,email,fullname)}>Register</button>
                </div>
            </section>
            </>
        )
    }
}
export default Register;