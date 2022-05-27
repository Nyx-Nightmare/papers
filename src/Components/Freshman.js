import React, { Component, useState } from 'react'
import Navbar from './Navbar'
import FromR from './FormR'
import FromS from './FormS'
import axios from 'axios'

function UploadR() {
  const [file, setFile] = useState()
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
    <form onSubmit={handleSubmit}>
      <div class="row">
        <div class="col-6">
          <h5>Registration upload</h5>
        </div>
        <div class="col-3">
          <input type="file" onChange={handleChange} />
        </div>
      </div>
      <div class=" offset-7">
        <button type="submit">Upload</button>
      </div>
    </form>
  )
}
function UploadS() {
  const [file, setFile] = useState()
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
    <form onSubmit={handleSubmit}>
      <div class="row">
        <div class="col-6">
          <h5>Scholarship upload</h5>
        </div>
        <div class="col-3">
          <input type="file" onChange={handleChange} />
        </div>
      </div>
      <div class=" offset-7">
        <button type="submit">Upload</button>
      </div>
    </form>
  )
}
const Freshman = () => {
  return (
    <div>
      <Navbar />
      <div class="row ">
        <div
          class="card border-info mb-3 offset-1 col-4"
          style={{ maxWidth: '50rem', marginTop: '7rem' }}
        >
          <fieldset>
            <div
              class="card-header h4"
              style={{ marginBottom: '10px', marginTop: '-5px' }}
            >
              Available Forms
            </div>
            <div class="card-body">
              <div className="collapsible">
                <div className="header row">
                  <div class="col-8">
                    <h5>Freshman Registration Form</h5>
                  </div>
                  <div class="col-2"> </div>
                </div>
                <div>
                  <div className="content">
                    <FromR />
                  </div>
                </div>
                <div className="header row">
                  <div class="col-8">
                    <h5>Scholarship Form</h5>
                  </div>
                  <div class="col-2"> </div>
                </div>
                <div>
                  <div className="content">
                    <FromS />
                  </div>
                </div>
              </div>
            </div>
          </fieldset>
        </div>
        <div
          class="card border-info mb-3 offset-1 col-4"
          style={{ maxWidth: '70rem', marginTop: '7rem' }}
        >
          <fieldset>
            <div
              class="card-header h4"
              style={{ marginBottom: '10px', marginTop: '-5px' }}
            >
              Upload Forms
            </div>
            <div class="card-body">
              <UploadR />
            </div>
            <div class="card-body">
              <UploadS />
            </div>
          </fieldset>
        </div>
      </div>
    </div>
  )
}

export default Freshman
