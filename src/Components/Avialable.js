import React, { useState } from 'react'
import { saveAs } from 'file-saver'
import axios from 'axios'
import NavbarProfile from './NavbarPofile'

const Available = () => {
  const [loginStatus, setloginStatus] = useState('')
  const [CSS, setCSS] = useState('')
  const [show, setShow] = useState(false)

  const hide = async () => {
    setShow(false)
    setloginStatus('')
    setCSS('')
  }
  const getForms = (e) => {
    axios
      .post('http://localhost:3001/2Forms')
      .then((response) => {
        if (response.data.message) {
          setShow(true)
          setCSS('alert alert-dismissible alert-danger')
          setloginStatus(response.data.message)
        } else {
          console.log(response.data)
        }
      })
  }
  return (
    
    <div>
      <NavbarProfile/>
      <div class={CSS}>
        {show ? (
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="alert"
            id="close"
            onClick={hide}
          ></button>
        ) : null}
        <strong>{loginStatus}</strong>
      </div>
      <button onClick={getForms}>Download</button>
    </div>
  )
}
export default Available
