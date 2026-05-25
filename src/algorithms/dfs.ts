import { getNeighbors }
from "../utils/getNeighbors"

import { GOAL_STATE }
from "../constants/goal"

import type { Node }
from "../types/node"

export function dfs(
  initialState: number[]
){

  const startTime =
    performance.now()

  const visited =
    new Set<string>()

  const stack: Node[] = []

  let exploredNodes = 0

  const root: Node = {

    state: initialState,

    parent: null,

    depth: 0
  }

  stack.push(root)

  while(stack.length > 0){

    exploredNodes++

    const current =
      stack.pop()!

    const key =
      current.state.toString()

    if(visited.has(key)){
      continue
    }

    visited.add(key)

    const isGoal =

      current.state.toString() ===
      GOAL_STATE.toString()

    if(isGoal){

      const endTime =
        performance.now()

      return {

        solution: current,

        exploredNodes,

        executionTime:
          endTime - startTime
      }
    }

    const neighbors =
      getNeighbors(current.state)

    for(const neighbor of neighbors){

      const neighborKey =
        neighbor.toString()

      if(!visited.has(neighborKey)){

        stack.push({

          state: neighbor,

          parent: current,

          depth:
            current.depth + 1
        })
      }
    }
  }

  return null
}