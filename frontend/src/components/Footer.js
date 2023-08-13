import React from "react";
import {data} from "./data";

function ProductList() {
  return (
    <>
      <footer className="footer">
        <h1 style={{color: "white"}}>Colaboradores</h1>
        <div className="container-items">
          {data.map((person) => (
            <div key={person.id} className="item">
              <figure className="item__figure">
                <img
                  className="item__image"
                  src={person.img}
                  alt={person.name}
                />
              </figure>
              <div style={{color: "white"}} className="item__person-name">
                <h2>{person.name}</h2>
                <p
                  style={{color: "white"}}
                  className="item__person-description"
                >
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
