import Token from './TokenPiece';
const Square = ({solid, number, isPopulated}) => {
    const drop=(event)=>{
        if(solid){
        event.preventDefault();
        let data = event.dataTransfer.getData("text");
        event.target.appendChild(document.getElementById(data))
        }
    }
    const allowDrop=(event)=>{
        if(solid){
        event.preventDefault();
        }
    }
    let bg = solid ? 'black' : 'white';
    let textColor = solid ? 'white' : 'black'
    
    return (
        <div id={'square' + number} onDragOver={(e)=>allowDrop(e)} onDrop={(event)=>drop(event)} className = 'square' onClick = {()=>{console.log(isPopulated)}} style={{backgroundColor: bg, color: textColor }} >
            {/* {number} */}
            {isPopulated ? <Token id={number}/> : null}
        </div>
    )
}

export default Square
