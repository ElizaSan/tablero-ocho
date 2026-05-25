import { getNeighbors }
from "../utils/getNeighbors"

import { GOAL_STATE }
from "../constants/goal"

import { manhattan }
from "./heuristics"

import type { Node }
from "../types/node"

export function astar(
  initialState: number[]
){

  const startTime = performance.now()

  const visited =
    new Set<string>()

  const open: Node[] = []

  let exploredNodes = 0

  const root: Node = {

    state: initialState,

    parent: null,

    depth: 0,

    g: 0,

    h: manhattan(initialState),

    f: manhattan(initialState)
  }

  open.push(root)

  while(open.length > 0){

    exploredNodes++

    open.sort(
      (a, b) => (a.f ?? 0) - (b.f ?? 0)
    )

    const current = open.shift()!

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

      if(visited.has(neighborKey)){
        continue
      }

      const g =
        (current.g ?? 0) + 1

      const h =
        manhattan(neighbor)

      const f =
        g + h

      open.push({

        state: neighbor,

        parent: current,

        depth:
          current.depth + 1,

        g,
        h,
        f
      })
    }
  }

  return null
}