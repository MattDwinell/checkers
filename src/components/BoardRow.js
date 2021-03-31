import Square from './Square';
const BoardRow = ({rowNum, startingNums}) => {
    
   const firstSquareBlack = (rowNum % 2 !== 0);
   const rowCount = [firstSquareBlack, ! firstSquareBlack,firstSquareBlack, ! firstSquareBlack,firstSquareBlack, ! firstSquareBlack,firstSquareBlack, !firstSquareBlack];
    return (
        <div className = 'board-row'>
            {rowCount.map((value, index)=><Square key={index} isPopulated = {startingNums.includes(rowNum * 8 + index) ? true: false} number={rowNum * 8 + index}  solid= {value  } />)}
        </div>
    )
}

export default BoardRow
