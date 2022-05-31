import React, { useState, useEffect } from 'react'
import NavbarProfile from './NavbarPofile'
import { useLocation } from 'react-router-dom'
import commentPNG from './Images/comment.png'

const Pending = () => {
  var history = useLocation()
  var navigate = useLocation()

  const [notify, setNotification] = useState('')
  const [date, setDate] = useState('')
  const [status, setSatus] = useState('')
  const [reason, setReason] = useState('')
  const [CSS, setCSS] = useState('cardform-header col-4 Pending')
  const [comment, showComment] = useState(false)
  const [pic, showPic] = useState(true)

  useEffect(() => {
    setNotify()
    showPNG()
  })
  const showPNG = () => {
    if (status === 'Rejected') {
      showPic(false)
    }
  }
  const setNotify = () => {
    if (history.state != null) {
      if (history.state.status) {
        setNotification(history.state.filename)
        const current = new Date().toLocaleString()
        setDate(current)
        setSatus(history.state.status)
        setReason(history.state.reason)
        setCSS('cardform-header col-4 ' + status)
        localStorage.setItem('files', notify)
        localStorage.setItem('date', current)
        localStorage.setItem('status', status)
      } else {
        setNotification(history.state.filename)
        const current = new Date().toLocaleString()
        setDate(current)
        setCSS('cardform-header col-4 ' + status)
        setSatus('Pending')
        setReason(history.state.reason)
        localStorage.setItem('files', notify)
        localStorage.setItem('date', current)
        localStorage.setItem('status', status)
        localStorage.setItem('reason', reason)
      }
    } else if (localStorage.getItem('files') != null) {
      setNotification(localStorage.getItem('files'))
      setDate(localStorage.getItem('date'))
      setReason(localStorage.getItem('reason'))
      setSatus(localStorage.getItem('status'))
      setCSS('cardform-header col-4 ' + status)
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
              <div class={CSS}>
                {status}
                {pic ? (
                  <img
                    src={commentPNG}
                    class="adjust"
                    onClick={() => {
                      showComment(!comment)
                    }}
                  ></img>
                ) : null}
              </div>
              {comment ? (
                <div>
                  <div class="badge bg-red offset-8 ">{reason}</div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Pending
