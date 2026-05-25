import { motion } from "framer-motion"
import { usePuzzleStore } from "../store/puzzleStore"

type Props = {
  board: number[]
}

export function Board({ board }: Props){

  const speed =
    usePuzzleStore(
        state => state.speed
  )  

  return (

    <div
      style={{

        width: "320px",

        height: "320px",

        position: "relative",

        background: "#111827",

        borderRadius: "10px"
      }}
    >

      {board.map((tile, index) => {

        if(tile === 0){
          return null
        }

        const row =
          Math.floor(index / 3)

        const col =
          index % 3

        return (

          <motion.div

            key={tile}

            animate={{

              x: col * 110,

              y: row * 110
            }}

            transition={{

              duration: speedToDuration(speed)
            }}

            style={{

              width: "100px",

              height: "100px",

              position: "absolute",

              background: "#d1d5db",

              display: "flex",

              justifyContent: "center",

              alignItems: "center",

              fontSize: "2rem",

              fontWeight: "bold",

              borderRadius: "10px",

              color: "#9ca3af"
            }}
          >

            {tile}

          </motion.div>
        )
      })}
    </div>
  )
}

function speedToDuration(
  speed: number
){

  return speed / 1000
}