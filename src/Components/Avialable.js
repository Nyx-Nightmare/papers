import React, { useState, useEffect } from 'react'
import { saveAs } from 'file-saver'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

import NavbarProfile from './NavbarPofile'

import upload from './Images/upload.png'

import leave from '../PDFs/leave of absence.pdf'
import change from '../PDFs/Change of Major Form.pdf'
import changeG from '../PDFs/grade change.pdf'
import warning from '../PDFs/Academic Warning.pdf'
import withdrawl from '../PDFs/request for course withdrawal.pdf'

const Available = () => {
  const [form, setform] = useState('')
  const [name, setName] = useState('')
  const [id, setID] = useState(window.location.pathname.substring(1, 10))
  const [namef, setNamef] = useState('')
  const [file, setFile] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const [loginStatus, setloginStatus] = useState('')
  const [CSS, setCSS] = useState('')
  const [show, setShow] = useState(false)

  var history = useNavigate()

  const togglePopup = () => {
    setIsOpen(!isOpen)
  }

  const setleave = () => {
    setform('leave')
  }
  const setchange = () => {
    setform('change')
  }
  const setchangeG = () => {
    setform('changeG')
  }
  const setwarning = () => {
    setform('warning')
  }
  const setwithdrawl = () => {
    setform('withdrawl')
  }
  const getForms = (e) => {
    if (form === 'leave') {
      saveAs(leave, 'Leave Form.pdf')
    } else if (form === 'change') {
      saveAs(change, 'Major Change Form.pdf')
    } else if (form === 'changeG') {
      saveAs(changeG, 'Grade Change Form.pdf')
    } else if (form === 'warning') {
      saveAs(warning, 'Warning Form.pdf')
    } else if (form === 'withdrawl') {
      saveAs(withdrawl, 'Withdrawl Form.pdf')
    }
  }
  function handleChange(event) {
    setFile(event.target.files)
  }

  function handleSubmit(event) {
    event.preventDefault()
    const data = new FormData()
    for (var x = 0; x < file.length; x++) {
      data.append('file', file[x])
      const filename = file[x].name
      if (filename === 'Leave Form.pdf') {
        setNamef(filename.substring(0, filename.length - 4))
      } else if (filename === 'Major Change Form.pdf') {
        setNamef(filename.substring(0, filename.length - 4))
      } else if (filename === 'Grade Change Form.pdf') {
        setNamef(filename.substring(0, filename.length - 4))
      } else if (filename === 'Warning Form.pdf') {
        setNamef(filename.substring(0, filename.length - 4))
      } else if (filename === 'Withdrawl Form.pdf') {
        setNamef(filename.substring(0, filename.length - 4))
      }
    }
    axios
      .post('http://localhost:3001/checkFile', { fileName: namef })
      .then((response) => {
        if (response.data.message) {
          console.log(response.data.message)
        } else {
          const Pending ='/'+id+'/Pending'
          console.log(file)
          history(Pending, {
            state: {
              name: name,
              filename: namef,
              files: file,
            },
          })
        }
      })
  }
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
          setID(response.data[0].studentID)
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
      <div class="background row">
        <div class="col-2 ">
          {' '}
          <NavbarProfile />
        </div>
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
                    setleave()
                    getForms()
                  }}
                >
                  Download
                </button>
              </div>
              <div class="col-2">
                <button
                  onClick={() => {
                    setleave()
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
                    setchangeG()
                    getForms()
                  }}
                >
                  Download
                </button>
              </div>
              <div class="col-2">
                <button
                  onClick={() => {
                    setchangeG()
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
                    setwarning()
                    getForms()
                  }}
                >
                  Download
                </button>
              </div>
              <div class="col-2">
                <button
                  onClick={() => {
                    setwarning()
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
                    setwithdrawl()
                    getForms()
                  }}
                >
                  Download
                </button>
              </div>
              <div class="col-2">
                <button
                  onClick={() => {
                    setwithdrawl()
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
                    setchange()
                    getForms()
                  }}
                >
                  Download
                </button>
              </div>
              <div class="col-2">
                <button
                  onClick={() => {
                    setchange()
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
                      >
                        <img src={upload} class="img2 mb-8" alt="" />
                        <br />
                        <label class="text-success ">
                          Click to choose files
                        </label>
                        <input
                          type="file"
                          class="choose"
                          multiple
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div class=" col-3 ">
                      <div class="row uploadText">
                        Form Title
                        <input type="text" class="uploadInput"></input>
                        Your Name
                        <input
                          type="text"
                          class="uploadInput"
                          value={name} readOnly
                        ></input>
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
    </>
  )
}
export default Available
