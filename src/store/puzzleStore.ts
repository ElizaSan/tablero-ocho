import { create } from "zustand"

import { generateBoard } from "../utils/generateBoard"

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
    
  message: string

  setMessage:
    (message: string) => void  

  playerBoard: number[]

  setPlayerBoard:
    (board: number[]) => void  

  countdown: number | null

  setCountdown:
    (countdown: number | null)
      => void
  
  isPlaying: boolean

  setIsPlaying:
    (isPlaying: boolean)
      => void    

  gameStartTime: number | null

  setGameStartTime:
    (time: number | null)
      => void

  algorithmFinishTime: number | null

  setAlgorithmFinishTime:
    (time: number | null)
      => void

  playerTotalTime: number | null

  setPlayerTotalTime:
    (time: number | null)
      => void    
  
  visualSolveTime: number

  setVisualSolveTime:
    (time: number) => void    


}

export const usePuzzleStore =
  create<PuzzleStore>((set) => {

    const initialBoard =
      generateBoard()

    return ({

      board: initialBoard,

      setBoard:
        (board) => set({ board }),

      playerBoard: initialBoard,

      setPlayerBoard:
        (playerBoard) =>
          set({ playerBoard }),


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

    message: "",

    setMessage:
      (message) =>
        set({ message }),


    stopRequested: false,

    setStopRequested:
    (stopRequested) =>
        set({ stopRequested }),


    shuffleBoard:
      () => {

        const newBoard =
          generateBoard()

        set({

          board: newBoard,

          playerBoard: newBoard,

          moves: 0,

          exploredNodes: 0,

          executionTime: 0
        })
      },

      countdown: null,

    setCountdown:
      (countdown) =>
        set({ countdown }),

    isPlaying: false,

    setIsPlaying:
      (isPlaying) =>
        set({ isPlaying }),  

    
    gameStartTime: null,

    setGameStartTime:
      (gameStartTime) =>
        set({ gameStartTime }),

    algorithmFinishTime: null,

    setAlgorithmFinishTime:
      (algorithmFinishTime) =>
        set({ algorithmFinishTime }),
      
    playerTotalTime: null,

    setPlayerTotalTime:
      (playerTotalTime) =>
        set({ playerTotalTime }), 

    visualSolveTime: 0,

    setVisualSolveTime:
      (visualSolveTime) =>
        set({ visualSolveTime }),  



      
  })
})
