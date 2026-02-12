import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router'

export function Footer(){
  return (
    <div style={{ background: "red", height: "200px" }}> 
      <h1 className='text-black'>Footer</h1>
    </div>
  )
}

const LandingPage = () => {
  return (
    <div>
        <Navbar />
        <Outlet />
        <Footer />
    </div>
  )
}

export default LandingPage