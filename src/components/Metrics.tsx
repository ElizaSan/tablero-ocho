type Props = {
  moves: number
  exploredNodes: number
  executionTime: number
}

export function Metrics({
  moves,
  exploredNodes,
  executionTime
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
        Tiempo: {executionTime.toFixed(2)} ms
      </div>

    </div>
  )
}