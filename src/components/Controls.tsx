type Props = {

  selectedAlgorithm: string

  onAlgorithmChange:
    (algorithm: string) => void

  onShuffle: () => void

  onSolve: () => void

  speed: number

  onSpeedChange:
    (speed: number) => void

  isSolving: boolean

  onStop: () => void

}

export function Controls({

  selectedAlgorithm,

  onAlgorithmChange,

  onShuffle,

  onSolve,

  speed,

  onSpeedChange,

  isSolving,

  onStop,

}: Props){

  return (

    <div
      style={{
        display: "flex",
        gap: "10px",
        marginTop: "20px"
      }}
    >

      <select

        disabled={isSolving}

        value={selectedAlgorithm}

        onChange={(e) =>
          onAlgorithmChange(
            e.target.value
          )
        }
      >

        <option value="BFS">
          BFS
        </option>

        <option value="A*">
          A*
        </option>

        <option value="DFS">
          DFS
        </option>

      </select>

      <div
        style={{
            display: "flex",
            alignItems: "center",
            gap: "10px"
        }}
        >

        <span>
            {speed} ms
        </span>

        <input
            disabled={isSolving}

            type="range"

            min="50"

            max="1000"

            step="50"

            value={speed}

            onChange={(e) =>
            onSpeedChange(
                Number(e.target.value)
            )
            }
        />

        </div>

      <button 
           onClick={onShuffle}
           disabled={isSolving}
           >
        Shuffle
      </button>

      <button 
        onClick={onSolve}
        disabled={isSolving}>
        Solve
      </button>

      {
        isSolving && (

            <button onClick={onStop}>
            Stop
            </button>
        )
      }

    </div>
  )
}