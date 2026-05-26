import { usePuzzleStore } from "./store/puzzleStore"

import { Board } from "./components/Board"
import { Controls } from "./components/Controls"
import { Metrics } from "./components/Metrics"
import { PlayerBoard } from "./components/PlayerBoard"

import { bfs } from "./algorithms/bfs"
import { dfs } from "./algorithms/dfs"
import { iddfs } from "./algorithms/iddfs"

import { reconstructPath } from "./utils/reconstructPath"
import { canMove } from "./utils/canMove"
import { isGoal } from "./utils/isGoal"

import { astar } from "./algorithms/astar"

import { useRef } from "react"

import "./App.css"

function App() {

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
      shuffleBoard()
    }

    async function startCompetition(){

      if(isSolving) return

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
        setMessage("Solución no encontrada") 
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

  <div className="app">

  <div className="boards-container">

    <div className="board-section">

      <h2>
        Player
      </h2>

      <PlayerBoard

        board={playerBoard}

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
    />

    {
      message && (

        <div className="message">
          {message}
        </div>
      )
    }
    {
    countdown !== null && (

      <div className="countdown">

        {countdown}

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



export default App