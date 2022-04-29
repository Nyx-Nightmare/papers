import React, { Component } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'
import Freshman from "../PDFs/Untitled 2.pdf"
import { saveAs } from "file-saver";

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

export default class FromPDF extends Component {
  saveFile = () => {
    saveAs(
      Freshman,
      "example.pdf"
    );
  };
  state = { numPages: null, pageNumber: 1 }

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages })
  }

  goToPrevPage = () =>
    this.setState((state) => ({ pageNumber: state.pageNumber - 1 }))
  goToNextPage = () =>
    this.setState((state) => ({ pageNumber: state.pageNumber + 1 }))

  render() {
    const { pageNumber, numPages } = this.state

    return (
      <div class="card border-info mb-3" style={{ marginTop: '7rem' }}>
        <div class="container">
          <Document file={Freshman} onLoadSuccess={this.onDocumentLoadSuccess}>
            <Page scale={2} pageNumber={pageNumber} />
          </Document>
        </div>
        <div class="form-group mt-5 offset-5">
        <div>
      <button onClick={this.saveFile}>download</button>
    </div>
          <nav>
            <button onClick={this.goToPrevPage}>Prev</button>
            <button onClick={this.goToNextPage}>Next</button>
          </nav>
        </div>
      </div>
    )
  }
}
