import React, { useState, useEffect } from 'react'
import NavbarAdvisor from './NavbarAdvisor'
import { useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Sent = () => {
  var history = useLocation()
  var navigate = useNavigate()
  const [name, setName] = useState('Admin Name')
  const [ID, setID] = useState('')
  const id = window.location.pathname.substring(1, 10)
  const admin = '/' + ID + '/' + name
  const [notify, setNotification] = useState('')
  const [notice, setNotice] = useState(true)
  const [date, setDate] = useState('')
  const [files, setFiles] = useState('')
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    setNotify()
    getName()
  })

  const togglePopup = () => {
    setIsOpen(!isOpen)
  }
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
  const Accept = () => {
    if (history.state != null) {
      if (history.state.id) {
        const sentURL = '/' + history.state.id + '/Pending'
        navigate(sentURL, {
          state: {
            name: history.state.name,
            filename: history.state.filename,
            files: history.state.files,
            status: 'Accepted',
          },
        })
        navigate(admin)
        localStorage.clear()
      } else {
        const sentURL = '/Freshman'
        navigate(sentURL, {
          state: {
            name: history.state.name,
            filename: history.state.filename,
            files: history.state.files,
            status: 'Accepted',
          },
        })
        navigate(admin)
        localStorage.clear()
      }
    } else if (localStorage.getItem('files') != null) {
      if (localStorage.getItem('id') != null) {
        const sentURL = '/' + localStorage.getItem('id') + '/Pending'
        navigate(sentURL, {
          state: {
            name: localStorage.getItem('name'),
            filename: localStorage.getItem('review'),
            files: localStorage.getItem('files'),
            status: 'Accepted',
          },
        })
        navigate(admin)
        localStorage.clear()
      } else {
        const sentURL = '/Freshman'
        navigate(sentURL, {
          state: {
            name: localStorage.getItem('name'),
            filename: localStorage.getItem('review'),
            files: localStorage.getItem('files'),
            status: 'Accepted',
          },
        })
        navigate(admin)
        localStorage.clear()
      }
    }
  }
  const Regect = () => {
    if (history.state != null) {
      if (history.state.id) {
        const sentURL = '/' + history.state.id + '/Pending'
        navigate(sentURL, {
          state: {
            name: history.state.name,
            filename: history.state.filename,
            files: history.state.files,
            status: 'Regected',
          },
        })
        navigate(admin)
        localStorage.clear()
      } else {
        const sentURL = '/Freshman'
        navigate(sentURL, {
          state: {
            name: history.state.name,
            filename: history.state.filename,
            files: history.state.files,
            status: 'Regected',
          },
        })
        navigate(admin)
        localStorage.clear()
      }
    } else if (localStorage.getItem('files') != null) {
      if (localStorage.getItem('id') != null) {
        const sentURL = '/' + localStorage.getItem('id') + '/Pending'
        navigate(sentURL, {
          state: {
            name: localStorage.getItem('name'),
            filename: localStorage.getItem('review'),
            files: localStorage.getItem('files'),
            status: 'Regected',
          },
        })
        navigate(admin)
        localStorage.clear()
      } else {
        const sentURL = '/Freshman'
        navigate(sentURL, {
          state: {
            name: localStorage.getItem('name'),
            filename: localStorage.getItem('review'),
            files: localStorage.getItem('files'),
            status: 'Regected',
          },
        })
        navigate(admin)
        localStorage.clear()
      }
    }
  }

  const setNotify = () => {
    if (history.state != null) {
      setNotification(history.state.filename)
      setNotice(true)
      const current = new Date().toLocaleString()
      setDate(current)
      setFiles(history.state.files)
      console.log(files)
      localStorage.setItem('review', history.state.filename)
      localStorage.setItem('name', history.state.name)
      localStorage.setItem('files', files)
      localStorage.setItem('dateR', current)
      if (history.state.id) {
        console.log(history.state.id)
        localStorage.setItem('id', history.state.id)
      }
    } else if (localStorage.getItem('review') != null) {
      setNotice(true)
      setFiles(localStorage.getItem('files'))
      setNotification(localStorage.getItem('review').filename)
      setDate(localStorage.getItem('date'))
    }
  }
  return (
    <div class="background row">
      <div class="col-2 ">
        <NavbarAdvisor />
      </div>
      <div class="col-10 cardform2">
        <div class="cardform-title2">Sent</div>
        <div class="row">
          <div class="cardform-header col-4">Recent Forms</div>
          <div class="cardform-header col-4">Date</div>
          <div class="cardform-header col-4">View</div>
        </div>
        <div>
          <div class="row cardform-title">
            <div class="row">
              <div class="cardform-header col-4">{notify}</div>
              <div class="cardform-header col-4">{date}</div>
              <div class="cardform-header col-4">
                {notice ? (
                  <button
                    class="btn-notice"
                    onClick={() => {
                      togglePopup()
                    }}
                  >
                    View
                  </button>
                ) : null}
              </div>
            </div>
            <div class="row">
              {isOpen ? (
                <div class="PopupNotice2">
                  <div class="row"></div>
                  <div class="row">
                    <div class="col-5">
                      <button
                        class="btn btn-outline-success"
                        onClick={() => {
                          Accept()
                        }}
                      >
                        Accept
                      </button>
                    </div>
                    <div class="col-5">
                      <button
                        class="btn btn-outline-danger "
                        onClick={() => {
                          Regect()
                        }}
                      >
                        Regect
                      </button>
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Sent
