import React from "react";
import axios from 'axios';
import styles from './Login.css'
class Login extends React.Component{
    state={
        username:"",
        password:""
    }
   
    handleSubmit(username,password){
      if(this.state.username===""||this.state.password===""){
         document.querySelector(".error").innerHTML="Password or Username Require"
      }else{
        const user ={
            username:this.state.username,
            password:this.state.password
          }
          console.log(user)
          document.querySelector(".error").innerHTML=""
          axios.post('',{user}) //Return Backend include {token,name,username,password,loggedIn:true or false}
      }
      
   }
   
    render(){
        var username = username
        var password = password
        return(
            <>
            <div className="background">
            </div>
            <section className="input">
                <div className="inputContainer">
                <h1>LOGIN</h1>
                <div className="inputBox">
                    <input type="text"required="required" name="username"onChange={(value)=>this.setState({username:value.target.value})}/>
                    <span>Username</span>
                </div>
                <div className="inputBox">
                    <input type="text"required="required" name="password"onChange={(value)=>this.setState({password:value.target.value})}/>
                    <span>Password</span>
                </div>
                <h5 className="error"></h5>
                <button className="buttonLogin" onClick={()=>this.handleSubmit(username,password)}>LOGIN</button>
                </div>
            </section>
            </>
        )
    }
}
export default Login;