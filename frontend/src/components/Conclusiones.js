import { motion } from "framer-motion";

function Conclusiones() {
  return (
    <>
      <article className="analisis_tarjeta_container">
        <motion.div className="analisis_tarjeta" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 2 }}>
          <motion.p className="analisis_texto ">
            Se llevó a cabo un preprocesamiento de los datos, en el se transformaron tipos de datos y se renombraron columnas para facilitar el análisis de los datos. También se eliminaron las
            columnas que no eran relevantes para el análisis y se agregaron nuevas que se consideraron vitales para el análisis.
          </motion.p>
        </motion.div>
        <motion.div className="analisis_tarjeta" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 2 }}>
          <motion.p className="analisis_texto ">
            En un análisis preliminar, se encontró que los puntos FIFA exhiben una distribución sesgada a la derecha, sugiriendo equipos con puntuaciones excepcionalmente altas, y que los promedios de
            goles muestran equilibrio competitivo, con la mayoría de los partidos teniendo pocos goles. Estos insights brindan una visión integral del panorama competitivo de los equipos nacionales.
          </motion.p>
        </motion.div>
        <motion.div className="analisis_tarjeta" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 2 }}>
          <motion.p className="analisis_texto ">
            Los equipos que juegan en casa han registrado históricamente más victorias en comparación con empates y derrotas. En cuanto a su ranking Fifa, es más frecuente que se enfrenten equipos de
            ranking similar, por lo que los partidos generalmente están equilibrados.
          </motion.p>
        </motion.div>
        <motion.div className="analisis_tarjeta" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 2 }}>
          <motion.p className="analisis_texto ">
            Finalmente, se encontró que la localía conlleva una ventaja significativa en los partidos, aumentando las chances de victoria cuando el equipo está equilibrado o adelante, o incrementando
            la probabilidad de empate cuando está en desventaja. Asimismo, se observa que en general, jugar en casa aumenta las posibilidades de ganar en comparación con jugar como visitante, sin
            importar su diferencia en el ranking Fifa.
          </motion.p>
        </motion.div>
      </article>
    </>
  );
}

export default Conclusiones;
