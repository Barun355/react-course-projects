import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div>
      <header style={{backgroundColor: "red"}}>
        <Link to="/">Home</Link> <span> </span>
        <Link to="/products">Products</Link>
      </header>
      <div className="main">
        <Outlet />
      </div>
      <footer style={{ backgroundColor: "pink"}}>footer</footer>
    </div>
  )
}

export default Layout
