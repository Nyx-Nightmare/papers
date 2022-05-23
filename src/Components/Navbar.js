import React, { Component } from 'react'
import BAUlogo from './Images/logo.bau2.png'
export default class Navbar extends Component {
  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light nav2">
        <div class="container-fluid">
          <a class="navbar-brand logo" href="/">
            <img class="thumbnail" src={BAUlogo} alt="Beirut Arab University" />
          </a>
          <a class="navbar-brand" href="/">
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

          <div class="collapse navbar-collapse offset-7" id="navbarColor03">
            <ul class="navbar-nav me-auto">
              <li class="nav-item offset-2">
                <a class="nav-link h5" href="/Freshman">
                  Freshman
                </a>
              </li>
              <li class="nav-item offset-1">
                <a class="nav-link h5" href="/About">
                  iConnect
                </a>
              </li>
              <li class="nav-item offset-1">
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
