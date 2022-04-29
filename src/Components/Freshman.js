import React, { Component } from 'react'
import Navbar from './Navbar'
import Froms from './Forms'
import useCollapse from 'react-collapsed'

function Collapsible() {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse()
  return (
    <div className="collapsible">
      <div className="header" {...getToggleProps()}>
        <h5>Freshman Registration Form</h5>
      </div>
      <div {...getCollapseProps()}>
        <div className="content">
          <Froms />
        </div>
      </div>
    </div>
  )
}
export default class Freshman extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div class="row offset-2">
          <div
            class="card border-info mb-3 offset-1 col-3"
            style={{ maxWidth: '50rem', marginTop: '7rem' }}
          >
            <fieldset>
              <div
                class="card-header h4"
                style={{ marginBottom: '10px', marginTop: '-5px' }}
              >
                Available Forms
              </div>
              <div class="card-body">
                <Collapsible />
              </div>
            </fieldset>
          </div>
          <div
            class="card border-info mb-3 offset-1 col-3"
            style={{ maxWidth: '50rem', marginTop: '7rem' }}
          >
            <fieldset>
              <div
                class="card-header h4"
                style={{ marginBottom: '10px', marginTop: '-5px' }}
              >
                Upload Forms
              </div>
              <div class="card-body">
               
              </div>
            </fieldset>
          </div>
        </div>
      </div>
    )
  }
}
