import React, { useState, useEffect } from 'react'
import NavbarAdvisor from './NavbarAdvisor'
import bell from './Images/notification.png'
import background from './Images/homebg.png'
import axios from 'axios'
import { useLocation } from "react-router-dom";
import { useNavigate } from 'react-router-dom'

const Profile = () => {
  const [name, setName] = useState('Admin Name')
  const id = window.location.pathname.substring(1, 10)
  var history = useLocation();
  var navigate = useNavigate()
  useEffect(() => {
    getName()
  })
  const getName = () => {
    axios
      .post('http://localhost:3001/getName/admin', {
        adminID: id,
      })
      .then((response) => {
        if (response.data.message) {
          console.log(response.data.message)
        } else {
          console.log(response.data)
          setName(response.data[0].adminName)
        }
      })
  }
  const Send = () =>{
    navigate('/202089/ADVISOR/Sent', {
      state: {
        name:history.state.name,
        filename:history.state.filename,
        files:history.state.files,
      },
    })
  }
  return (
    <div class="background row">
      <div class="col-2 ">
        <NavbarAdvisor />
      </div>
      <div class="col-10 cardform2">
        <div class="cardform-title2">{name}</div>

        <div class="cardform4 ">
          <div class="back" style={{ backgroundImage: `url(${background})`}}>
            <div class="cardform5 ">
            <div class="cardform-header row">
              <div class="col-4 cardform-title3">
                Activity
              </div>
              <div class="col-2 offset-2">
                <img src={bell} alt="Beirut Arab University" />
              </div>
            </div>
            <div class="row notification">
           <label> {history.state.name} has sent the following form {history.state.filename}</label>
            </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  )
}
export default Profile
