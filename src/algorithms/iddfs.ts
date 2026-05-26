import { dls }
from "./dls"

export function iddfs(
  initialState: number[],

  maxDepth = 50
){

  const startTime =
    performance.now()

  let exploredNodes = 0

  for(
    let depth = 0;
    depth <= maxDepth;
    depth++
  ){

    const result =
      dls(initialState, depth)

    exploredNodes++

    if(result){

      const endTime =
        performance.now()

      return {

        solution: result,

        exploredNodes,

        executionTime:
          endTime - startTime
      }
    }
  }

  return null
}