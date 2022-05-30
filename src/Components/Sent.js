import React from 'react'
import NavbarAdvisor from './NavbarAdvisor'
import { useLocation } from 'react-router-dom';

const Sent = () => {
  var history = useLocation();
  console.log(history.state)
    return (
      <div class="background row">
      <div class="col-2 "> <NavbarAdvisor /></div>
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
export default Sent
