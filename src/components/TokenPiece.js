const TokenPiece = ({id, setBoard, pieceColor}) => {
    const allowDrop=(event)=>{
        event.preventDefault();
    }
    const drag = (event)=>{
         event.dataTransfer.setData("text", id);
         event.dataTransfer.setData("color", pieceColor);
        // console.log(event.target.id);
    }
    const drop=(event)=>{
        event.preventDefault();
        setBoard(event.target.id, id, pieceColor == 'black');
       // let data = event.dataTransfer.getData("text");
       // event.target.appendChild(document.getElementById(data))
    }
    let className;
    if(pieceColor == 'black') className = 'p1';

    if(pieceColor == 'red') className = 'p2';
// console.log(className);
    return (
        <div className = {`piece ${className}`} id={id} draggable="true" onDragStart = {(event)=>drag(event)} >
          
        </div>
    )
}

export default TokenPiece
