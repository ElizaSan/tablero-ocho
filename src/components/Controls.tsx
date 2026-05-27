import "./Controls.css"

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

    <div className="controls">

      <select

        className="algorithm-select"

        value={selectedAlgorithm}

        onChange={(e) =>
          onAlgorithmChange(
            e.target.value
          )
        }

        disabled={isSolving}
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

        <option value="IDDFS">
          IDDFS
        </option>

      </select>

<div className="controls">

        <span>
            {speed} ms
        </span>

        <input

          className="speed-slider"

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

          disabled={isSolving}
        />

        </div>

      <button  className="control-button"
           onClick={onShuffle}
           disabled={isSolving}
           >
        Shuffle
      </button>

      <button className="control-button"
        onClick={onSolve}
        disabled={isSolving}>
        Solve
      </button>

      {
        isSolving && (

            <button className="control-button" onClick={onStop}>
            Stop
            </button>
        )
      }

    </div>
  )
}