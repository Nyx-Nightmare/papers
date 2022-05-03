import React, { Component } from 'react';
import Navbar from './Navbar';

export default class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ID : ""
    };
  }
  render() {
    const getInputValue = (event)=>{
      const userValue = event.target.value;
      this.setState({ ID: userValue })
    };
    const changeHref = () => {
      window.location = '/'+this.state.ID;
    };
    return (
      <div>
        <Navbar />
        <div
          class="card border-warning mb-3 offset-3"
          style={{ maxWidth: '50rem', marginTop: '7rem' }}
        >
          <fieldset>
            <div
              class="card-header h4"
              style={{ marginBottom: '10px', marginTop: '-5px' }}
            >
              Sign In
            </div>
            <div class="card-body">
              <div class="form-group">
                <label for="exampleInputEmail1" class="form-label mt-4">
                  University ID
                </label>
                <input
                  type="email"
                  class="form-control"
                  name="InputID"
                  aria-describedby="emailHelp"
                  placeholder="123456789"
                  onChange={getInputValue}
                />
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1" class="form-label mt-4">
                  Password
                </label>
                <input
                  type="password"
                  class="form-control"
                  name="InputPassword1"
                  placeholder="Password"
                />
              </div>

              <div class="form-group mt-5">
                <button
                  type="submit"
                  class="btn btn-info offset-5"
                  onClick={changeHref}
                >
                  Sign In
                </button>
              </div>
            </div>
          </fieldset>
        </div>
      </div>
    )
  }
}
