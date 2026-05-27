import { AlgorithmCard } from "./AlgorithmCard"

import "./AlgorithmsSection.css"
import "./Preview.css"

export function AlgorithmsSection(){

  return (

    <section
      className="algorithms-section"
    >

      <h2>

        Algorithms Included

      </h2>

      <div className="algorithms-grid">

        <AlgorithmCard

          title="BFS"

          description="
          Explores all nearby states
          before going deeper.
          "

          strength="
          Finds shortest path
          "
        />

        <AlgorithmCard

          title="DFS"

          description="
          Explores deeply before
          backtracking.
          "

          strength="
          Low memory usage
          "
        />

        <AlgorithmCard

          title="A*"

          description="
          Uses heuristics to guide
          the search efficiently.
          "

          strength="
          Fast and optimal
          "
        />

        <AlgorithmCard

          title="IDDFS"

          description="
          Combines DFS depth search
          with BFS completeness.
          "

          strength="
          Balanced strategy
          "
        />

      </div>

    </section>
  )
}