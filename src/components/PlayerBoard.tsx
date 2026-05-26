import "./PlayerBoard.css"
import { canMove }from "../utils/canMove"

type Props = {

  board: number[]

  onMove:
    (index: number) => void
}

export function PlayerBoard({

  board,

  onMove

}: Props){

    const emptyIndex =
  board.indexOf(0)

  return (

    <div className="player-board">

      {board.map((tile, index) => {

  const movable =

    canMove(
      emptyIndex,
      index
    )

  return (

<button

      key={index}

      className={

        movable

          ? "player-tile movable"

          : "player-tile"
      }

      onClick={() =>
        onMove(index)
      }
    >

      {
        tile === 0
          ? ""
          : tile
      }

    </button>
       )
})}



    </div>
  )
}