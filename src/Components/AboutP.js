import React, { Component } from 'react'
import NavbarProfile from './NavbarPofile'
import info from './Images/test.mp4'

export default class AboutP extends Component {
  render() {
    return (
      <div class="background row">
        <div class="col-2 ">
          <NavbarProfile />
        </div>
        <div class="col-10 cardform2">
          <h4 class="cardform-title2">About</h4>
          <div class="cardform-body">
            <p>The Website deals with the Online Form Submission System.</p>
            <p>
              The initiative focuses on using computers to process student
              submissions rather than doin so manually. This allows students to
              obtain admission quickly and conveniently.
            </p>
            <p>
              In summary, it minimizes paper trails while also keeping track of
              student information. Various tools will be used in the completion
              of this project.
            </p>
          </div>
          <div class="videocard">
            <video class="video" controls>
              <source src={info} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    )
  }
}
