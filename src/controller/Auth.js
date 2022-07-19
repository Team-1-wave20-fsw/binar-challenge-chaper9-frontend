import React from 'react';
import Login from "../components/Login/Login"
import Register from '../components/Register/Register';
class LoginPage extends React.Component{
    render(){
        return(
            <Login/>
        )
    }
}
class RegisterPage extends React.Component{
    render(){
        return(
            <Register/>
        )
    }
}
export {LoginPage,RegisterPage};