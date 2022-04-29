import React, { Component } from 'react'
import Freshman from '../PDFs/Freshman.pdf'
import { saveAs } from 'file-saver'

export default class FromPDF extends Component {
  saveFile = () => {
    saveAs(Freshman, 'example.pdf')
  }
  render() {
    return <button onClick={this.saveFile}>download</button>
  }
}
