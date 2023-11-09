import { useState } from 'react'
import './App.css'
import Form from './form'
import Display from './display'

function App() {
  
  return (
    <>
      <header>
        <h1 className='header'>Resume Maker</h1>
      </header>
      <Form />
      <Display />
    </>
  )
}
export default App
