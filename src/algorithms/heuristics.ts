export function manhattan(
  board: number[]
){

  let distance = 0

  for(let i = 0; i < board.length; i++){

    const value = board[i]

    if(value === 0) continue

    const targetRow =
      Math.floor((value - 1) / 3)

    const targetCol =
      (value - 1) % 3

    const row =
      Math.floor(i / 3)

    const col =
      i % 3

    distance +=
      Math.abs(row - targetRow) +
      Math.abs(col - targetCol)
  }

  return distance
}