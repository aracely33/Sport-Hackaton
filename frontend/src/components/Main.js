import Analisis from "./Analisis";
import Introduccion from "./Introduccion";
import Conclusiones from "./Conclusiones";

function Main() {
  return (
    <>
      <main className="main">
        <Introduccion />
        <Analisis />
        <Conclusiones />
      </main>
    </>
  );
}

export default Main;
