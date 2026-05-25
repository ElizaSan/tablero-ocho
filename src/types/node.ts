export type Node = {
  state: number[]

  parent: Node | null

  depth: number

  g?: number
  h?: number
  f?: number
}