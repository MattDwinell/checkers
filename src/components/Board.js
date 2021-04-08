import BoardRow from './BoardRow';
import PropTypes from 'prop-types';
import Square from './Square';
const Board = ({boardState, setBoard}) => {
    const rowCount = [0,1,2,3,4,5,6,7]
    const startingNums = [1,3,5,7,8,10,12,14,17,19,21,23,56,58,60,62,49,51,53,55,40,42,44,46];
    return (<div className = 'board'>
      {/* { rowCount.map((num, index)=><BoardRow startingNums = {startingNums} rowNum = {num} key={index}/>)} */}
                {boardState.map((num, index)=><Square number={num.number} pieceColor = {num.pieceColor} setBoard = {setBoard} color={num.color} populated = {num.hasPiece} rowNum = { Math.floor(num.number / 8)} key={index} />)}
        </div>
    )
}
export default Board
