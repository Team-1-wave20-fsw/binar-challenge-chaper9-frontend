import React from 'react'
import NavBar from '../Navbar/Navbar';
import "./UpdateProfile.css"
import axios from 'axios';


class UpdateProfile extends React.Component {
    state= { 
        email:"",
        fullname:"",
        bio:"",
        city:"",
        social:""
    }

   
   handleInputChange = (event) =>{
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
        [name] : value
    });
   }


   
   handleSubmit=()=>{
    if(this.state.email===""||this.state.fullname===""||this.state.bio===""||this.state.city===""||this.state.social===""){
       document.querySelector(".error").innerHTML="Please Fill The Require Field"
    }else{
        const {email,fullname,bio,city,social} ={
            email:this.state.email,
            fullname:this.state.fullname,
            bio:this.state.bio,
            city:this.state.city,
            social:this.state.social
        }
        
        console.log(email,fullname,bio,city,social)
        document.querySelector(".error").innerHTML=""
        axios.post('http://localhost:4000/:id',{email,fullname,bio,city,social})
        .then(res=>{
          
          console.log(res)
          alert(res.data.message)
         window.location="/Profile"
        })
        .catch(err=>{
          console.log(err.response.data)
          document.querySelector(".error").innerHTML=err.response.data.message
        })
        //Return Backend include {token,name,username,password,loggedIn:true or false}
    }
    
 }
 
  render(){
    return (
    <>
    {/* <NavBar /> */}
    <div className='main'>
    <div className='row container-height' >
        <div className='col-lg-6 col-md-6 m-auto' >
            <div className='container' >
                <h1 className='text-center'>Update Profile</h1>
                    <form>
                        <fieldset>
                            <div className='form-group' >
                                <label htmlFor='exampleInputEmail'>Email</label>
                                <input
                                    type="email"
                                    className='form-control'
                                    name='email'
                                    id='expampleInputEmail'
                                    aria-describedby='emailHelp'
                                    value={this.state.email}
                                    required="required"
                                    placeholder='my@email.com'
                                    onChange={this.handleInputChange}
                                />
                            </div>
                            <div className='form-group'>
                                <label htmlFor='exampleInputName' >Fullname</label>
                                <input
                                    type="text"
                                    className='form-control'
                                    name='fullname'
                                    id='expampleInputName'
                                    aria-describedby='emailHelp'
                                    value={this.state.fullname}
                                    required="required"
                                    placeholder='Enter Fullname'
                                    onChange={this.handleInputChange}
                                />
                            </div>
                            <div className='form-group' >
                                <label htmlFor='exampleInputBio'>Bio</label>
                                <input
                                    type="text"
                                    className='form-control'
                                    id='expampleInputName'
                                    name='bio'
                                    aria-describedby='emailHelp'
                                    required="required"
                                    placeholder='Enter Bio'
                                    onChange={this.handleInputChange}
                                />
                            </div>
                            <div className='form-group' >
                                <label htmlFor='exampleInputCity'>City</label>
                                <input
                                    type="text"
                                    className='form-control'
                                    id='expampleInputName'
                                    name='city'
                                    aria-describedby='emailHelp'
                                    required="required"
                                    placeholder='Enter City'
                                    onChange={this.handleInputChange}
                                />
                            </div>
                            <div className='form-group' >
                                <label htmlFor='exampleInputSosial'>Social Media Url</label>
                                <input
                                    type="text"
                                    className='form-control'
                                    id='expampleInputName'
                                    name='social'
                                    aria-describedby='emailHelp'
                                    required="required"
                                    placeholder='Enter Social Media Url'
                                    onChange={this.handleInputChange}
                                />
                            </div>
                            <br />
                            <h5 style={{color:"white"}}  className="error"></h5>
                            <button
                            className='btn btn-primary m-auto'
                            onClick={()=>this.handleSubmit()}>
                                Update your profile
                            </button>
                        </fieldset>
                    </form>
            </div>
        </div>
    </div>
    </div>
    </>
  )
}
}

export default UpdateProfile