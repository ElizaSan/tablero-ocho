import "./Preview.css"

const previewBoard = [

  1,2,3,
  4,5,6,
  7,0,8
]

function MiniBoard(){

  return (

    <div className="mini-board">

      {
        previewBoard.map(
          (tile, index) => (

            <div
              key={index}
              className="mini-tile"
            >

              {
                tile === 0
                  ? ""
                  : tile
              }

            </div>
          )
        )
      }

    </div>
  )
}

export function Preview(){

  return (

    <section className="preview">

      <div className="preview-section">

        <h2>
          Jugador
        </h2>

        <MiniBoard />

      </div>

      <div className="preview-section">

        <h2>
          IA
        </h2>

        <MiniBoard />

      </div>

    </section>
  )
}