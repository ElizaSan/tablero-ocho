import { create } from "zustand"

import { generateBoard }
from "../utils/generateBoard"

type PuzzleStore = {

  board: number[]

  setBoard:
    (board: number[]) => void

  moves: number

  setMoves:
    (moves: number) => void

  exploredNodes: number

  setExploredNodes:
    (nodes: number) => void

   speed: number

   setSpeed:
    (speed: number) => void
       
  executionTime: number

  setExecutionTime:
    (time: number) => void

  selectedAlgorithm: string

  setSelectedAlgorithm:
    (algorithm: string) => void  

  stopRequested: boolean

  setStopRequested:
    (stopRequested: boolean) => void

  shuffleBoard:
    () => void

   isSolving: boolean

   setIsSolving:
    (isSolving: boolean) => void 
}

export const usePuzzleStore =
  create<PuzzleStore>((set) => ({

    board: generateBoard(),

    setBoard:
      (board) => set({ board }),

    moves: 0,

    setMoves:
      (moves) => set({ moves }),

    exploredNodes: 0,

    setExploredNodes:
      (exploredNodes) =>
        set({ exploredNodes }),

    executionTime: 0,

    setExecutionTime:
      (executionTime) =>
        set({ executionTime }),

    selectedAlgorithm: "BFS",

    setSelectedAlgorithm:
    (selectedAlgorithm) =>
        set({ selectedAlgorithm }),

    speed: 500,

    setSpeed:
    (speed) => set({ speed }),

    isSolving: false,

    setIsSolving:
    (isSolving) =>
        set({ isSolving }),

    stopRequested: false,

    setStopRequested:
    (stopRequested) =>
        set({ stopRequested }),


    shuffleBoard:
      () => set({

        board: generateBoard(),

        moves: 0,

        exploredNodes: 0,

        executionTime: 0
      })
  }))