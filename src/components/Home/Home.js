import React ,{useState,useEffect}from "react";
import styles from './Home.css';

export default function Home() {
    const[currentUser,setUser]=useState({status:"",fullname:""})
    useEffect(()=>{
        const token = sessionStorage.getItem("accesToken")
            //axios.get('',{headers:{authorization:token}}).then(res =>{
                //const user = {authorization:res.data.authorization,fullname:res.data.fullname} // True or False
               setUser({loggedIn:true,fullname:"Bambang"})
        },[])
    
    /*let statusCheck=()=>{
        /*const token = sessionStorage.getItem("accesToken")
            axios.get('',{headers:{authorization:token}}).then(res =>{
                const user = {authorization:res.data.authorization,fullname:res.data.fullname} // True or False
               return user
            })
        return {authorization:false,fullname:"Bambang"}
    }*/
//const status = statusCheck()
    return (
        <div className="container-fluid img">
            <div className="hero-main-info">
                <div class="p-5 text-center text-white bg-transparent" id="hero-main">
                    <h1 className="mb-3" id="heroTitle">PLAY TRADITIONAL GAME</h1>
                    <h4 className="mb-3" id="heroSubtitle">Selamat Datang {currentUser?.loggedIn ? currentUser?.fullname:""}</h4>
                    <a className="btn btn-warning" href="/list" role="button">PLAY NOW</a>
                </div>
                <div className="scroll-down-btn">
                    <p className="scroll-btn-text text-white text-center">The Story</p>
                </div>
            </div>
        </div>
    )
} 