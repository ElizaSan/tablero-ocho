export function canMove(

  emptyIndex: number,

  tileIndex: number
){

  const emptyRow =
    Math.floor(emptyIndex / 3)

  const emptyCol =
    emptyIndex % 3

  const tileRow =
    Math.floor(tileIndex / 3)

  const tileCol =
    tileIndex % 3

  const rowDiff =
    Math.abs(emptyRow - tileRow)

  const colDiff =
    Math.abs(emptyCol - tileCol)

  return (
    rowDiff + colDiff === 1
  )
}