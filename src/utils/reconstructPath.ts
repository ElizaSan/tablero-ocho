import type { Node } from "../types/node"

export function reconstructPath(node: Node){

  const path: number[][] = []

  let current: Node | null = node

  while(current){

    path.unshift(current.state)

    current = current.parent
  }

  return path
}