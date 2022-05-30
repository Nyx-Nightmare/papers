import React, { useState, useRef } from 'react'
import Navbar from './Navbar'
import axios from 'axios'
import { saveAs } from 'file-saver'
import fresh from '../PDFs/Freshman.pdf'
import upload from './Images/upload.png'
import { useNavigate } from 'react-router-dom'

const Freshman = () => {
  var history = useNavigate()
  const [form, setform] = useState('')
  const [file, setFile] = useState('')
  const [name,setName] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const [namef, setNamef] = useState('')

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
          history('/202089/ADVISOR', {
            state: {
              name:name,
              filename:namef,
              files:file,
            },
          })
        }
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
                      <input type="text" class="uploadInput" onChange={(e) => setName(e.target.value)}></input>
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
