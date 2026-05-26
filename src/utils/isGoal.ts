import { GOAL_STATE } from "../constants/goal"

export function isGoal(
  board: number[]
){

  return (

    board.toString() ===
    GOAL_STATE.toString()
  )
}