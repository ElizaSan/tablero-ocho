import { usePuzzleStore } from "./store/puzzleStore"

import { Board } from "./components/Board"
import { Controls } from "./components/Controls"
import { Metrics } from "./components/Metrics"

import { bfs } from "./algorithms/bfs"
import { dfs } from "./algorithms/dfs"

import { reconstructPath } from "./utils/reconstructPath"
import { generateBoard } from "./utils/generateBoard"

import { astar } from "./algorithms/astar"

import { useRef } from "react"

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
    setSelectedAlgorithm

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
  }




    function handleStop(){

      stopRef.current = true
    }

    function handleShuffle(){

      if(isSolving) return

      shuffleBoard()
    }

    function handleSolve(){

      if(isSolving) return

      setIsSolving(true)

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

      if(!result){

        setIsSolving(false)

        return
      }

      const path =
        reconstructPath(result.solution)

      setMoves(path.length - 1)

      setExploredNodes(
        result.exploredNodes
      )

      setExecutionTime(
        result.executionTime
      )

      animateSolution(path)
    }

  return (

    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
      }}
    >

      <Board board={board} />

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

        onSolve={handleSolve}

        onStop={handleStop}
        
      />

      <Metrics
        moves={moves}
        exploredNodes={exploredNodes}
        executionTime={executionTime}
      />

    </div>
  )

  

}



export default App