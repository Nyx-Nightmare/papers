import React, { Component } from 'react'
import Navbar from './Navbar'
import illus from './Images/illustration.png'

export default class SignIn extends Component {
  constructor(props) {
    super(props)
    this.state = {
      ID: '',
    }
  }
  render() {
    const getInputValue = (event) => {
      const userValue = event.target.value
      this.setState({ ID: userValue })
    }
    const changeHref = () => {
      window.location = '/' + this.state.ID
    }
    return (
      <div>
        <Navbar />
        <>
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
          <style
            media="screen"
            dangerouslySetInnerHTML={{
              __html:
                '\n      .LoginPanel{\n        top:50%;\n        left:75%;\n        transform:translate(-50%,-25%);\n        position:absolute;\n      }\n      .image{\n        margin-top:5%;\n        float:left;\n      }\n      input[type=text]{\n        border-radius:10px;\n        padding:10px;\n        width:300px;\n        margin-top:5px;\n        border:0.5px outset cyan;\n\n      }\n      input[type=submit]{\n          margin-top:20px;\n          margin-left:30%;\n          border-radius:25px;\n          width:120px;\n          color:white;\n          background-color:cyan;\n      }\n      .btn-primary,\n.btn-primary:active,\n.btn-primary:visited,\n.btn-primary:focus {\n  background-color: cyan;\n  border-color: white;\n  color: white;\n}\n.btn-primary:hover{\n  background-color: white;\n  border-color: cyan;\n  color: cyan;\n}\n    ',
            }}
          />
          <div class="container">
            <div class="row">
              <div class="col-5">
                <img src={illus} alt="" class="image" />
              </div>
              <div class="col-6">
                <div
                  style={{ maxWidth: '50rem' ,marginTop: '2rem'}}
                >
                  <label class="title">Fill your forms with one click!</label>
                  <div class="card-body offset-2" style={{position:'relative', top:-100}}>
                    <form>
                      <div class="form-group">                      
                      <input
                        type="email"
                        id="studentID"
                        class="form-control"
                        name="InputID"
                        aria-describedby="emailHelp"
                        placeholder="123456789"
                        onChange={getInputValue}
                      />
                    </div>
                    <div class="form-group">
                      <input
                        type="password"
                        id="studentID"
                        class="form-control"
                        name="InputPassword1"
                        placeholder="Password"
                        style={{ maxWidth: '100rem', marginTop: '2rem' }}
                      />
                    </div>

                    <div class="form-group mt-5">
                      
                      <button
                        type="submit"
                        class="btn btn-success offset-4 rounded-pill"
                        onClick={changeHref}
                      >
                        Log In
                      </button>
                      
                    </div></form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      </div>
    )
  }
}
