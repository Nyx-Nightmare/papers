import React, { useState } from 'react'
import { saveAs } from 'file-saver'
import schol from "../PDFs/Scholarship.pdf"

const FromS = () => {
  const getForms = (e) => {
          saveAs(schol, 'Scholarship.pdf')
  }
  return (
    <div>
      <button onClick={getForms}>Download</button>
    </div>
  )
}
export default FromS
