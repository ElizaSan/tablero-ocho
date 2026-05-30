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
          Inicio
        </Link>

        <Link to="/play">
          Juega
        </Link>

        <Link to="/learn">
          Aprende
        </Link>

      </div>

    </nav>
  )
}