import { CircularProgress } from '@mui/material'
import React from 'react'
import './loader.css'

function Loader() {
  return (
    <div className='loader-container'>
        <CircularProgress/>
    </div>
  )
}

export default Loader