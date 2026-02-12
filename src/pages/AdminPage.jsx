import React from 'react'
import { Link, NavLink, Outlet } from 'react-router'
import { Footer } from './LandingPage'

const AdminPage = () => {
  return (
    <div>
        <div>
            <ul>
                
                <Link to='/admin' >Admin Home</Link>
                <NavLink to='/admin/dashboard'>Admin Dashboard</NavLink>
            </ul>
        </div>
        <Outlet />
        <Footer />
    </div>
  )
}

export default AdminPage