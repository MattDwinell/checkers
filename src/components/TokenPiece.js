const TokenPiece = ({id, setBoard, pieceColor, pieceIsKing, styleInfo}) => {
    const drag = (event)=>{
         event.dataTransfer.setData("text", id);
         event.dataTransfer.setData("color", pieceColor);
    }
    let className;
    if(pieceColor === 'black') className = 'p1';
    if(pieceColor === 'red') className = 'p2';
    if(pieceIsKing) className += ' king';
    console.log(styleInfo.shape);
    if(styleInfo.shape === 'circle') className += ' piece-circle';
    else if(styleInfo.shape === 'square') className += ' piece-square';
  return (
    <div className={`piece ${className}`} id={id} draggable="true" onDragStart={(event) => drag(event)} >
    {pieceIsKing && (<svg className='king-icon' width="184.099px" height="184.099px" viewBox="0 0 184.099 184.099">
        <path d="M182.23,54.814c-1.675-1.258-3.982-1.245-5.633,0.027l-48.457,36.991L96.337,19.979c-1.504-3.386-7.055-3.386-8.564,0
            l-32.175,72.68L7.563,54.878c-1.659-1.297-3.979-1.333-5.669-0.088c-1.696,1.254-2.338,3.492-1.577,5.443l33.372,86.229
            c0.691,1.803,2.43,2.984,4.357,2.984h108.009c1.942,0,3.666-1.176,4.36-2.984l33.368-86.229
            C184.538,58.282,183.905,56.068,182.23,54.814z M142.852,140.099h-101.6L15.193,72.774l39.357,30.948
            c1.13,0.895,2.606,1.218,4.022,0.853c1.404-0.342,2.564-1.315,3.151-2.643l30.333-68.516l29.928,67.626
            c0.591,1.304,1.729,2.277,3.118,2.631c1.388,0.365,2.861,0.061,4.006-0.816l39.981-30.521L142.852,140.099z M150.244,161.983
            c0,2.582-2.095,4.677-4.677,4.677H38.526c-2.582,0-4.676-2.095-4.676-4.677s2.095-4.677,4.676-4.677h107.041
            C148.155,157.307,150.244,159.401,150.244,161.983z"/>
      </svg>)}  
    </div>
  )
}

export default TokenPiece
