import { motion } from "framer-motion";

function Analisis() {
  return (
    <>
      <motion.section className="analisis">
        {/* <motion.div>CUADRO CON GRAFICA AQUI </motion.div> */}
        <motion.article className="analisis__container" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }}>
          <motion.h1 className="analisis__titulo" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 3 }}>
            Análisis exploratorio de datos
          </motion.h1>
          <motion.p className="analisis_texto" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 2 }}>
            El ranking Fifa lo conforman 211 equipos nacionales. Se conoce por definición que la posición 1 es la mejor y la 211 la peor.
          </motion.p>
          <motion.p className="analisis_texto" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 2 }}>
            Los Fifa points son los puntos acumulados que un equipo ha ganado en el sistema de clasificación de la FIFA. La distribución de esta variable está sesgada a la derecha, lo que se deduce
            por tener una media mayor a la mediana. Esto indica la presencia de valores extremadamente altos en esta columna.
          </motion.p>
          <motion.p className="analisis_texto" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 2 }}>
            El promedio de goles de los partidos es de 1.6 para los equipos locales y 1.1 para los equipos visitantes, con una desviación estándar de 1.6 y 1.3 respectivamente y un percentil 75 de 2
            goles para ambos casos, lo que indica una variabilidad reducida.
          </motion.p>
          <motion.p className="analisis_texto" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 2 }}>
            Curiosamente, se han llegado a anotar hasta 31 goles en un partido.
          </motion.p>
          <motion.img initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 4 }} className="analisis_img" src="https://i.postimg.cc/WbH7nPXj/Barra-1.png" />
          <motion.p>Comprobamos en primer lugar cómo se encuentra distribuida la columna de las diferencias del ranking Fifa entre los equipos que se enfrentan en cada partido.</motion.p>
        </motion.article>
        <motion.article className="analisis__container" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }}>
          <motion.img className="analisis_img" src="https://i.postimg.cc/zGNTpXKs/Barra-2.png" initial={{ opacity: 0 }} whileInView={{ opacity: 4 }} transition={{ duration: 4 }} />
          <motion.p className="analisis_texto" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 2 }}>
            Observamos una distribución que se aproxima a la normal con un centro cercano a cero. Esto nos indica que, por lo general, los equipos enfrentados suelen estar equilibrados (poca
            diferencia en su posición del ranking) y en pocas ocasiones hay diferencias notables.
          </motion.p>
        </motion.article>
        <motion.article className="analisis__container" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }}>
          <motion.h2 className="analisis__titulo" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 2 }}>
            Por lo tanto, a partir del gráfico se puede observar lo siguiente:
          </motion.h2>
          <motion.img initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 4 }} className="analisis__img" src="https://i.postimg.cc/KYZRV0Gf/explicando.png" />
          <motion.div className="analisis_tarjeta">
            <motion.p className="analisis_texto">
              Cuando un equipo se encuentra en una desventaja alta (menor a -150) la probabilidad de victoria o empate es muy baja y es casi despreciable el hecho de jugar de local o visitante.
            </motion.p>
            <motion.img className="analisis__img" src="https://i.postimg.cc/rmtpv3rB/bajo-posibilidad.png" />
          </motion.div>

          <motion.div className="analisis_tarjeta" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 2 }}>
            <motion.p className="analisis_texto">
              Cuando la desventaja es moderada (entre -100 y -50) la probabilidad de victoria o empate para cualquier equipo es menor al 50%. Sin embargo, es más probable que el equipo local obtengaun
              empate que un victoria, mientras que lo menos probable es que el equipo visitante obtenga una victoria si está en desventaja.
            </motion.p>
            <motion.img initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 4 }} className="analisis__img" src="https://i.postimg.cc/gkLKg2js/casiperno.png" />
          </motion.div>

          <motion.div className="analisis_tarjeta" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 2 }}>
            <motion.p className="analisis_texto">
              Cuando la desventaja es nula (igual a 0) observamos que las probabilidades de empate de ambos equipos o victoria del equipo visitante son similares entre sí pero continúan por debajo del
              50%. La probabilidad de victoria del equipo local, en cambio, se acerca al 50%, por lo que la localía mejora la probabilidad de victoria.
            </motion.p>
            <motion.img initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 4 }} className="analisis__img" src="https://i.postimg.cc/yYRGrH8m/50.png" />
          </motion.div>

          <motion.div className="analisis_tarjeta" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 2 }}>
            <motion.p className="analisis_texto">
              Cuando la ventaja del equipo es moderada (entre 50 y 100) la probabilidad de victoria del equipo local es más alta (entre 70 y 90% aproximadamente) que otro resultado, mientras que la
              probabilidad de un empate del mismo equipo es la más baja (entre 5 y 20% aproximadamente).
            </motion.p>
            <motion.img initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 4 }} className="analisis__img" src="https://i.postimg.cc/C10tgfBw/patea-balom.png" />
          </motion.div>
          <motion.div className="analisis_tarjeta" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 2 }}>
            <motion.p className="analisis_texto">
              Cuando la ventaja del equipo es alta (mayor a 150) la probabilidad de victoria tanto del equipo local como del visitante es muy alta (entre 90 y 100% aproximadamente), mientras que la
              probabilidad de empate es muy baja (menor al 5% aproximadamente).
            </motion.p>
            <motion.img initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 4 }} className="analisis__img" src="https://i.postimg.cc/K8NJdvSM/pngwing-com.png" />
          </motion.div>
        </motion.article>
        <motion.article initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 6 }}>
          <motion.h3 className="analisis__subtitle">Conclusion</motion.h3>
          <motion.img className="analisis__img" src="https://i.postimg.cc/pTnQXP7k/conclusion.png" />
          <motion.p className="analisis_texto">
            En general, se puede decir que la localía otorga una ventaja importante en los partidos, contribuyendo a aumentar las probabilidades de victoria cuando el equipo se encuentra equilibrado o
            en ventaja frente a su adversario o a aumentar la probabilidad de empate cuando el equipo se encuentra en desventaja frente a su adversario. De manera similar, se puede decir que siempre
            existirá una mayor probabilidad de victoria de un equipo al jugar de local que al jugar de visitante, independientemente de la ventaja o desventaja que tenga frente a su adversario.
          </motion.p>
        </motion.article>
      </motion.section>
    </>
  );
}

export default Analisis;
