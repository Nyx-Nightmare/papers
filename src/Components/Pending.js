import React, { Component } from 'react'
import NavbarProfile from './NavbarPofile'

export default class Pending extends Component {
  render() {
    return (
      <div class="background row">
      <div class="col-2 "> <NavbarProfile /></div>
       <div class="col-10 cardform2">
         <div class="cardform-title2">History</div>
         <div class="row">
         <div class="cardform-header col-4">Recent Forms</div>
         <div class="cardform-header col-4">Date</div>
         <div class="cardform-header col-4">Status</div>
         </div>
         <div>
           <div class="row cardform-title">
             <div class="col-8"></div>
             <div class="col-2">

             </div>
             <div class="col-2">

             </div>
           </div>
         </div>
       </div>
       </div>
    )
  }
}
