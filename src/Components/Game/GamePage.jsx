import React from 'react'
import './GamePage.css'
import Board from './Board/Board'
import KeysConteiner from './Keys/KeysConteiner'
export default function GamePage() {
  return (
    <div className='game-container'>
        <Board />
        <KeysConteiner/>
    </div>
  )
}
