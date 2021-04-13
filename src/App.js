import './App.css';
import Board from './components/Board'
import { useState } from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Dashboard from './components/Dashboard';
import CalculateLegalMoves from './Utils/CalculateLegalMoves';
import CalculateGameStatus from './Utils/CalculateGameStatus';
import GameEndModal from './components/GameEndModal';
import originalBoard from './Utils/OriginalBoard';
import Footer from './components/Footer';
import About from './components/About';
import TopNav from './components/TopNav';
import Preferences from './components/Preferences';

function App() {
  let white = 'white';
  let black = 'black';
  const [firstPlayersTurn, setFirstPlayersTurn] = useState(true);
  const [board, setBoard] = useState(originalBoard);
  const [history, setHistory] = useState([{ board: board, historyIndex: 0 }]);
  const [currentHistoryIndex, setCurrentHistoryIndex] = useState(0);
  const [allowedMultiJumps, setAllowedMultiJumps] = useState([]);
  const [gameOver, setGameOver] = useState({ gameOver: false, winner: null });
  const attemptMove = (num, origin, playerOnesPiece) => {
    if (num === origin || !num) return;
    if ((playerOnesPiece === 'black' && firstPlayersTurn === false) || (playerOnesPiece === 'red' && firstPlayersTurn === true)) return;
    if (board[num].hasPiece === true) return;
    if (allowedMultiJumps.length > 0 && !allowedMultiJumps.includes(parseInt(num, 10))) return;
    if (currentHistoryIndex !== history.length - 1 && history.length > 0) return;
    let res = CalculateLegalMoves(parseInt(num, 10), parseInt(origin, 10), board, firstPlayersTurn);
    if (!res.valid) return;
    if (res.multiJump) {
      setAllowedMultiJumps(res.multiJumpOptions);
    } else {
      setFirstPlayersTurn(!firstPlayersTurn);
      setAllowedMultiJumps([]);
    }

    setBoard(board.map((item, index) => index == num ? { ...item, hasPiece: true, pieceColor: board[origin].pieceColor, pieceIsKing: (res.isKing) } : index == origin ? { ...item, hasPiece: false, pieceColor: null, pieceIsKing: false } : (res.jump == true && index === res.jumpedSquare) ? { ...item, hasPiece: false, pieceColor: null, pieceIsKing: false } : item))

    setHistory([...history, { board: board.map((item, index) => index == num ? { ...item, hasPiece: true, pieceColor: board[origin].pieceColor, pieceIsKing: (res.isKing) } : index == origin ? { ...item, hasPiece: false, pieceColor: null, pieceIsKing: false } : res.jump === true && index == res.jumpedSquare ? { ...item, hasPiece: false, pieceColor: null, pieceIsKing: false } : item), historyIndex: currentHistoryIndex + 1 }]);
    setCurrentHistoryIndex(currentHistoryIndex + 1);
    let gameStatusCheck = CalculateGameStatus(board.map((item, index) => index == num ? { ...item, hasPiece: true, pieceColor: board[origin].pieceColor, pieceIsKing: (res.isKing) } : index == origin ? { ...item, hasPiece: false, pieceColor: null, pieceIsKing: false } : (res.jump == true && index === res.jumpedSquare) ? { ...item, hasPiece: false, pieceColor: null, pieceIsKing: false } : item), !firstPlayersTurn);
    if (gameStatusCheck.gameOver === true) {
      setGameOver(gameStatusCheck);
    }

  }
  const traverseHistory = (direction) => {
    if (history.length === 1) return;
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
  const resetGame = ()=>{
    console.log('reset game');
    setFirstPlayersTurn(true);
    setBoard(originalBoard);
    setHistory([{ board: originalBoard, historyIndex: 0 }]);
    setCurrentHistoryIndex(0);
    setAllowedMultiJumps([]);
    setGameOver({ gameOver: false, winner: null });
    let hideModal = document.getElementsByClassName('end-modal')[0];
    hideModal.style.visibility = 'visible';
  }


  return (
    <Router>
      <div className="App">
        <TopNav/>
      <Route path='/' exact render={(props)=>(
      <>
           <Board boardState={board} setBoard={attemptMove} />
      <Dashboard resetGame = {resetGame} player={firstPlayersTurn} gameOver={gameOver.gameOver} viewHistory={traverseHistory} />
      <GameEndModal resetGame = {resetGame} gameOver={gameOver} />
      
      </>)}/>
    <Route path ='/about' component = {About}/> 
    <Route path='/preferences' component={Preferences}/>
      

      <Footer />
    </div>
    </Router>
  );
}

export default App;
