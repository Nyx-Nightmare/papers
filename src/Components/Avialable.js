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
