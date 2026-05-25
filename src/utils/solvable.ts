export function isSolvable(board: number[]) {

  let inversions = 0

  for(let i = 0; i < board.length; i++){

    for(let j = i + 1; j < board.length; j++){

      if(
        board[i] &&
        board[j] &&
        board[i] > board[j]
      ){
        inversions++
      }
    }
  }

  return inversions % 2 === 0
}