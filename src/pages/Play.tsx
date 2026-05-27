import { usePuzzleStore } from "../store/puzzleStore"

import { Board } from "../components/Board"
import { Controls } from "../components/Controls"
import { Metrics } from "../components/Metrics"

import { bfs } from "../algorithms/bfs"
import { dfs } from "../algorithms/dfs"
import { iddfs } from "../algorithms/iddfs"

import { reconstructPath } from "../utils/reconstructPath"
import { canMove } from "../utils/canMove"
import { isGoal } from "../utils/isGoal"

import { astar } from "../algorithms/astar"

import { useRef } from "react"

import "./Play.css"

export function Play() {

  const {

    board,
    setBoard,

    moves,
    setMoves,

    exploredNodes,
    setExploredNodes,

    executionTime,
    setExecutionTime,

    speed,
    setSpeed,

    isSolving,
    setIsSolving,

    shuffleBoard,

    selectedAlgorithm,
    setSelectedAlgorithm,

    message,
    setMessage,

    playerBoard,
    setPlayerBoard,

    countdown,
    setCountdown,

    isPlaying,
    setIsPlaying,

    gameStartTime,
    setGameStartTime,

    algorithmFinishTime,
    setAlgorithmFinishTime,

    playerTotalTime,
    setPlayerTotalTime,

    visualSolveTime,
    setVisualSolveTime,

    playerMoves,
    setPlayerMoves,

    showMetrics,
    setShowMetrics,

  } = usePuzzleStore()

  const stopRef =
  useRef(false)

  async function animateSolution(
    path: number[][]
  ){

    stopRef.current = false

    for(const state of path){

      if(stopRef.current){

        setIsSolving(false)

        return
      }

      setBoard(state)

      await new Promise(resolve =>
        setTimeout(resolve, speed)
      )
    }

    setIsSolving(false)
    
    const finishTime =
      performance.now()

    setAlgorithmFinishTime(
      finishTime
    )
    setShowMetrics(true)
    

    setMessage(
      "La IA ganó!"
    )


  }

  function handlePlayerMove(
    index: number
  ){

    if(!isPlaying){
      return
    }

    const emptyIndex =
      playerBoard.indexOf(0)

    const validMove =
      canMove(
        emptyIndex,
        index
      )

    if(!validMove){
      return
    }

    const newBoard =
      [...playerBoard]

    ;[
      newBoard[index],
      newBoard[emptyIndex]
    ] = [

      newBoard[emptyIndex],
      newBoard[index]
    ]

    setPlayerBoard(newBoard)
    setPlayerMoves(
      playerMoves + 1
    )

    if(isGoal(newBoard)){

      const playerFinishTime =
        performance.now()

      const totalTime =
      (
        playerFinishTime
        -
        gameStartTime!
      ) / 1000

    setPlayerTotalTime(
      totalTime
    )  

      if(algorithmFinishTime){

        const difference =

          (
            playerFinishTime
            -
            algorithmFinishTime
          ) / 1000

        setMessage(

          `Terminaste ${
            difference.toFixed(2)
          }s después`
        )

      } else {

        setMessage(
          "Ganaste!"
        )
      }
      stopRef.current = true
      setIsPlaying(false)
    }


  }


    function handleStop(){

      stopRef.current = true
      setIsPlaying(false)
    }

    function handleShuffle(){

      setIsPlaying(false)

      if(isSolving) return

      setMessage("")

      setPlayerTotalTime(null)

      setAlgorithmFinishTime(null)

      shuffleBoard()
    }

    async function startCompetition(){

      if(isSolving) return

      if(isGoal(board)){

        setMessage(
          "Haz shuffle antes de iniciar"
        )

        return
      }

      setMessage("")

      setCountdown(3)

      for(
        let i = 3;
        i > 0;
        i--
      ){

        setCountdown(i)

        await new Promise(resolve =>
          setTimeout(resolve, 1000)
        )
      }

      setCountdown(null)
      setIsPlaying(true)

      setGameStartTime(
        performance.now()
      )

      setAlgorithmFinishTime(null)
      setPlayerTotalTime(null)

      handleSolve()
    }


    function handleSolve(){

      if(isSolving) return

      setIsSolving(true)
      setMessage("")

      let result = null

      if(selectedAlgorithm === "BFS"){

        result = bfs(board)
      }

      if(selectedAlgorithm === "A*"){

        result = astar(board)
      }

      if(selectedAlgorithm === "DFS"){

        result = dfs(board)
      }

      if(selectedAlgorithm === "IDDFS"){

        result = iddfs(board)
      }

      if(!result){
        setMessage("Solución no encontrada por el algoritmo") 
        setIsSolving(false)

        return
      }

      const path =
        reconstructPath(result.solution)

      const visualTime =

      (
        (path.length - 1)
        *
        speed
      ) / 1000

      setVisualSolveTime(
        visualTime
      )  

      setMoves(path.length - 1)

      setExploredNodes(
        result.exploredNodes
      )

      setExecutionTime(
        result.executionTime/1000
      )

      animateSolution(path)
    }

return (

  <div className="play-page">

    <div className="play-header">

      <h1>
        Play Against AI
      </h1>

      <p>

        Try to solve the puzzle
        before the algorithm does.

      </p>

    </div>

    <div className="play-content">

      <div className="boards-container">

        <div className="board-section">

        <h2>
          Player
        </h2>

        <Board

          board={playerBoard}

          interactive

          onMove={handlePlayerMove}
        />

        </div>

        <div className="board-section">

          <h2>
            Algorithm
          </h2>

          <Board board={board} />
          

        </div>

      </div>

      <Controls

          isSolving={isSolving}

          selectedAlgorithm={
            selectedAlgorithm
          }

          onAlgorithmChange={
            setSelectedAlgorithm
          }

          speed={speed}

          onSpeedChange={setSpeed}

          onShuffle={handleShuffle}

          onSolve={startCompetition}

          onStop={handleStop}
        />

        <div className="game-info">

            {
            (
              message ||
              playerTotalTime !== null
            ) && (

              <div className="status-card">

                {
                  message && (

                    <div className="message">

                      {message}

                    </div>
                  )
                }

                {
                  playerTotalTime !== null && (

                    <div className="total-time">

                      Tiempo total:
                      {" "}

                      {
                        playerTotalTime.toFixed(2)
                      }s

                    </div>
                  )
                }

              </div>
            )
          }

        </div>  

        <div className="bottom-panel">

          <Metrics

            moves={moves}

            exploredNodes={
              exploredNodes
            }

            executionTime={
              executionTime
            }

            visualSolveTime={
              visualSolveTime
            }

            selectedAlgorithm={
              selectedAlgorithm
            }

            showMetrics={
              showMetrics
            }

            isSolving={
              isSolving
            }
          />

          

    </div>

    {
      countdown !== null && (

        <div className="countdown">

          {countdown}

        </div>
      )
    }



    </div>
  </div>
)
  

}


