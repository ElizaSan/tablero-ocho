import {

  Link

} from "react-router-dom"

import "./Navbar.css"

export function Navbar(){

  return (

    <nav className="navbar">

      <h1 className="logo">
        8 Puzzle AI
      </h1>

      <div className="nav-links">

        <Link to="/">
          Home
        </Link>

        <Link to="/play">
          Play
        </Link>

        <Link to="/learn">
          Learn
        </Link>

      </div>

    </nav>
  )
}