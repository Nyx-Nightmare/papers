import React, { Component } from 'react'
import logo from './Images/logo.bau2.png'
export default class NavbarProfile extends Component {
  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light nav2">
        <div class="container-fluid">
          <a class="navbar-brand logo" href="/Home">
            <img class="thumbnail" src={logo} alt="Beirut Arab University" />
          </a>
          <a class="navbar-brand" href="/Home">
          <h3 class="nav">iForm</h3>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarColor03"
            aria-controls="navbarColor03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse offset-6" id="navbarColor03">
            <ul class="navbar-nav me-auto">
              <li class="nav-item">
                <a class="nav-link active h5" href="/Home">
                  Home
                  <span class="visually-hidden">(current)</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link h5" href="/Forms">
                  Forms
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link h5" href="/Pending">
                  Submitted Forms
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link h5" href="/About">
                  About
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}
