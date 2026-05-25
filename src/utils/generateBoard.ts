import { shuffle } from "./shuffle"
import { isSolvable } from "./solvable"

export function generateBoard(){

  let board = shuffle([
    1,2,3,
    4,5,6,
    7,8,0
  ])

  while(!isSolvable(board)){
    board = shuffle(board)
  }

  return board
}