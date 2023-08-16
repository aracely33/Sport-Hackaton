import { motion } from "framer-motion";

function Main() {
  return (
    <>
      <main className="main">
        <motion.h1>AQUI LOS DATOS</motion.h1>
        <motion.article className="main__articulo main__articulo-01">
          <motion.p className="soy">Soy el conteido de este artuculo RELLENO RELLENO RELLENO RELLENO RELLENO RELLENO RELLENORELLENORELLENORELLENORELLENORELLENO</motion.p>
          <motion.img style={{ width: "300px" }} src="https://images.all-free-download.com/images/graphiclarge/test_testing_optical_265619.jpg" />
        </motion.article>
        <motion.article className="main__articulo main__articulo-02">
          <motion.p className="soy">Soy el conteido de este artuculo RELLENO RELLENO RELLENO RELLENO RELLENO RELLENO RELLENORELLENORELLENORELLENORELLENORELLENO</motion.p>
          <motion.img style={{ width: "300px" }} src="https://images.all-free-download.com/images/graphiclarge/test_testing_optical_265619.jpg" />
        </motion.article>
        <motion.article initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 2 }} className="main__articulo main__articulo-03">
          <motion.p className="soy">Soy el conteido de este artuculo RELLENO RELLENO RELLENO RELLENO RELLENO RELLENO RELLENORELLENORELLENORELLENORELLENORELLENO</motion.p>
          <motion.img style={{ width: "300px" }} src="https://images.all-free-download.com/images/graphiclarge/test_testing_optical_265619.jpg" />
        </motion.article>
      </main>
    </>
  );
}

export default Main;
