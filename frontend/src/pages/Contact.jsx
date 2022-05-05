/* eslint-disable import/no-unresolved */
import React from "react";
import "./Contact.css";
import prairie from "@assets/prairieChampignons.jpg";
import { NavLink } from "react-router-dom";

export default function Contact() {
  return (
    <main
      className="App"
      style={{
        backgroundImage: `url(${prairie})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "1200px",
      }}
    >
      <section>
        <h2>Contact</h2>
        <form>
          <div>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Votre nom et prénom"
              required
            />
          </div>
          <div>
            <input
              type="mail"
              id="mail"
              name="mail"
              placeholder="Votre email"
              required
            />
          </div>
          <div>
            <select name="sujet" size="1">
              <option value="Choisissez votre sujet" selected>
                Choisissez votre sujet
              </option>
              <option value="Signaler un bug">Signaler un bug</option>
              <option value="Suggérer une amélioration / modification">
                Suggérer une amélioration / modification
              </option>
              <option value="autre">Autre</option>
            </select>
          </div>
          <div>
            <textarea
              id="message"
              name="message"
              placeholder="Votre message"
              rows="12"
              cols="24"
            />
          </div>
          <div>
            <NavLink className="navLink" to="/NotificationMessage">
              <input className="inputSubmit" type="submit" value="Envoyer" />
            </NavLink>
          </div>
        </form>
      </section>
    </main>
  );
}
