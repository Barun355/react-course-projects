import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="flex justify-between w-full py-4 px-8 items-center bg-slate-50 shadow-md">
      <nav className="flex gap-4 items-center">
        <Link to='/'>Home</Link>
        <Link to='/blogs'>Blogs</Link>
      </nav>
      <nav className="flex gap-4 items-center">
        <Link to='/'>Dashboard</Link>
        <Link to='/'>Login</Link>
        <Link to='/'>Register</Link>
      </nav>
    </header>
  );
}

export default Header;
