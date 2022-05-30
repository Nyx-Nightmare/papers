import React, { useState, useEffect } from 'react'
import NavbarProfile from './NavbarPofile'
import axios from 'axios'
import bell from "./Images/notification.png"

const Profile = () => {
  const [name, setName] = useState('Student Name')

  const id = window.location.pathname.substring(1, 10)

  useEffect(() => {
    getName()
  })
  const getName = () => {
    axios
      .post('http://localhost:3001/getName', {
        studentID: id,
      })
      .then((response) => {
        if (response.data.message) {
          console.log(response.data.message)
        } else {
          console.log(response.data)
          setName(response.data[0].studentName)
        }
      })
  }
  return (
    <div class="background row">
      <div class="col-2 ">
        <NavbarProfile />
      </div>
      <div class="col-10 cardform2">
        <div class="cardform-title2">{name}</div>
        <div class="cardform3">
          <div class="cardform-header row">
            <div class="col-4">
              Activity
            </div>
            <div class="col-2 offset-5">
              <img src={bell} alt="Beirut Arab University" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Profile
