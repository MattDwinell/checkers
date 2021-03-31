import Square from './Square';
const BoardRow = ({rowNum}) => {
    
   const firstSquareBlack = (rowNum % 2 != 0);
   const rowCount = [firstSquareBlack, ! firstSquareBlack,firstSquareBlack, ! firstSquareBlack,firstSquareBlack, ! firstSquareBlack,firstSquareBlack, !firstSquareBlack];
    return (
        <div className = 'board-row'>
            {rowCount.map((value, index)=><Square  solid= {value  } />)}
        </div>
    )
}

export default BoardRow
