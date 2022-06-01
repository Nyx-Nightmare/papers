import React, { useState, useEffect } from 'react'
import NavbarProfile from './NavbarPofile'
import bell from './Images/notification.png'
import axios from 'axios'
import { useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
const Profile = () => {
  const [name, setName] = useState('Student Name')
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
      .post('http://localhost:3001/getName', {
        studentID: id,
      })
      .then((response) => {
        if (response.data.message) {
          console.log(response.data.message)
        } else {
          console.log(response.data)
          setName(response.data[0].studentName)
          setID(response.data[0].studentID)
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
      console.log(history.state.url)
      localStorage.setItem('notice', notify)
      localStorage.setItem('name', history.state.name)
      localStorage.setItem('filename', history.state.filename)
      localStorage.setItem('files', history.state.files)
      localStorage.setItem('url', history.state.url)
      localStorage.setItem('status', history.state.status)
    } else if (localStorage.getItem('files') != null) {
      console.log(localStorage.getItem('url'))
      setNotification(localStorage.getItem('notice'))
    }
  }
  const Send = () => {
    if (history.state != null) {
      if (history.state.id) {
        localStorage.setItem('id', history.state.id)
        const sentURL = '/' + ID + '/Pending'
        navigate(sentURL, {
          state: {
            name: history.state.name,
            filename: history.state.filename,
            files: history.state.files,
            id: history.state.id,
            url: history.state.url,            
            status:history.state.status,
          },
        })
      } else {
        const sentURL = '/' + ID + '/Pending'
        navigate(sentURL, {
          state: {
            name: history.state.name,
            filename: history.state.filename,
            files: history.state.files,
            url: history.state.url,
            status:history.state.status,
            
          },
        })
      }
    } else if (localStorage.getItem('files') != null) {
      if (localStorage.getItem('id')) {
        localStorage.setItem('id', history.state.id)
        const sentURL = '/' + ID + '/Pending'
        navigate(sentURL, {
          state: {
            name: localStorage.getItem('name'),
            filename: localStorage.getItem('filename'),
            files: localStorage.getItem('files'),
            id: localStorage.getItem('id'),
            url: localStorage.getItem('url'),
            status:localStorage.getItem('status'),
          },
        })
      } else {
        const sentURL = '/' + ID + '/Pending'
        navigate(sentURL, {
          state: {
            name: localStorage.getItem('name'),
            filename: localStorage.getItem('filename'),
            files: localStorage.getItem('files'),
            url: localStorage.getItem('url'),
            status:localStorage.getItem('status'),
          },
        })
      }
    }
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
            <div class="col-4">Activity</div>
            <div class="col-2 offset-5">
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
  )
}
export default Profile
