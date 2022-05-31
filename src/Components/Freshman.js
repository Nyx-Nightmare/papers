import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import axios from 'axios'
import { saveAs } from 'file-saver'
import fresh from '../PDFs/Freshman.pdf'
import upload from './Images/upload.png'
import { useNavigate, useLocation } from 'react-router-dom'

const Freshman = () => {
  var history = useNavigate()
  var navigate = useLocation()

  const [form, setform] = useState('')
  const [file, setFile] = useState('')
  const [name, setName] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const [toggle, settoggel] = useState(true)
  const [notice, setNotice] = useState(false)
  const [notify, setnNotify] = useState('')
  const [namef, setNamef] = useState('')

  useEffect(() => {
    getNotice()
  })

  const getNotice= () => {
    if( navigate.state != null && toggle){
      setNotice(true)
      setnNotify(navigate.state.status)
    }
  }

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
    if (form === 'freshman') {
      saveAs(fresh, 'Freshman.pdf')
    } else {
      //saveAs(scholar, 'Scholarship.pdf')
    }
  }
  function handleChange(event) {
    setFile(event.target.files)
  }

  function handleSubmit(event) {
    event.preventDefault()
    const data = new FormData()
    for (var x = 0; x < file.length; x++) {
      data.append('files', file[x])
      let filename = file[x].name

      if (filename === 'Freshman.pdf') {
        setNamef(filename.substring(0, filename.length - 4))
      } else if (filename === 'Scholarship.pdf') {
        setNamef(filename.substring(0, filename.length - 4))
      }
    }
    console.log(data.getAll('files'))
    axios
      .post('http://localhost:3001/checkFile', { fileName: namef })
      .then((response) => {
        if (response.data.message) {
          console.log(response.data.message)
        } else {
          axios
            .post('http://localhost:3001/checkFile', { fileName: namef })
            .then((response) => {
              if (response.data.message) {
                console.log(response.data.message)
              } else {
                console.log(response.data[0])
                axios
                  .post('http://localhost:3001/getID/admin', {
                    fileLevel: response.data[0].FormLevel,
                  })
                  .then((res) => {
                    if (res.data.message) {
                      console.log(res.data.message)
                    } else {
                      const sentURL = '/Freshman'
                      const admin =
                        '/' + res.data[0].adminID + '/' + res.data[0].adminName
                      console.log(res.data)
                      history(admin, {
                        state: {
                          name: name,
                          filename: namef,
                          files: file,
                        },
                      })
                      history(sentURL)
                    }
                  })
              }
            })
        }
      })
  }
  return (
    <div class={"background "}>
      <Navbar />
      <div class="cardform">
        <div class="cardform-header">Available Forms</div>
        <div>
          <div class="row cardform-title">
            <div class="col-8">Freshman Registration Form</div>{' '}
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
                }}
                class="btn-form rounded-pill"
              >
                Upload
              </button>
            </div>
          </div>
          <div class="row cardform-title">
            <div class="col-8">Scholarship Form</div>{' '}
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
                    <div class="uploadimg">
                      <img src={upload} class="img2 mb-8" alt="" />
                      <br />
                      <label class="text-success ">Click to choose files</label>
                      <input
                        type="file"
                        multiple
                        class="choose"
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
                        onChange={(e) => setName(e.target.value)}
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
                  </div>
                </div>
              </form>
            </div>
          ) : null}
        </div>
        {notice ? (
          <div>
            <div class="alert alert-dismissible alert-success PopupNotice">
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="alert"
                onClick={()=>{setNotice(false); settoggel(false)}}
              ></button>
              <label class="notice">Your registration has been {notify}</label>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default Freshman
