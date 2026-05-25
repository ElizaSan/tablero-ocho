import { getNeighbors } from "../utils/getNeighbors"

import { GOAL_STATE } from "../constants/goal"

import type { Node } from "../types/node"

export function bfs(initialState: number[]) {

  const startTime = performance.now()

  const visited = new Set<string>()

  const queue: Node[] = []

  let exploredNodes = 0

  const root: Node = {
    state: initialState,
    parent: null,
    depth: 0
  }

  queue.push(root)

  visited.add(initialState.toString())

  while(queue.length > 0){

    exploredNodes++

    const current = queue.shift()!

    const isGoal =
      current.state.toString() === GOAL_STATE.toString()

    if(isGoal){

      const endTime = performance.now()

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

      const key = neighbor.toString()

      if(!visited.has(key)){

        visited.add(key)

        queue.push({
          state: neighbor,
          parent: current,
          depth: current.depth + 1
        })
      }
    }
  }

  return null
}