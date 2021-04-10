import Token from './TokenPiece';
const Square = ({color, number, populated, setBoard, pieceColor, pieceIsKing}) => {
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
      //  console.log(event.target.id);
      //  console.log(event.dataTransfer.getData('text'));
        // console.log(event.dataTransfer.getData('color'));
        setBoard(event.target.id.replace('square', ''), event.dataTransfer.getData('text'),event.dataTransfer.getData('color') );
    }
    const allowDrop=(event)=>{
        if(color === 'black'){
        event.preventDefault();
        
        }
    }
    let squareColor = color ==='black' ? '#954535': '#d2a56d' ;
  //  let bg = solid ? 'black' : 'white';
    let textColor = color === 'black' ? 'white' : 'black';
    
    return (
        <div id={'square' + number} draggable='false' onDragOver={(e)=>allowDrop(e)} onDrop={(event)=>drop(event)} className = 'square' onClick = {()=>{console.log(populated)}} style={{backgroundColor: squareColor, color: textColor }} >
            {/* { number } */}
            {populated ? <Token pieceIsKing ={pieceIsKing}  pieceColor = {pieceColor} id={number} setBoard = {setBoard}/> : null}
        </div>
    )
}

export default Square
