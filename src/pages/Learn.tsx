import "./Learn.css"

const algorithms = [

  {
    name: "BFS",
    title: "Breadth-First Search",

    description:
      "Explora todas las posibilidades cercanas antes de avanzar a niveles más profundos.",

    advantages: [
      "Encuentra la solución más corta",
      "Garantiza encontrar una solución"
    ],

    disadvantages: [
      "Consume mucha memoria",
      "Explora muchos estados"
    ]
  },

  {
    name: "DFS",
    title: "Depth-First Search",

    description:
      "Sigue un camino hasta el final antes de regresar y probar otras opciones.",

    advantages: [
      "Usa poca memoria",
      "Implementación sencilla"
    ],

    disadvantages: [
      "Puede perder tiempo en caminos incorrectos",
      "No garantiza la mejor solución"
    ]
  },

  {
    name: "IDDFS",
    title: "Iterative Deepening DFS",

    description:
      "Combina DFS con límites de profundidad crecientes.",

    advantages: [
      "Poca memoria",
      "Encuentra solución"
    ],

    disadvantages: [
      "Repite búsquedas"
    ]
  },

  {
    name: "A*",
    title: "A-Star Search",

    description:
      "Utiliza una heurística para estimar qué movimientos acercan más rápido a la solución.",

    advantages: [
      "Muy eficiente",
      "Encuentra soluciones óptimas"
    ],

    disadvantages: [
      "Mayor complejidad de implementación"
    ]
  }
]

export function Learn() {

  return (

    <div className="learn-page">

      <section className="learn-hero">

        <h1>
          Aprende
        </h1>

        <p>
          Descubre cómo los algoritmos de búsqueda
          resuelven el Puzzle de 8.
        </p>

      </section>

      <section className="learn-section">

        <h2>
          ¿Qué es el Puzzle de 8?
        </h2>

        <p>

          El Puzzle de 8 es un rompecabezas formado
          por ocho fichas numeradas y un espacio vacío.

          El objetivo consiste en mover las fichas hasta
          alcanzar la configuración ordenada.

        </p>

      </section>

      <section className="learn-section">

        <h2>
          ¿Por qué es interesante?
        </h2>

        <p >

          Aunque parece un juego sencillo, el número de
          configuraciones posibles es muy grande.

          Por esta razón se utiliza frecuentemente para
          enseñar algoritmos de búsqueda e inteligencia
          artificial.

        </p>

      </section>

      <section className="learn-section">

        <h2>
          ¿Cómo resuelve el problema una IA?
        </h2>

        <p>

          Una IA no ve el tablero como una persona.
          En lugar de eso, analiza estados posibles y
          busca una secuencia de movimientos que lleve
          desde la posición inicial hasta la solución.

        </p>

      </section>

      <section className="learn-section">

        <h2>
          Algoritmos
        </h2>

        <div className="algorithms-grid">

          {
            algorithms.map(algorithm => (

              <div
                key={algorithm.name}
                className="algorithm-card"
              >

                <h3>
                  {algorithm.name}
                </h3>

                <h4>
                  {algorithm.title}
                </h4>

                <p>
                  {algorithm.description}
                </p>

                <strong>
                  Ventajas
                </strong>

                <ul>

                  {
                    algorithm.advantages.map(item => (

                      <li key={item}>
                        {item}
                      </li>
                    ))
                  }

                </ul>

                <strong>
                  Desventajas
                </strong>

                <ul>

                  {
                    algorithm.disadvantages.map(item => (

                      <li key={item}>
                        {item}
                      </li>
                    ))
                  }

                </ul>

              </div>
            ))
          }

        </div>

      </section>

      <section className="learn-section">

        <h2>
          Comparación rápida
        </h2>

        <table className="comparison-table">

          <thead>

            <tr className="comparison-table-under">
              <th>Algoritmo</th>
              <th>Memoria</th>
              <th>Velocidad</th>
              <th>Óptimo</th>
            </tr>

          </thead>

          <tbody>

            <tr className="comparison-table-under">
              <td>BFS</td>
              <td>Alta</td>
              <td>Media</td>
              <td>Sí</td>
            </tr>

            <tr className="comparison-table-under">
              <td>DFS</td>
              <td>Baja</td>
              <td>Baja</td>
              <td>No</td>
            </tr>

            <tr className="comparison-table-under">
              <td>IDDFS</td>
              <td>Baja</td>
              <td>Media</td>
              <td>Sí</td>
            </tr>

            <tr className="comparison-table-under">
              
              <td>A*</td>
              <td>Media</td>
              <td>Alta</td>
              <td>Sí</td>
            </tr>

          </tbody>

        </table>

      </section>

      <section className="learn-section">

        <h2>
          ¿Qué significan las métricas?
        </h2>

        <div className="metrics-grid">

          <div className="metric-card">
            <h3>Movimientos</h3>
            <p>Movimientos necesarios para resolver el tablero.</p>
          </div>

          <div className="metric-card">
            <h3>Nodos explorados</h3>
            <p>Estados analizados por el algoritmo.</p>
          </div>

          <div className="metric-card">
            <h3>Tiempo computacional</h3>
            <p>Tiempo real de cálculo.</p>
          </div>

          <div className="metric-card">
            <h3>Tiempo visual</h3>
            <p>Tiempo que tarda la animación.</p>
          </div>

        </div>

      </section>

    </div>
  )
}