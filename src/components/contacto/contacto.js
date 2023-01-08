import { Component } from "react";
import "./Contacto.css";
export default class contacto extends Component {
  render() {
    return (
      <div className="contenido">
        <h1 className="tit">Contáctanos</h1>
        <h2 className="frase">
          Conoce más acerca de nuestro método y las oportunidades que tenemos
          para ti!
        </h2>
        <h2 className="frase">+57 3168210357 @cool_house_idiomas</h2>

        <div className="cuadros">
          <input className="subcuadros" type="text" name="Nombre" />
          <br />
          <input className="subcuadros" type="email" name="Email" />
          <br />

          <input className="subcuadros" type="number" name="Celular" />
          <br />

          <textarea
            className="subcuadros"
            name="¿Qué te gustaría saber?"
            form="userform"
            rows="4"
          ></textarea>
        </div>
      </div>
    );
  }
}
