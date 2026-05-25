export function getNeighbors(board: number[]) {

  const neighbors: number[][] = []

  const emptyIndex = board.indexOf(0)

  const row = Math.floor(emptyIndex / 3)
  const col = emptyIndex % 3

  const moves = [
    [-1, 0], // arriba
    [1, 0],  // abajo
    [0, -1], // izquierda
    [0, 1]   // derecha
  ]

  for(const [dx, dy] of moves){

    const newRow = row + dx
    const newCol = col + dy

    const valid =
      newRow >= 0 &&
      newRow < 3 &&
      newCol >= 0 &&
      newCol < 3

    if(valid){

      const newIndex = newRow * 3 + newCol

      const newBoard = [...board]

      ;[newBoard[emptyIndex], newBoard[newIndex]] =
      [newBoard[newIndex], newBoard[emptyIndex]]

      neighbors.push(newBoard)
    }
  }

  return neighbors
}