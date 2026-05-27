import {

  Link

} from "react-router-dom"

import "./Hero.css"

export function Hero(){

  return (

    <section className="hero">

      <h1 className="hero-title">

        8 Puzzle AI Challenge

      </h1>

      <p className="hero-description">

        Compete against classic AI
        algorithms and discover how
        computers solve the famous
        sliding puzzle problem.

      </p>

      <Link
        to="/play"
        className="hero-button"
      >

        Play Now

      </Link>

    </section>
  )
}