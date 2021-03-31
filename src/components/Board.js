import BoardRow from './BoardRow';
const Board = () => {
    const rowCount = [0,1,2,3,4,5,6,7]
    return (<div className = 'board'>
       { rowCount.map((num, index)=><BoardRow rowNum = {num} key={index}/>)}
                
        </div>
    )
}

export default Board
