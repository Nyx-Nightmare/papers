import React, { useState, useEffect } from 'react'
import axios from 'axios'

import logo from './Images/logo.bau2.png'
import home from './Images/home.png'
import homeg from './Images/home green.png'
import formsG from './Images/Forms green.png'
import form from './Images/Forms.png'
import about from './Images/about.png'
import aboutG from './Images/about green.png'

const NavbarAdvisor = () => {
  const id = window.location.pathname.substring(1, 7)
  const style = window.location.pathname.substring(window.location.pathname-1, window.location.pathname)

  const [ID,setID]=useState('')
  const [name,setName]=useState('')
  const [About,setA] = useState('')
  const [Forms,setF] = useState('')
  const [Home,setH] = useState('')

  let [showF, setShowF] = useState(true)
  let [showM, setShowM] = useState(true)
  let [showA, setShowA] = useState(true)

  let [CSSF, setCSSF] = useState('nav-link-custom')
  let [CSSA, setCSSA] = useState('nav-link-custom')
  let [CSSM, setCSSM] = useState('nav-link-custom')

  let [CSSFB, setCSSFB] = useState('row nav-body')
  let [CSSAB, setCSSAB] = useState('row nav-body')
  let [CSSMB, setCSSMB] = useState('row nav-body')

  useEffect(() => {
    setStyle()
    getName()
  })
  const setStyle = () => {
    if (style === 't') {
      setShowF(false)
      setCSSF('nav-link-customG')
      setCSSFB('row nav-bodyG ')
    } 
    
    else if (style === 'A') {
      setShowA(false)
      setCSSA('nav-link-customG')
      setCSSAB('row nav-bodyG ')
    }else {
      setShowM(false)
      setCSSM('nav-link-customG')
      setCSSMB('row nav-bodyG')
    }
  }
  const getName = () => {
    axios
      .post('http://localhost:3001/getName/admin', {
        adminID: id,
      })
      .then((response) => {
        if (response.data.message) {
          console.log(response.data.message)
        } else {
          console.log(response.data)
          setName(response.data[0].adminName)
          setID(response.data[0].adminID)
          setA('/'+ID+'/'+name+'/AboutA')
          setF('/'+ID+'/'+name+'/Sent')
          setH('/'+ID+'/'+name)
        }
      })
  }

  return (
    <nav class="navbar navbar-light background2">
      <ul class="nav3 navbar-nav">
        <li class="nav-item row">
          <a class="logo2" href={Home}>
            <img class="thumbnail" src={logo} alt="Beirut Arab University" />
          </a>
          <a class="navbar-brand col-3" href={Home}>
            <h2 class="nav4">iForm</h2>
          </a>
        </li>
        <br />
        <li class="nav-item-custom ">
          <div class={CSSMB}>
            <div class="col-5">
              <a href={Home}>
                {showM ? (
                  <img
                    class="thumbnail2"
                    src={home}
                    alt="Beirut Arab University"
                  />
                ) : (
                  <img
                    class="thumbnail2"
                    src={homeg}
                    alt="Beirut Arab University"
                  />
                )}
              </a>
            </div>
            <div class="col-5">
              <a class={CSSM} href={Home}>
                Home
                <span class="visually-hidden">(current)</span>
              </a>
            </div>
          </div>
        </li>
        <li class="nav-item-custom ">
          <h3 class="title2 offset-1">Library</h3>
        </li>
        <br />
        <li class="nav-item-custom">
          <div class={CSSFB}>
            <div class="col-5">
              <a href={Forms}>
                {showF ? (
                  <img
                    class="thumbnail2"
                    src={form}
                    alt="Beirut Arab University"
                  />
                ) : (
                  <img
                    class="thumbnail2"
                    src={formsG}
                    alt="Beirut Arab University"
                  />
                )}
              </a>
            </div>
            <div class="col-5">
              <a class={CSSF} href={Forms}>
                Forms
                <span class="visually-hidden">(current)</span>
              </a>
            </div>
          </div>
        </li>
       
        <li class="nav-item-custom">
          <div class={CSSAB}>
            <div class="col-5">
              <a href={About}>
                {showA ? (
                  <img
                    class="thumbnail2"
                    src={about}
                    alt="Beirut Arab University"
                  />
                ) : (
                  <img
                    class="thumbnail2"
                    src={aboutG}
                    alt="Beirut Arab University"
                  />
                )}
              </a>
            </div>

            <div class="col-5">
              <a class={CSSA} href={About}>
                About
                <span class="visually-hidden">(current)</span>
              </a>
            </div>
          </div>
        </li>
      </ul>
      <button class="item-custom2">
        <a href="/" class="nav-link-custom4">
          Logout <span class="visually-hidden">(current)</span>
        </a>
      </button>
    </nav>
  )
}
export default NavbarAdvisor
