import { getNeighbors }
from "../utils/getNeighbors"

import { GOAL_STATE }
from "../constants/goal"

import type { Node }
from "../types/node"

export function dls(

  initialState: number[],

  limit: number
){

  const visited =
    new Set<string>()

  const stack: Node[] = []

  const root: Node = {

    state: initialState,

    parent: null,

    depth: 0
  }

  stack.push(root)

  while(stack.length > 0){

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

      return current
    }

    if(current.depth >= limit){
      continue
    }

    const neighbors =
      getNeighbors(current.state)

    for(const neighbor of neighbors){

      stack.push({

        state: neighbor,

        parent: current,

        depth:
          current.depth + 1
      })
    }
  }

  return null
}