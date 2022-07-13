import React from "react";
import "./GamePage.css";
import Board from "./Board/Board";
import KeysConteiner from "./Keys/KeysConteiner";
import { useNavigate } from "react-router-dom";

export default function GamePage() {

  return (
    <div className="game-container">
      <Board />
      <KeysConteiner />
    </div>
  );
}
