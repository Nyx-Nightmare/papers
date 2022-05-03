import React, { Component, useState } from 'react'
import Navbar from './Navbar'
import Froms from './Forms'
import useCollapse from 'react-collapsed'
import axios from 'axios'

function CollapsibleButton() {
  const [open, setOpen] = useState(false);

  return (
    <button
      style={{
        display: "inline-block",
      }}
      onClick={() => setOpen(!open)}
    >
      <span
        style={{
          // This makes it feel animated:
          transition: "transform 200ms linear",
          // This rotates the element:
          transform: `rotateZ(${open ? "180deg" : 0})`,
          display: "inline-block",
        }}
      >
        {"^"} 
      </span>
    </button>
  );
}

function Collapsible() {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse()
  return (
    <div className="collapsible">
      <div className="header row" >
        <div class="col-8">
        <h5>Freshman Registration Form</h5></div>
        <div class="col-2"  {...getToggleProps()}> <CollapsibleButton /> </div>
      </div>
      <div {...getCollapseProps()}>
        <div className="content">
          <Froms />
        </div>
      </div>
      <div className="header row" >
        <div class="col-8">
        <h5>Scholarship Form</h5></div>
        <div class="col-2"  {...getToggleProps()}> <CollapsibleButton /> </div>
      </div>
      <div {...getCollapseProps()}>
        <div className="content">
          <Froms />
        </div>
      </div>
    </div>
  )
}
function UploadR() {
  const [file, setFile] = useState()
  function handleChange(event) {
    setFile(event.target.files[0])
  }

  function handleSubmit(event) {
    event.preventDefault()
    const url = 'http://localhost:3000/uploadFile'
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
      <div class = " offset-7">
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
    const url = 'http://localhost:3000/uploadFile'
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
      <div class = " offset-7">
        <button type="submit">Upload</button>
      </div>
    </form>
  )
}
export default class Freshman extends Component {
  render() {
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
                <Collapsible />
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
}
