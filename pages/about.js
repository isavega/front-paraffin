import React from "react";
import styles from "../styles/Home.module.css";

function About() {
  return (
    <div className={styles.container}>
      <div>
        <h1 className={styles.title}>¿Por qué lo hacemos?</h1>
        <div className={styles.description}>
          <p>
            Encontrar recursos para aprender en internet es fácil, pero ¿Has
            considerado lo dificil que es encontrar el mejor curso para poder
            desarrollar las capacidades que se espera de un desarrollador
            profesional?
          </p>
          <p>
            En esta comunidad esperamos que la gente que decide irse por el
            camino del desarrollo tenga las mejores herramientas y qué mejor si
            los recursos son los que ya existen y estan evaluados y recomendados
            por las personas que decidieron elegir el mismo camino que tú o
            caminos similares.
          </p>
          <p>
            Aprovechemos las experiencias de los demás y compartamos las
            nuestras.
          </p>
        </div>
      </div>
      <div>
        <h1 className={styles.title}>¿Quienes somos?</h1>
        <div className={styles.description}>
          <p>
            La FIN es un intesivo de desarrollo en Puerto Natales creado por la
            Start up chilena Fintual. El llamado es a personas que tenían ganas
            de cambiar de rubro y querían adentrarse en el mundo del desarrollo.
            La modalidad de trabajo es en grupos, donde los mentores asignaban
            gente según su criterio. En ese momento no sabían que formarían al
            mejor equipo de la FIN.
          </p>
          <p>
            Con esto llegaron a 3 integrantes: Cecy, una digital nomad, eterna
            viuda de Selena, fan de la farandula de realeza y los cumpleaños,
            que es guitarrista clásica e historiadora; Isa, una máquina del
            frontend, fan de Shrek 2, meada por tigres, no tiene color favorito,
            fan de hacer cosas imbéciles y embajadora de Papurri; Vane,
            entusiasta de los juegos de mesa, fan del sushi, de los chistes
            fomes, las cosas imbéciles y la electrónica, que se dio un
            descansito entre robots y protocolos de comunicación.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
