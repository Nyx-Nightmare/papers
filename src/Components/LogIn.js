import { useRef, useState } from 'react'
import axios from 'axios'
import Navbar from './Navbar'
import illus from './Images/illustration.png'
import pass from './Images/pass.png'
import profile from './Images/profile.png'

const Login = () => {
  const [user, setUser] = useState('')
  const [pwd, setPwd] = useState('')
  const [loginStatus, setloginStatus] = useState('')
  const [CSS, setCSS] = useState('')
  const [show,setShow]=useState(false)
  const [success, setSuccess] = useState(false)

  const hide = async () => {
    setShow(false)
    setloginStatus("")
    setCSS("")
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
          setSuccess(true)
        }
      })
  }

  return (
    <>
      {success ? (
        (window.location = '/' + user)
      ) : (
        <div>
          <Navbar />
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          {/* mobile metas */}
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="viewport" content="initial-scale=1, maximum-scale=1" />
          {/* site metas */}
          <title />
          <meta name="keywords" content="" />
          <meta name="description" content="" />
          <meta name="author" content="" />
          <meta charSet="utf-8" />
          <title />

          <div class="container">
            <div class="row">
              <div class="col-7">
                <img src={illus} alt="" class="image" />
              </div>
              <div class="col-5">
                <div>
                  <div class="title">
                    Fill your forms with
                    <strong class="text-success">one click!</strong>
                  </div>
                  <div class=" card-body mt-5">
                    <div class={CSS}>
                    {show?<button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="alert" 
                        id ="close"
                        onClick={hide}
                      ></button>:null}
                      <strong>{loginStatus}</strong>
                    </div>
                    <form onSubmit={handleSubmit}>
                      <div class="row ">
                        <div class=" form-control-div bg-success">
                          <img class="thumbnail2" src={profile} alt=""></img>
                          <input
                            type="text"
                            id="studentID"
                            class="id"
                            name="InputID"
                            aria-describedby="emailHelp"
                            placeholder="123456789"
                            onChange={(e) => setUser(e.target.value)}
                            value={user}
                            required
                          />
                        </div>
                      </div>
                      <div class="row mt-4  ">
                        <div class="form-control-div bg-success">
                          <img class="thumbnail3" src={pass} alt=""></img>
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
