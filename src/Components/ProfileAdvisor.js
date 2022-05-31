import React, { useState, useEffect } from 'react'
import NavbarAdvisor from './NavbarAdvisor'
import bell from './Images/notification.png'
import background from './Images/homebg.png'
import axios from 'axios'
import { useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Profile = () => {
  const [name, setName] = useState('Admin Name')
  const [ID, setID] = useState('')
  const [notify, setNotification] = useState('')
  const id = window.location.pathname.substring(1, 10)
  var history = useLocation()
  var navigate = useNavigate()
  useEffect(() => {
    getName()
    setNotify()
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
          setID(response.data[0].adminID)
        }
      })
  }
  const setNotify = () => {
    if (history.state != null) {
      setNotification(
        history.state.name +
          ' has sent the following form ' +
          history.state.filename,
      )
      localStorage.setItem('notice', notify)
      localStorage.setItem('name', history.state.name)
      localStorage.setItem('filename', history.state.filename)
      localStorage.setItem('files', history.state.files)
    } else if (localStorage.getItem('files') != null) {
      setNotification(localStorage.getItem('notice'))
    }
  }
  const Send = () => {
    if (history.state != null) {
      if (history.state.id) {
        localStorage.setItem('id', history.state.id)
        const sentURL = '/' + ID + '/' + name + '/Sent'
        navigate(sentURL, {
          state: {
            name: history.state.name,
            filename: history.state.filename,
            files: history.state.files,
            id: history.state.id,
          },
        })
      } else {
        const sentURL = '/' + ID + '/' + name + '/Sent'
        navigate(sentURL, {
          state: {
            name: history.state.name,
            filename: history.state.filename,
            files: history.state.files,
          },
        })
      }
    } else if (localStorage.getItem('files') != null) {
      if (localStorage.getItem('id')) {
        localStorage.setItem('id', history.state.id)
        const sentURL = '/' + ID + '/' + name + '/Sent'
        navigate(sentURL, {
          state: {
            name: history.state.name,
            filename: history.state.filename,
            files: history.state.files,
            id: localStorage.getItem('id'),
          },
        })
      } else {
        const sentURL = '/' + ID + '/' + name + '/Sent'
        navigate(sentURL, {
          state: {
            name: history.state.name,
            filename: history.state.filename,
            files: history.state.files,
          },
        })
      }
    }
  }
  return (
    <div class="background row">
      <div class="col-2 ">
        <NavbarAdvisor />
      </div>
      <div class="col-10 cardform2">
        <div class="cardform-title2">{name}</div>

        <div class="cardform4 ">
          <div class="back" style={{ backgroundImage: `url(${background})` }}>
            <div class="cardform5 ">
              <div class="cardform-header row">
                <div class="col-4 cardform-title3">Activity</div>
                <div class="col-2 offset-2">
                  <img src={bell} alt="Beirut Arab University" />
                </div>
              </div>
              <div class="row notification">
                <button
                  onClick={() => {
                    Send()
                  }}
                  class="btn btn-light"
                >
                  {notify}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Profile
