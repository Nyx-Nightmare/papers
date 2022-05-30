import React, { Component } from 'react'
import NavbarProfile from './NavbarPofile'
import { useLocation } from 'react-router-dom'

const Pending = () => {
  var history = useLocation()
  return (
    <div class="background row">
      <div class="col-2 ">
        {' '}
        <NavbarProfile />
      </div>
      <div class="col-10 cardform2">
        <div class="cardform-title2">History</div>
        <div class="row">
          <div class="cardform-header col-4">Recent Forms</div>
          <div class="cardform-header col-4">Date</div>
          <div class="cardform-header col-4">Status</div>
        </div>
        <div>
          <div class="row cardform-title">
            <div class="row">
              <div class="cardform-header col-4">{history.state.filename}</div>
              <div class="cardform-header col-4">Date</div>
              <div class="cardform-header col-4">Status</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Pending
