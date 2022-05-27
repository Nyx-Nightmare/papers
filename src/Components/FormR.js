import React, { useState } from 'react'
import { saveAs } from 'file-saver'
import fresh from "../PDFs/Freshman.pdf"

const FromR = () => {
  const getForms = (e) => {
          saveAs(fresh, 'Registartion.pdf')
  }
  return (
    <div>
      <button onClick={getForms}>Download</button>
    </div>
  )
}
export default FromR
