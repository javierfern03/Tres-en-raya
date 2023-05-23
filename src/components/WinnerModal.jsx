import React from "react";
import { Square } from "./Square";

const WinnerModal = ({ winner, resetGame }) => {
  const winnerText = winner == false ? "Empate" : "Gano:";
  if (winner == null) return null;

  return (
    <section className="winner">
      <div className="text">
        <h2>{winnerText}</h2>

        <header className="win">{winner && <Square>{winner}</Square>}</header>

        <footer>
          <button onClick={resetGame}>Empezar de nuevo</button>
        </footer>
      </div>
    </section>
  );
};

export default WinnerModal;
