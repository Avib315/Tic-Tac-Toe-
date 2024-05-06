export default function createBoard() {
  let board = { arr: [] };
  for (let i = 1; i <= 9; i++) {
    board[i] = { input: null, position: i };
    board.arr.push(i);
  }
  return board;
}
