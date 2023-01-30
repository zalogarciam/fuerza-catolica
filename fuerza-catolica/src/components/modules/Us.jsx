import Header from "./Header";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import useAboutUs from "../../hooks/useAboutUs";
import { fetchReadAboutUsData } from "../../redux/thunks/aboutUsThunk";
const Us = () => {
  const dispatch = useDispatch();
  const { loading, aboutUsData } = useAboutUs();
  useEffect(() => {
    document.title = "Fuerza Catolica - Nosotros";
    Object.keys(aboutUsData).length === 0 && dispatch(fetchReadAboutUsData());
    console.log(typeof aboutUsData);
  }, []);

  console.log(aboutUsData);

  return (
    <div>
      <Header></Header>
      <div className="container " style={{ height: "50vh" }}>
        <h2>Nosotros: Fuerza Catolica</h2>
        <div>
          <h5>
            Fuerza Catolica es un Grupo de Opinión Estudiantil que busca
            representar responsable y eficientemente al alumno santamariano,
            generando un vínculo activo entre el estudiante y la institución
            bajo un marco innovador en la representación universitaria donde
            prevalece la amistad, el respeto y el trabajo en equipo, aportando
            soluciones y propuestas ante los constantes requerimientos de
            calidad que exige la vida académica y universitaria en la
            actualidad, comprometidos con los valores y principios propios de la
            Universidad Católica de Santa María.
          </h5>
        </div>
        <br></br>
        <div>
          <h3>Nuestras Logros</h3>
          <div>
            <div>
              {Object.entries(aboutUsData)
                .slice(0, 10)
                .map(([key, value]) => (
                  <div key={value.id}>
                    <h5>{value.title}</h5>
                    <span>{value.body}</span>
                  </div>
                ))}
            </div>
          </div>
        </div>
        <br></br>
        <h3>Nuestras Metas</h3>
        <div>
          <div>
            {Object.entries(aboutUsData)
              .slice(10, 20)
              .map(([key, value]) => (
                <div key={value.id}>
                  <h5>{value.title}</h5>
                  <span>{value.body}</span>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Us;
