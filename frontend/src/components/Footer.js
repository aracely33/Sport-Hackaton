import { motion, Variants } from "framer-motion";
import React from "react";
import { data } from "./data";

function Footer() {
  return (
    <>
      <footer className="footer">
        <motion.h1 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} className="footer__titulo">
          Colaboradores
        </motion.h1>
        <section className="container-items">
          {data.map((person) => (
            <motion.article key={person.id} className="item">
              <motion.h2  initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 2 }}>
                {person.name}
              </motion.h2>
              <figure className="item__figure">
                <motion.img initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 2 }} className="item__image" src={person.img} alt={person.name} />
              </figure>
              <motion.div
                drag
                dragConstraints={{
                  top: -20,
                  left: -20,
                  right: 20,
                  bottom: 20,
                }}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 4 }}
                className="item__persona-burbuja burbuja_1"
              >
                <motion.img className="item__burbuja-bandera" src={person.bandera} />
                <p className="item__burbuja-parrafo">{person.country}</p>
              </motion.div>
              <motion.div
                drag
                dragConstraints={{
                  top: -20,
                  left: -20,
                  right: 20,
                  bottom: 20,
                }}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 6 }}
                className="item__persona-burbuja burbuja_2"
              >
                <h3 className="item__burbuja-titulo">Profesión</h3>
                <p>{person.profesion}</p>
              </motion.div>
              <motion.div
                drag
                dragConstraints={{
                  top: -20,
                  left: -20,
                  right: 20,
                  bottom: 20,
                }}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 8 }}
                className="item__persona-burbuja burbuja_3"
              >
                <h3 className="item__burbuja-titulo">Grito de Guerra</h3>
                <p className="item__burbuja-parrafo">{person.grito}</p>
              </motion.div>
              <div className="item__person-name">
                <h4>Sobre Mi</h4>
                <p className="item__person-description">{person.about}</p>
              </div>
            </motion.article>
          ))}
        </section>
      </footer>
    </>
  );
}
export default Footer;
