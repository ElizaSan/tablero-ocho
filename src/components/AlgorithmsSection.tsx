import { AlgorithmCard } from "./AlgorithmCard"

import "./AlgorithmsSection.css"
import "./Preview.css"

export function AlgorithmsSection(){

  return (

    <section
      className="algorithms-section"
    >

      <h2>

        Algoritmos

      </h2>

      <div className="algorithms-grid">

        <AlgorithmCard

          title="BFS"

          description="
          Explora todos los estados cercanos
          antes de profundizar.
          "

          strength="
          Encuentra el camino más corto
          "
        />

        <AlgorithmCard

          title="DFS"

          description="
          Explora en profundidad antes de
          retroceder.
          "

          strength="
          Bajo uso de memoria
          "
        />

        <AlgorithmCard

          title="A*"

          description="
          Utiliza heurísticas para guiar
          la búsqueda de manera eficiente.
          "

          strength="
          Rápida y óptima
          "
        />

        <AlgorithmCard

          title="IDDFS"

          description="
          Combina la búsqueda en profundidad DFS
          con la búsqueda en amplitud BFS.
          "

          strength="
          Estrategia equilibrada
          "
        />

      </div>

    </section>
  )
}