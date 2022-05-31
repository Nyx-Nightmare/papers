import React, { useState, useEffect } from 'react'
import NavbarProfile from './NavbarPofile'
import { useLocation } from 'react-router-dom'

const Pending = () => {
  var history = useLocation()
  var navigate = useLocation()

  const [notify, setNotification] = useState('')
  const [date, setDate] = useState('')
  const [status, setSatus] = useState('')
  const [CSS, setCSS] = useState('cardform-header col-4 Pending')

  useEffect(() => {
    setNotify()
  })

  const setNotify = () => {
    if (history.state != null) {
      if (history.state.status) {
        setNotification(history.state.filename)
        const current = new Date().toLocaleString()
        setDate(current)
        setSatus(history.state.status)
        setCSS('cardform-header col-4 ' +status)
        localStorage.setItem('files', notify)
        localStorage.setItem('date', current)
        localStorage.setItem('status', status)
      } else {
        setNotification(history.state.filename)
        const current = new Date().toLocaleString()
        setDate(current)
        setCSS('cardform-header col-4 ' +status)
        setSatus('Pending')
        localStorage.setItem('files', notify)
        localStorage.setItem('date', current)
        localStorage.setItem('status', status)
      }
    } else if (localStorage.getItem('files') != null) {
      setNotification(localStorage.getItem('files'))
      setDate(localStorage.getItem('date'))
      setSatus(localStorage.getItem('status'))
      setCSS('cardform-header col-4 ' +status)
    }
  }
  return (
    <div class="background row">
      <div class="col-2 ">
        <NavbarProfile />
      </div>
      <div class="col-10 cardform2">
        <div class="cardform-title2">History</div>
        <div class="row">
          <div class="cardform-header col-4">Recent Forms</div>
          <div class="cardform-header col-4">Date</div>
          <div class="cardform-header col-4">Status</div>
        </div>
        <div>
          <div class="row cardform-title">
            <div class="row">
              <div class="cardform-header col-4">{notify}</div>
              <div class="cardform-header col-4">{date}</div>
              <div class={CSS}>{status}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Pending
