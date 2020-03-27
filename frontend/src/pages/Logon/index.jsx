import React from "react"
import "./styles.scss"

import heroesImg from "../../assets/heroes.png"
import logoImg from "../../assets/logo.svg"
import { FiLogIn } from "react-icons/fi"

const Logon = props => {
  return (
    <div className="Logon-container">
      <section className="form">
        <img src={logoImg} alt="Be the hero logo" />
        <form>
          <h1>Faça seu logon</h1>
          <input placeholder="Sua ID" />
          <button className="button">Entrar</button>
          <a href="/register">
            <FiLogIn size={16} color="#E02041" />
            Não tenho cadastro
          </a>
        </form>
      </section>
      <img src={heroesImg} alt="Heroes" />
    </div>
  )
}
export default Logon
