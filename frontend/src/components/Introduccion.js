import { motion } from "framer-motion";

function Introduccion() {
  return (
    <>
      <motion.article className="main__container_articulo">
        <motion.h1 className="main__titulo" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 2 }}>
          Introducción
        </motion.h1>
        <motion.p className="main__texto" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 3 }}>
          En el mundo del fúltbol, cada partido es un enfrentamiento único en el que equipos de distintas procedencias y calibres se desafían en busca de la victoria. Detrás de cada resultado hay una
          serie de factores que influyen en el desenlace, desde la destreza individual de los jugadores hasta las estrategias de juego adoptadas por los entrenadores. Entre estos factores, dos han
          capturado la atención de la comunidad futbolística y de los analistas de datos por igual: el factor de jugar como local y el posicionamiento en el ranking FIFA."
        </motion.p>
        <motion.p className="main__texto" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 3 }}>
          El propósito de este proyecto es sumergirse en el análisis de datos para desentrañar la relación entre el desempeño de un equipo en el contexto de su localía y su posición en el ranking
          FIFA, y cómo estas variables impactan en su probabilidad de victoria. A lo largo de las décadas, se ha especulado ampliamente acerca de si el factor de jugar en casa y la clasificación en el
          ranking FIFA realmente afectan los resultados de los partidos. Este análisis busca aportar claridad a estas cuestiones, explorando cómo estos factores se entrelazan y contribuyen a las
          victorias en el deporte más popular del mundo.
        </motion.p>
        <motion.p className="main__texto" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 3 }}>
          Para lograr este objetivo, se examinarán datos detallados de partidos internacionales de fútbol, abarcando un período que va desde 1993 hasta 2022. Estos datos proporcionan una ventana a una
          amplia variedad de escenarios y situaciones de juego a nivel global, permitiendo un análisis completo y en profundidad. Mediante la aplicación de técnicas estadísticas y herramientas de
          visualización, se pretende identificar patrones, tendencias y relaciones significativas entre el factor de jugar como local, la posición en el ranking FIFA y el resultado final del partido.
        </motion.p>
      </motion.article>
      ;
    </>
  );
}

export default Introduccion;
