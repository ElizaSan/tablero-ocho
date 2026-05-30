import {

  Link

} from "react-router-dom"

import "./Hero.css"

export function Hero(){

  return (

    <section className="hero">

      <h1 className="hero-title">

        8 Puzzle IA Challenge

      </h1>

      <p className="hero-description">

      Compite contra algoritmos de IA clásicos
      y descubre cómo
      las computadoras resuelven el famoso
      problema del rompecabezas deslizante.

      </p>

      <Link
        to="/play"
        className="hero-button"
      >

        Juega ahora

      </Link>

    </section>
  )
}