import React from 'react';
import NavBar from "../Navbar/Navbar";
import "./Profile.css"
import { useNavigate } from 'react-router';


const Profile = ()=> {

  const navigation = useNavigate();


  function goToUpdate() {
    navigation("/Update")
    // navigation("/about")
}

  return (
    <>
    < NavBar/>
    <div>
        <div className="container w-75 p3">
           <div className="row">
            <h1 className='userp'>User Profile</h1>
           </div>
            <div className="row">
              <div class="col">
                <div className="table-responsive">
                  <table
                    className="table table-hover table-light table-striped align-middle bordered my-2">
                <thead className="table-primary text-center">
                  <tr>
                    <th className='col-1 '>No.</th>
                    <th>Full Name</th>
                    <th>Email</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th id="user_id"></th>
                    <th className="text-center"></th>
                    <th className="text-center"></th>
                    <th className="text-center"></th>
                    <th className="text-center">
                      <Button  className="btn-warning "  onClick={() => goToUpdate()}>
                        Update
                      </Button>
                    </th>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Profile