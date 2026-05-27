import "./Board.css"

import { canMove }
from "../utils/canMove"

type Props = {

  board: number[]

  interactive?: boolean

  onMove?:
    (index: number) => void
}

export function Board({

  board,

  interactive = false,

  onMove

}: Props){

  const emptyIndex =
    board.indexOf(0)

  return (

    <div className="board">

      {
        board.map((tile, index) => {

          const movable =

            canMove(
              emptyIndex,
              index
            )

          return (

            <button

              key={index}

              className={`
                tile
                ${
                  movable &&
                  interactive
                    ? "tile-movable"
                    : ""
                }
              `}

              onClick={() => {

                if(
                  interactive &&
                  onMove
                ){

                  onMove(index)
                }
              }}
            >

              {
                tile === 0
                  ? ""
                  : tile
              }

            </button>
          )
        })
      }

    </div>
  )
}