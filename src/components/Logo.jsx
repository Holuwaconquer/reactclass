import React from 'react'
import { useNavigate } from 'react-router'

const Logo = () => {

  const navigate = useNavigate()
  const goHome =() =>{
    navigate('/')
  }

  return (
    <div onClick={goHome}>
        <h1 className='logo'>CoHost</h1>
    </div>
  )
}

export default Logo