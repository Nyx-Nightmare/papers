import { useRef, useState, useEffect, useContext } from 'react'
import AuthContext from '../Context/AuthProvider'
import Navbar from './Navbar'
import axios from '../API/Axios'
import illus from './Images/illustration.png'
import pass from './Images/pass.png'
import profile from './Images/profile.png'
const LOGIN_URL = '/auth'

const Login = () => {
  const { setAuth } = useContext(AuthContext)
  const userRef = useRef()
  const errRef = useRef()

  const [user, setUser] = useState('')
  const [pwd, setPwd] = useState('')
  const [errMsg, setErrMsg] = useState('')
  const [success, setSuccess] = useState(false)

  useEffect(() => {
    userRef.current.focus()
  }, [])

  useEffect(() => {
    setErrMsg('')
  }, [user, pwd])

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({ user, pwd }),
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true,
        },
      )
      console.log(JSON.stringify(response?.data))
      //console.log(JSON.stringify(response));
      const accessToken = response?.data?.accessToken
      const roles = response?.data?.roles
      setAuth({ user, pwd, roles, accessToken })
      setUser('')
      setPwd('')
      setSuccess(true)
    } catch (err) {
      if (!err?.response) {
        setErrMsg('No Server Response')
      } else if (err.response?.status === 400) {
        setErrMsg('Missing Username or Password')
      } else if (err.response?.status === 401) {
        setErrMsg('Unauthorized')
      } else {
        setErrMsg('Login Failed')
      }
      errRef.current.focus()
    }
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
                  <label class="title">
                    Fill your forms with{' '}
                    <strong class="text-success">one click!</strong>
                  </label>
                  <div class=" card-body offset-1 mt-5">
                    <div
                      ref={errRef}
                      className={errMsg ? 'errmsg' : 'offscreen'}
                      aria-live="assertive"
                    >
                      <p> {errMsg}</p>
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
                            ref={userRef}
                            autoComplete="off"
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
