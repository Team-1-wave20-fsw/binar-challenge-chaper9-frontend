import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import styles from './NavBar.css';
function NavBar(){
  const[currentUser,setUser]=useState({status:"",fullname:""})
  useEffect(()=>{
    //axios.get('',{headers:{authorization:token}}).then(res =>{
      //const status = res.data.authorization
      //const fullname = res.data.fullname
       // True or False
      setUser({loggedIn:false,fullname:"Fariz"})
  //})
  },[])
  
 /* let statusCheck = () =>{
    /*const token = sessionStorage.getItem("accesToken")
    axios.get('',{headers:{authorization:token}}).then(res =>{
        const status = res.data.authorization // True or False
       return status
    })
    return true
    
}*/
//const status = statusCheck()
    return(
        <>
        <nav className="navbar navbar-expand-lg ">
    <a className="navbar-brand" href="#">LOGO</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav mr-auto left-navbar">
        <li className="nav-item active">
          <a className="nav-link" href="#">HOME<span className="sr-only">(current)</span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">GAME LIST</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">CONTACT</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">ABOUT ME</a>
        </li>
      </ul>
      <ul className="navbar-nav ml-auto right-navbar">
      
        <li className="nav-item active">
          <a className="nav-link" href="#">{currentUser?.loggedIn?currentUser?.fullname.toUpperCase():""}<span className="sr-only">(current)</span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link"onClick={currentUser?.loggedIn ? ()=>console.log("LOGOUT")/*{sessionStorage.removeItem("accessToken")window.location="/home"}*/:()=>console.log("LOGIN")} href={currentUser?.loggedIn? "#":"#"}>{currentUser?.loggedIn? "LOGOUT":"LOGIN"}</a>
        </li>
      
      </ul>
    </div>
  </nav>
        </>
    )
}
export default NavBar;