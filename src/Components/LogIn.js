import { useState } from 'react'
import axios from 'axios'
import Navbar from './Navbar'
import illus from './Images/illustration.png'
import pass from './Images/pass.png'
import profile from './Images/user.png'

const Login = () => {
  const [user, setUser] = useState('')
  const [pwd, setPwd] = useState('')
  const [loginStatus, setloginStatus] = useState('')
  const [CSS, setCSS] = useState('')
  const [show, setShow] = useState(false)
  const [success, setSuccess] = useState(false)
  const [admin,setAdmin] = useState(false)
  const [adminName,setAdminName] = useState("")

  const hide = async () => {
    setShow(false)
    setloginStatus('')
    setCSS('')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    axios
      .post('http://localhost:3001/login', {
        studentID: user,
        studentPass: pwd,
      })
      .then((response) => {
        if (response.data.message) {
          setShow(true)
          setCSS('alert alert-dismissible alert-danger')
          setloginStatus(response.data.message)
        } else {
          setAdmin(false)
          console.log(response.data)
          setSuccess(true)
        }
      })
      axios
      .post('http://localhost:3001/login/admin', {
        adminID: user,
        adminPass: pwd,
      })
      .then((response) => {
        if (response.data.message) {
          setShow(true)
          setCSS('alert alert-dismissible alert-danger')
          setloginStatus(response.data.message)
        } else {
          setAdmin(true)
          setAdminName(response.data[0].adminName)
          console.log(response.data)
          setSuccess(true)
        }
      })
  }

  return (
    <>
      {success ? (
        (admin ? (
          window.location = '/' + user + '/' + adminName
        ):(
          window.location = '/' + user
        ))
      ) : (
        <div>
          <Navbar />

          <div class="container">
            <div class="row">
              <div class="col-7">
                <img src={illus} alt="" class="image" />
              </div>
              <div class="col-5">
                <div>
                  <div class="title">
                    Fill your forms with{' '}
                    <strong class="text-success">one click!</strong>
                  </div>
                  <div class=" card-body mt-5">
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
                    <form onSubmit={handleSubmit}>
                      <div class="form-control-div">
                        <div class="row">
                          <div class="  col-2">
                            <img class="thumbnail3" src={profile} alt=""></img>
                          </div>
                          <div class="col-10">
                            <input
                              type="text"
                              id="studentID"
                              class="id"
                              name="InputID"
                              aria-describedby="emailHelp"
                              placeholder="ID"
                              onChange={(e) => setUser(e.target.value)}
                              value={user}
                              required
                            />
                          </div>
                        </div>
                      </div>
                      <div class="form-control-div mt-4">
                        <div class="row">
                          <div class="  col-2">
                            <img class="thumbnail3" src={pass} alt=""></img>
                          </div>
                          <div class="col-10">
                          <input
                                type="password"
                                id="password"
                                onChange={(e) => setPwd(e.target.value)}
                                value={pwd}
                                required
                                class="password"
                                name="InputPassword"
                                placeholder="Password"
                              />
                          </div>
                        </div>
                      </div>
                      <div class="form-group mt-4">
                        <button
                          type="submit"
                          class="btn btn-success offset-3 rounded-pill btn-login"
                        >
                          Log In
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Login
