import './App.css';
import Board from './components/Board'
import {useState} from 'react'


function App() {
  let white = 'white';
  let black = 'black';
  const [board, setBoard] = useState([
    {number: 0, hasPiece: false, color:white, pieceColor:null},
    {number: 1, hasPiece: true, color:black, pieceColor: 'red'},
    {number: 2, hasPiece: false, color:white , pieceColor:null},
    {number: 3, hasPiece: true, color:black, pieceColor: 'red'},
    {number: 4, hasPiece: false, color:white , pieceColor:null},
    {number: 5, hasPiece: true, color:black, pieceColor: 'red'},
    {number: 6, hasPiece: false, color:white, pieceColor:null},
    {number: 7, hasPiece: true, color:black, pieceColor: 'red'},
    {number: 8, hasPiece: true, color:black, pieceColor: 'red'},
    {number: 9, hasPiece: false, color:white, pieceColor:null},
    {number: 10, hasPiece: true, color:black, pieceColor: 'red'},
    {number: 11, hasPiece: false, color:white, pieceColor:null},
    {number: 12, hasPiece: true, color:black, pieceColor: 'red'},
    {number: 13, hasPiece: false, color:white, pieceColor:null},
    {number: 14, hasPiece: true, color:black, pieceColor: 'red'},
    {number: 15, hasPiece: false, color:white, pieceColor:null},
    {number: 16, hasPiece: false, color:white, pieceColor:null},
    {number: 17, hasPiece: true, color:black, pieceColor: 'red'},
    {number: 18, hasPiece: false, color:white, pieceColor:null},
    {number: 19, hasPiece: true, color:black, pieceColor: 'red'},
    {number: 20, hasPiece: false, color:white, pieceColor:null},
    {number: 21, hasPiece: true, color:black, pieceColor: 'red'},
    {number: 22, hasPiece: false, color:white, pieceColor:null},
    {number: 23, hasPiece: true, color:black, pieceColor: 'red'},
    {number: 24, hasPiece: false, color:black, pieceColor:null},
    {number: 25, hasPiece: false, color:white, pieceColor:null},
    {number: 26, hasPiece: false, color:black, pieceColor:null},
    {number: 27, hasPiece: false, color:white, pieceColor:null},
    {number: 28, hasPiece: false, color:black, pieceColor:null},
    {number: 29, hasPiece: false, color:white, pieceColor:null},
    {number: 30, hasPiece: false, color:black, pieceColor:null},
    {number: 31, hasPiece: false, color:white, pieceColor:null},
    {number: 32, hasPiece: false, color:white, pieceColor:null},
    {number: 33, hasPiece: false, color:black, pieceColor:null},
    {number: 34, hasPiece: false, color:white, pieceColor:null},
    {number: 35, hasPiece: false, color:black, pieceColor:null},
    {number: 36, hasPiece: false, color:white, pieceColor:null},
    {number: 37, hasPiece: false, color:black, pieceColor:null},
    {number: 38, hasPiece: false, color:white, pieceColor:null},
    {number: 39, hasPiece: false, color:black, pieceColor:null},
    {number: 40, hasPiece: true, color:black, pieceColor: 'black'},
    {number: 41, hasPiece: false, color:white, pieceColor:null},
    {number: 42, hasPiece: true, color:black, pieceColor: 'black'},
    {number: 43, hasPiece: false, color:white, pieceColor:null},
    {number: 44, hasPiece: true, color:black, pieceColor: 'black'},
    {number: 45, hasPiece: false, color:white, pieceColor:null},
    {number: 46, hasPiece: true, color:black, pieceColor: 'black'},
    {number: 47, hasPiece: false, color:white, pieceColor:null},
    {number: 48, hasPiece: false, color:white, pieceColor:null},
    {number: 49, hasPiece: true, color:black, pieceColor: 'black'},
    {number: 50, hasPiece: false, color:white, pieceColor:null},
    {number: 51, hasPiece: true, color:black, pieceColor: 'black'},
    {number: 52, hasPiece: false, color:white, pieceColor:null},
    {number: 53, hasPiece: true, color:black, pieceColor: 'black'},
    {number: 54, hasPiece: false, color:white, pieceColor:null},
    {number: 55, hasPiece: true, color:black, pieceColor: 'black'},
    {number: 56, hasPiece: true, color:black, pieceColor: 'black'},
    {number: 57, hasPiece: false, color:white, pieceColor:null},
    {number: 58, hasPiece: true, color:black, pieceColor: 'black'},
    {number: 59, hasPiece: false, color:white, pieceColor:null},
    {number: 60, hasPiece: true, color:black, pieceColor: 'black'},
    {number: 61, hasPiece: false, color:white, pieceColor:null},
    {number: 62, hasPiece: true, color:black, pieceColor: 'black'},
    {number: 63, hasPiece: false, color:white, pieceColor:null}
  ]);
// console.log(board);
const attemptMove = (num, origin) =>{
  if(num == origin) return;
  console.log(num);
  console.log(origin);
  if(board[num.replace('square', '')].hasPiece == false){
    setBoard(board.map((item, index)=> index == num.replace('square', '') ? {hasPiece: true, number: index, color: item.color, pieceColor:  board[origin].pieceColor} : index == origin ? {hasPiece: false, number: index, color: item.color, pieceColor: null} : item))
  }
}
  return (
    <div className="App">
     <h2 className = 'header text-primary'>React Checkers</h2>
<Board boardState = {board} setBoard = {attemptMove}/>
    </div>
  );
}

export default App;
