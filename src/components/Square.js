import Token from './TokenPiece';
const Square = ({color, number, populated, setBoard, pieceColor}) => {
    // console.log(color);
    // const drop=(event)=>{
    //     if(color == 'black'){
    //     event.preventDefault();
    //     let data = event.dataTransfer.getData("text");
    //     event.target.appendChild(document.getElementById(data))
    //     // setBoard(number);
    //     }
    // }
    function drop(event){
        console.log(event.target.id);
        console.log(event.dataTransfer.getData('text'));
        setBoard(event.target.id, event.dataTransfer.getData('text'));
    }
    const allowDrop=(event)=>{
        if(color== 'black'){
        event.preventDefault();
        
        }
    }
  //  let bg = solid ? 'black' : 'white';
    let textColor = color === 'brown' ? 'white' : 'black'
    
    return (
        <div id={'square' + number} draggable='false' onDragOver={(e)=>allowDrop(e)} onDrop={(event)=>drop(event)} className = 'square' onClick = {()=>{console.log(populated)}} style={{backgroundColor: color, color: textColor }} >
            {/* {number} */}
            {populated ? <Token pieceColor = {pieceColor} id={number} setBoard = {setBoard}/> : null}
        </div>
    )
}

export default Square
