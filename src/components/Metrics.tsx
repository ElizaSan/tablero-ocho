type Props = {
  moves: number
  exploredNodes: number
  executionTime: number
  visualSolveTime: number
}

export function Metrics({
  moves,
  exploredNodes,
  executionTime,
  visualSolveTime,
}: Props){

  return (

    <div
      style={{
        marginTop: "20px",
        display: "flex",
        flexDirection: "column",
        gap: "10px"
      }}
    >

      <div>
        Movimientos: {moves}
      </div>

      <div>
        Nodos explorados: {exploredNodes}
      </div>

      <div>
        Tiempo computacional:
        {" "}

        {
          executionTime.toFixed(2)
        }s
      </div>

      <div>

        Tiempo visual:
        {" "}

        {
          visualSolveTime.toFixed(2)
        }s
      </div>

    </div>
  )
}