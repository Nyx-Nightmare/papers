import React, { useState, useRef } from 'react'
import Navbar from './Navbar'
import axios from 'axios'
import { saveAs } from 'file-saver'
import fresh from '../PDFs/Freshman.pdf'
import upload from './Images/upload.png'

const Freshman = () => {
  const [form, setform] = useState('')
  const [file, setFile] = useState()
  const fileRef = useRef()
  const [isOpen, setIsOpen] = useState(false)

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
      saveAs(fresh, 'Registartion.pdf')
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
      console.log(response.data)
    })
  }
  return (
    <div class="background ">
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
                    <div class="uploadimg" onClick={() => fileRef.current.click()}>
                      <img
                        src={upload}
                        class="img2 mb-8"
                        alt=""
                      />
                      <br />
                      <label class="text-success ">Click to choose files</label>
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
                  </div>
                </div>
              </form>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  )
}

export default Freshman
