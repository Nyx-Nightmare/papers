import React, { useState, useEffect } from 'react'
import logo from './Images/logo.bau2.png'
import home from './Images/home.png'
import history from './Images/history.png'
import historyG from './Images/history green.png'
import formsG from './Images/Forms green.png'
import form from './Images/Forms.png'

const NavbarProfile = () => {
  const id = window.location.pathname.substring(0, 9)
  const style = window.location.pathname.substring(
    13,
    window.location.pathname.length,
  )
  console.log(style)
  const Pending = id + ' /Pending'
  const Forms = id + ' /Forms'

  let [showH, setShowH] = useState(true)
  let [showF, setShowF] = useState(true)

  let [CSSF, setCSSF] = useState('nav-link-custom')
  let [CSSH, setCSSH] = useState('nav-link-custom')

  let [CSSFB, setCSSFB] = useState('row nav-body')
  let [CSSHB, setCSSHB] = useState('row nav-body')

  useEffect(() => {
    setStyle()
  })

  const setStyle = () => {
    if (style === 'Pending') {
      setShowH(false)
      setCSSH('nav-link-customG')
      setCSSHB('row nav-bodyG ')
    } else if (style === 'Forms') {
      setShowF(false)
      setCSSF('nav-link-customG')
      setCSSFB('row nav-bodyG ')
    } 
  }

  return (
    <nav class="navbar navbar-light background2">
      <ul class="nav3 navbar-nav">
        <li class="nav-item row">
          <a class="logo2" href={id}>
            <img class="thumbnail" src={logo} alt="Beirut Arab University" />
          </a>
          <a class="navbar-brand col-3" href={id}>
            <h2 class="nav4">iForm</h2>
          </a>
        </li>
        <br />
        <li class="nav-item-custom row ">
          <div class="col-1">
            <a href={id}>
              {
                <img
                  class="thumbnail4"
                  src={home}
                  alt="Beirut Arab University"
                />
              }
            </a>
          </div>
          <div class="col-5">
            <a class="nav-link-custom3 " href={id}>
              Home
              <span class="visually-hidden">(current)</span>
            </a>
          </div>
        </li>
        <li class="nav-item-custom ">
          <h3 class="title2 offset-1">Library</h3>
        </li>
        <br />
        <li class="nav-item-custom">
          <div class={CSSFB}>
            <div class="col-2">
              <a href={Forms}>
                {showF ? (
                  <img
                    class="thumbnail6"
                    src={form}
                    alt="Beirut Arab University"
                  />
                ) : (
                  <img
                    class="thumbnail6"
                    src={formsG}
                    alt="Beirut Arab University"
                  />
                )}
                
              </a>
            </div>
            <div class="col-0">
              <a class={CSSF} href={Forms}>
                Forms
                <span class="visually-hidden">(current)</span>
              </a>
            </div>
          </div>
        </li>
        <li class="nav-item-custom">
          <div class={CSSHB}>
            <div class="col-2">
            <a href={Pending}>
              {showH ? (
                <img
                  class="thumbnail5"
                  src={history}
                  alt="Beirut Arab University"
                />
              ) : (
                <img
                  class="thumbnail6"
                  src={historyG}
                  alt="Beirut Arab University"
                />
              )}
            </a></div>
          
          <div class="col-2">
            <a class={CSSH} href={Pending}>
              History
              <span class="visually-hidden">(current)</span>
            </a>
          </div>
          </div>
        </li>

      </ul>
      <button class="item-custom2">Logout</button>
    </nav>
  )
}
export default NavbarProfile
