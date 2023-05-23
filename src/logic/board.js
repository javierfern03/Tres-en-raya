import { WINNER_COMBOS } from "../constants";

export const checkWinner = (boardCheck) => {
  for (const combo of WINNER_COMBOS) {
    const [a, b, c] = combo;
    if (
      boardCheck[a] &&
      boardCheck[a] == boardCheck[b] &&
      boardCheck[a] == boardCheck[c]
    ) {
      return boardCheck[a];
    }
  }
  return null;
};

export const checkEndGame = (boardCheck) => {
  return boardCheck.every((Square) => Square !== null);
};
