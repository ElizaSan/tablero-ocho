import "./Metrics.css"

type Props = {

  moves: number

  exploredNodes: number

  executionTime: number

  visualSolveTime: number

  selectedAlgorithm: string

  showMetrics: boolean

  isSolving: boolean
}

export function Metrics({

  moves,

  exploredNodes,

  executionTime,

  visualSolveTime,

  selectedAlgorithm,

  showMetrics,

  isSolving,

}: Props){

  if(!showMetrics){

    if(!isSolving){
      return null
    }

    return (

      <div className="metrics-loading">

        <h3>
          {selectedAlgorithm}
        </h3>

        <p>
          Solving...
        </p>

      </div>
    )
  }

  return (

    <div className="metrics-card">

      <div className="metrics-header">

        <h2>
          {selectedAlgorithm}
        </h2>

        <span>
          Algorithm Metrics
        </span>

      </div>

      <div className="metrics-grid">

        <div className="metric-box">

          <h3>
            Moves
          </h3>

          <p>
            {moves}
          </p>

        </div>

        <div className="metric-box">

          <h3>
            Nodes
          </h3>

          <p>
            {exploredNodes}
          </p>

        </div>

        <div className="metric-box">

          <h3>
            Tiempo computacional
          </h3>

          <p>
            {
              executionTime.toFixed(2)
            }s
          </p>

        </div>

        <div className="metric-box">

          <h3>
            Tiempo visual
          </h3>

          <p>
            {
              visualSolveTime.toFixed(2)
            }s
          </p>

        </div>

      </div>

    </div>
  )
}