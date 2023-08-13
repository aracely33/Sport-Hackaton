import React from "react";
import { data } from "./data";

function ProductList() {
  return (
    <>
      <footer className="footer">
        <h1 style={{ color: "white" }}>Colaboradores</h1>

        <div className="container-items">
          {data.map((person) => (
            <div key={person.id} className="item">
              <h2 style={{ color: "white" }}>{person.name}</h2>
              <figure className="item__figure">
                <img className="item__image" src={person.img} alt={person.name} />
              </figure>
              <div className="item__persona-burbuja burbuja_1">
                <img className="item__burbuja-bandera" src={person.bandera} />
                <p className="item__burbuja-parrafo">{person.country}</p>
              </div>
              <div className="item__persona-burbuja burbuja_2">
                <h3 className="item__burbuja-titulo">Profesión</h3>
                <p>{person.profesion}</p>
              </div>
              <div className="item__persona-burbuja burbuja_3">
                <h3 className="item__burbuja-titulo">Grito de Guerra</h3>
                <p className="item__burbuja-parrafo">{person.grito}</p>
              </div>
              <div style={{ color: "white" }} className="item__person-name">
                <h4 style={{ color: "white" }}>Sobre Mi</h4>
                <p style={{ color: "white" }} className="item__person-description">
                  {person.about}
                </p>
              </div>
            </div>
          ))}
        </div>
      </footer>
    </>
  );
}
export default ProductList;
