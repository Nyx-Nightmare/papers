import React, { useState, useRef } from 'react'
import { saveAs } from 'file-saver'
import axios from 'axios'
import NavbarProfile from './NavbarPofile'
import upload from "./Images/upload.png"
import leave from '../PDFs/leave of absence.pdf'
import change from '../PDFs/Change of Major Form.pdf'
import warning from '../PDFs/Academic Warning.pdf'
import withdrawl from '../PDFs/request for course withdrawal.pdf'

const Available = () => {
  const [form, setform] = useState('')
  const [file, setFile] = useState()
  const [isOpen, setIsOpen] = useState(false)
  const [loginStatus, setloginStatus] = useState('')
  const [CSS, setCSS] = useState('')
  const [show, setShow] = useState(false)
  const [success, setSuccess] = useState(false)

  const fileRef = useRef()
  const id = window.location.pathname.substring(0, 9)
  const Pending = id + ' /Pending'

  const togglePopup = () => {
    setIsOpen(!isOpen)
  }

  const setfresh = () => {
    setform('freshman')
  }
  const setscholar = () => {
    setform('scholarship')
  }
  const getForms = (e) => {
    if (form === 'leave') {
      saveAs(leave, 'Leave Form.pdf')
    } else {
      //saveAs(scholar, 'Scholarship.pdf')
    }
  }
  function handleChange(event) {
    setFile(event.target.files[0])
  }

  function handleSubmit(event) {
    event.preventDefault()
    const url = 'http://localhost:3001/uploadFile'
    const formData = new FormData()
    formData.append('file', file)
    formData.append('fileName', file.name)
    const config = {
      headers: {
        'content-type': 'multipart/form-data',
      },
    }
    axios.post(url, formData, config).then((response) => {
      if (response.data.message) {
        setShow(true)
        setCSS('alert alert-dismissible alert-danger')
        setloginStatus(response.data.message)
      } else {
        setSuccess(true)
      }
    })
  }
  const getName = () => {
    const url = 'http://localhost:3001/getName'
    axios.post(url, id).then((response) => {
      if (response.data.message) {
      } else {
        console.log(response.data[0])
      }
    })
  }
  const hide = async () => {
    setShow(false)
    setloginStatus('')
    setCSS('')
  }
  return (
    <>
      {success ? (
        (window.location = '/' + Pending)
      ) : (
        <div class="background row">
         <div class="col-2 "> <NavbarProfile /></div>
          <div class="col-10 cardform2">
            <div class="cardform-title2">Forms</div>
            <div class="cardform-header">Avialable Forms</div>
            <div>
              <div class="row cardform-title">
                <div class="col-8">Leave of abscence</div>{' '}
                <div class="col-2">
                  <button
                    class="btn-form rounded-pill "
                    onClick={() => {
                      setfresh()
                      getForms()
                    }}
                  >
                    Download
                  </button>
                </div>
                <div class="col-2">
                  <button
                    onClick={() => {
                      setfresh()
                      togglePopup()
                      getName()
                    }}
                    class="btn-form rounded-pill"
                  >
                    Upload
                  </button>
                </div>
              </div>
              <div class="row cardform-title">
                <div class="col-8">Grade change</div>{' '}
                <div class="col-2">
                  <button
                    class="btn-form rounded-pill "
                    onClick={() => {
                      setscholar()
                      getForms()
                    }}
                  >
                    Download
                  </button>
                </div>
                <div class="col-2">
                  <button
                    onClick={() => {
                      setscholar()
                      togglePopup()
                      getName()
                    }}
                    class="btn-form rounded-pill"
                  >
                    Upload
                  </button>
                </div>
                
              </div>
              <div class="row cardform-title">
                <div class="col-8">Warning</div>{' '}
                <div class="col-2">
                  <button
                    class="btn-form rounded-pill "
                    onClick={() => {
                      setscholar()
                      getForms()
                    }}
                  >
                    Download
                  </button>
                </div>
                <div class="col-2">
                  <button
                    onClick={() => {
                      setscholar()
                      togglePopup()
                      getName()
                    }}
                    class="btn-form rounded-pill"
                  >
                    Upload
                  </button>
                </div>
                
              </div>
              <div class="row cardform-title">
                <div class="col-8">Withdrawal</div>{' '}
                <div class="col-2">
                  <button
                    class="btn-form rounded-pill "
                    onClick={() => {
                      setscholar()
                      getForms()
                    }}
                  >
                    Download
                  </button>
                </div>
                <div class="col-2">
                  <button
                    onClick={() => {
                      setscholar()
                      togglePopup()
                      getName()
                    }}
                    class="btn-form rounded-pill"
                  >
                    Upload
                  </button>
                </div>
                
              </div>
              <div class="row cardform-title">
                <div class="col-8">Major change</div>{' '}
                <div class="col-2">
                  <button
                    class="btn-form rounded-pill "
                    onClick={() => {
                      setscholar()
                      getForms()
                    }}
                  >
                    Download
                  </button>
                </div>
                <div class="col-2">
                  <button
                    onClick={() => {
                      setscholar()
                      togglePopup()
                      getName()
                    }}
                    class="btn-form rounded-pill"
                  >
                    Upload
                  </button>
                </div>
                
              </div>
              {isOpen ? (
                <div class="popup offset-6">
                  <form onSubmit={handleSubmit}>
                    <div class="row">
                      <div class="col-7">
                        <div
                          class="uploadimg"
                          onClick={() => fileRef.current.click()}
                        >
                          <img src={upload} class="img2 mb-8" alt="" />
                          <br />
                          <label class="text-success ">
                            Click to choose files
                          </label>
                          <input
                            type="file"
                            ref={fileRef}
                            class="choose"
                            onChange={handleChange}
                            style={{ display: 'none' }}
                          />
                        </div>
                      </div>
                      <div class=" col-3 ">
                        <div class="row uploadText">
                          Form Title
                          <input type="text" class="uploadInput"></input>
                          Your Name
                          <input type="text" class="uploadInput"></input>
                        </div>
                        <div class="row">
                          <button
                            type="submit"
                            class="btn-upload rounded-pill bg-success"
                          >
                            Upload
                          </button>
                        </div>
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
                      </div>
                    </div>
                  </form>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
export default Available
