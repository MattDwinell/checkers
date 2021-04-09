import './App.css';
import Board from './components/Board'
import { useState } from 'react'
import Dashboard from './components/Dashboard';


function App() {
  let white = 'white';
  let black = 'black';
  const [firstPlayersTurn, setFirstPlayersTurn] = useState(true);

  const [board, setBoard] = useState([
    { number: 0, hasPiece: false, color: white, pieceColor: null, pieceIsKing: false },
    { number: 1, hasPiece: true, color: black, pieceColor: 'red', pieceIsKing: false },
    { number: 2, hasPiece: false, color: white, pieceColor: null, pieceIsKing: false },
    { number: 3, hasPiece: true, color: black, pieceColor: 'red', pieceIsKing: false },
    { number: 4, hasPiece: false, color: white, pieceColor: null, pieceIsKing: false },
    { number: 5, hasPiece: true, color: black, pieceColor: 'red', pieceIsKing: false },
    { number: 6, hasPiece: false, color: white, pieceColor: null, pieceIsKing: false },
    { number: 7, hasPiece: true, color: black, pieceColor: 'red', pieceIsKing: false },
    { number: 8, hasPiece: true, color: black, pieceColor: 'red', pieceIsKing: false },
    { number: 9, hasPiece: false, color: white, pieceColor: null, pieceIsKing: false },
    { number: 10, hasPiece: true, color: black, pieceColor: 'red', pieceIsKing: false },
    { number: 11, hasPiece: false, color: white, pieceColor: null, pieceIsKing: false },
    { number: 12, hasPiece: true, color: black, pieceColor: 'red', pieceIsKing: false },
    { number: 13, hasPiece: false, color: white, pieceColor: null, pieceIsKing: false },
    { number: 14, hasPiece: true, color: black, pieceColor: 'red', pieceIsKing: false },
    { number: 15, hasPiece: false, color: white, pieceColor: null, pieceIsKing: false },
    { number: 16, hasPiece: false, color: white, pieceColor: null, pieceIsKing: false },
    { number: 17, hasPiece: true, color: black, pieceColor: 'red', pieceIsKing: false },
    { number: 18, hasPiece: false, color: white, pieceColor: null, pieceIsKing: false },
    { number: 19, hasPiece: true, color: black, pieceColor: 'red', pieceIsKing: false },
    { number: 20, hasPiece: false, color: white, pieceColor: null, pieceIsKing: false },
    { number: 21, hasPiece: true, color: black, pieceColor: 'red', pieceIsKing: false },
    { number: 22, hasPiece: false, color: white, pieceColor: null, pieceIsKing: false },
    { number: 23, hasPiece: true, color: black, pieceColor: 'red', pieceIsKing: false },
    { number: 24, hasPiece: false, color: black, pieceColor: null, pieceIsKing: false },
    { number: 25, hasPiece: false, color: white, pieceColor: null, pieceIsKing: false },
    { number: 26, hasPiece: false, color: black, pieceColor: null, pieceIsKing: false },
    { number: 27, hasPiece: false, color: white, pieceColor: null, pieceIsKing: false },
    { number: 28, hasPiece: false, color: black, pieceColor: null, pieceIsKing: false },
    { number: 29, hasPiece: false, color: white, pieceColor: null, pieceIsKing: false },
    { number: 30, hasPiece: false, color: black, pieceColor: null, pieceIsKing: false },
    { number: 31, hasPiece: false, color: white, pieceColor: null, pieceIsKing: false },
    { number: 32, hasPiece: false, color: white, pieceColor: null, pieceIsKing: false },
    { number: 33, hasPiece: false, color: black, pieceColor: null, pieceIsKing: false },
    { number: 34, hasPiece: false, color: white, pieceColor: null, pieceIsKing: false },
    { number: 35, hasPiece: false, color: black, pieceColor: null, pieceIsKing: false },
    { number: 36, hasPiece: false, color: white, pieceColor: null, pieceIsKing: false },
    { number: 37, hasPiece: false, color: black, pieceColor: null, pieceIsKing: false },
    { number: 38, hasPiece: false, color: white, pieceColor: null, pieceIsKing: false },
    { number: 39, hasPiece: false, color: black, pieceColor: null, pieceIsKing: false },
    { number: 40, hasPiece: true, color: black, pieceColor: 'black', pieceIsKing: false },
    { number: 41, hasPiece: false, color: white, pieceColor: null, pieceIsKing: false },
    { number: 42, hasPiece: true, color: black, pieceColor: 'black', pieceIsKing: false },
    { number: 43, hasPiece: false, color: white, pieceColor: null, pieceIsKing: false },
    { number: 44, hasPiece: true, color: black, pieceColor: 'black', pieceIsKing: false },
    { number: 45, hasPiece: false, color: white, pieceColor: null, pieceIsKing: false },
    { number: 46, hasPiece: true, color: black, pieceColor: 'black', pieceIsKing: false },
    { number: 47, hasPiece: false, color: white, pieceColor: null, pieceIsKing: false },
    { number: 48, hasPiece: false, color: white, pieceColor: null, pieceIsKing: false },
    { number: 49, hasPiece: true, color: black, pieceColor: 'black', pieceIsKing: false },
    { number: 50, hasPiece: false, color: white, pieceColor: null, pieceIsKing: false },
    { number: 51, hasPiece: true, color: black, pieceColor: 'black', pieceIsKing: false },
    { number: 52, hasPiece: false, color: white, pieceColor: null, pieceIsKing: false },
    { number: 53, hasPiece: true, color: black, pieceColor: 'black', pieceIsKing: false },
    { number: 54, hasPiece: false, color: white, pieceColor: null, pieceIsKing: false },
    { number: 55, hasPiece: true, color: black, pieceColor: 'black', pieceIsKing: false },
    { number: 56, hasPiece: true, color: black, pieceColor: 'black', pieceIsKing: false },
    { number: 57, hasPiece: false, color: white, pieceColor: null, pieceIsKing: false },
    { number: 58, hasPiece: true, color: black, pieceColor: 'black', pieceIsKing: false },
    { number: 59, hasPiece: false, color: white, pieceColor: null, pieceIsKing: false },
    { number: 60, hasPiece: true, color: black, pieceColor: 'black', pieceIsKing: false },
    { number: 61, hasPiece: false, color: white, pieceColor: null, pieceIsKing: false },
    { number: 62, hasPiece: true, color: black, pieceColor: 'black', pieceIsKing: false },
    { number: 63, hasPiece: false, color: white, pieceColor: null, pieceIsKing: false }
  ]);
  const [history, setHistory] = useState([{ board: board, historyIndex: 0 }]);
  const [currentHistoryIndex, setCurrentHistoryIndex] = useState(0);
  // console.log(board);
  const attemptMove = (num, origin, playerOnesPiece) => {
    console.log(playerOnesPiece);
    if (num == origin) return;
    if ((playerOnesPiece === 'black' && firstPlayersTurn === false) || (playerOnesPiece === 'red' && firstPlayersTurn === true)) return;
    if (board[num].hasPiece === true) return;
    console.log(currentHistoryIndex);
    console.log(history);
    if (currentHistoryIndex !== history.length - 1 && history.length > 0) return;
    // console.log(num);
    // console.log(origin);
    setFirstPlayersTurn(!firstPlayersTurn);
    setBoard(board.map((item, index) => index == num ? { ...item, hasPiece: true, pieceColor: board[origin].pieceColor } : index == origin ? { ...item, hasPiece: false, pieceColor: null } : item))
    setHistory([...history, { board: board.map((item, index) => index == num ? { ...item, hasPiece: true, pieceColor: board[origin].pieceColor } : index == origin ? { ...item, hasPiece: false, pieceColor: null } : item), historyIndex: currentHistoryIndex + 1 }]);
    setCurrentHistoryIndex(currentHistoryIndex + 1);

  }
  const traverseHistory = (direction) => {
    if (history.length === 1) return;
    console.log(direction);
    // console.log(currentHistoryIndex);
    console.log(history);
    let historyClone = { historyIndex: currentHistoryIndex, history: history };
    if (direction == 'left' && currentHistoryIndex > 0) {
      setBoard(history[currentHistoryIndex - 1].board);
      setCurrentHistoryIndex(currentHistoryIndex - 1);

    }
    if (direction == 'present') {
      setCurrentHistoryIndex(history.length - 1);
      setBoard(history[history.length - 1].board);
    }
    if (direction == 'right' && currentHistoryIndex < history.length - 1) {
      setBoard(history[currentHistoryIndex + 1].board);
      setCurrentHistoryIndex(currentHistoryIndex + 1);
    }

    if (direction == 'beginning') {
      setBoard(history[0].board);
      setCurrentHistoryIndex(0);
    }
  }

  return (
    <div className="App">
      <h2 className='header'>React Checkers</h2>
      <Board boardState={board} setBoard={attemptMove} />
      <Dashboard player={firstPlayersTurn} viewHistory={traverseHistory} />
    </div>
  );
}

export default App;
