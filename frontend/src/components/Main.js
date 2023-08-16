import { motion, Variants } from "framer-motion";

function Main() {
  return (
    <>
      <main className="main">
        <motion.h1 className="aquiyo">AQUI LOS DATOS</motion.h1>
        <motion.article className="main__articulo main__articulo-01">
          <motion.h1 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 2 }}>
            SOY UN PEDASO DE TITULO
          </motion.h1>
          <motion.p className="soy" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 3 }}>
            Soy el conteido de este artuculo RELLENO RELLENO RELLENO RELLENO RELLENO RELLENO RELLENORELLENORELLENORELLENORELLENORELLENO
          </motion.p>
          <motion.img
            initial={{ opacity: 0, rotate: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 5 }}
            animate={{
              scale: [0, 0.5, 0.3],
              transition: {
                duration: 5,
                delay: 1,
              },
            }}
            src="https://images.all-free-download.com/images/graphiclarge/test_testing_optical_265619.jpg"
          />
        </motion.article>
        <motion.article className="main__articulo main__articulo-02">
          <motion.h1>SOY UN PEDASO DE TITULO</motion.h1>
          <motion.p className="soy">Soy el conteido de este artuculo RELLENO RELLENO RELLENO RELLENO RELLENO RELLENO RELLENORELLENORELLENORELLENORELLENORELLENO</motion.p>
          <motion.img style={{ width: "300px" }} src="https://images.all-free-download.com/images/graphiclarge/test_testing_optical_265619.jpg" />
        </motion.article>
        <motion.article initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="main__articulo main__articulo-03">
          <motion.h1>SOY UN PEDASO DE TITULO</motion.h1>
          <motion.p className="soy">Soy el conteido de este artuculo RELLENO RELLENO RELLENO RELLENO RELLENO RELLENO RELLENORELLENORELLENORELLENORELLENORELLENO</motion.p>
          <motion.img style={{ width: "300px" }} src="https://images.all-free-download.com/images/graphiclarge/test_testing_optical_265619.jpg" />
        </motion.article>
      </main>
    </>
  );
}

export default Main;
