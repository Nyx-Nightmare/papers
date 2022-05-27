import React, { Component } from 'react'
import logo from './Images/logo.bau2.png'


const NavbarProfile = () => {
  const id = window.location.pathname.substring(0,9)
  const Pending = id +" /Pending"
  const Forms = id +" /Forms"
  const About = id +" /AboutP"
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light nav2">
        <div class="container-fluid">
          <a class="navbar-brand logo" href={id}> 
            <img class="thumbnail" src={logo} alt="Beirut Arab University" />
          </a>
          <a class="navbar-brand" href={id}>
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
                <a class="nav-link active h5" href={id}>
                  Home
                  <span class="visually-hidden">(current)</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link h5" href={Forms}>
                  Forms
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link h5" href={Pending}>
                  Submitted Forms
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link h5" href={About}>
                  About
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
export default NavbarProfile
