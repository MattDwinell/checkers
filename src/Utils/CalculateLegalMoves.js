const CalculateLegalMoves = (goalSquare, startSquare, board, playerOne) => {
    let corners = [1, 3, 5, 7, 8, 23, 24, 39, 40, 55, 56, 58, 60, 62];
    let edges  = [1,3,5,7,56,58,60,62];
    let singleJumpOption = [];
    let jumpedSquare = [];
    let resObject = { valid: false, jump: false, jumpedSquare: null, multiJump: false, multiJumpOptions:[], isKing: board[startSquare].pieceIsKing };
    let baseMoveLeft, baseMoveRight, jumpLeft, jumpRight;
    let options = [];
    if (playerOne) {
        baseMoveLeft = -9
        baseMoveRight = -7;
        jumpLeft = -18;
        jumpRight = -14;
    } else {
        baseMoveLeft = 7;
        baseMoveRight = 9;
        jumpLeft = 14;
        jumpRight = 18;
    }

    if(startSquare % 8 !== 7) options.push(startSquare + baseMoveRight);
    if(startSquare % 8 !== 0) options.push(startSquare + baseMoveLeft);
    //jump logic
    if(! corners.includes(startSquare + baseMoveLeft)){
        //check if the piece in the middle is an opponent's piece
        // console.log('middle square info');
        // console.log(board[startSquare + baseMoveLeft]);
        if(startSquare + baseMoveLeft >= 0 && startSquare + baseMoveLeft < 64 && board[startSquare + baseMoveLeft].hasPiece && ((playerOne && board[startSquare + baseMoveLeft].pieceColor === 'red') || (!playerOne && board[startSquare + baseMoveLeft].pieceColor === 'black') ) && board[startSquare + jumpLeft].hasPiece === false){
            singleJumpOption.push(startSquare + jumpLeft);
            jumpedSquare.push(startSquare + baseMoveLeft);
        }
    }
    if( ! corners.includes(startSquare + baseMoveRight)){
        if( startSquare + baseMoveLeft >= 0 && startSquare + baseMoveLeft < 64 && board[startSquare + baseMoveRight].hasPiece && ((playerOne && board[startSquare + baseMoveRight].pieceColor === 'red') || (!playerOne && board[startSquare + baseMoveRight].pieceColor === 'black') ) && board[startSquare + jumpRight].hasPiece === false){
            singleJumpOption.push(startSquare + jumpRight);
            jumpedSquare.push(startSquare + baseMoveRight);
        }
    }

    if (options.includes(goalSquare)) {
        // console.log('valid');
        resObject.valid = true;

        
    }else if(singleJumpOption.includes(goalSquare)){
        resObject.valid = true;
        resObject.jumpedSquare = jumpedSquare[singleJumpOption.indexOf(goalSquare)];
        resObject.jump = true;
        //check if another jump is possible. if so, return multi-jump set to true and don't change the turn.
        //checking for left multi jump, then right multijump
        if(goalSquare % 8 != 0   && goalSquare + jumpLeft >= 0 && goalSquare + jumpLeft <= 63 && ! corners.includes(goalSquare + baseMoveLeft) && board[goalSquare + jumpLeft].hasPiece === false && board[goalSquare + baseMoveLeft].hasPiece === true && ((board[goalSquare + baseMoveLeft].pieceColor ==='red' && playerOne == true)||(board[goalSquare + baseMoveLeft].pieceColor == 'black' && ! playerOne)) ){
            resObject.multiJump = true;
            resObject.multiJumpOptions.push(goalSquare + jumpLeft );
        }
        if(goalSquare % 8 != 7   && goalSquare + jumpRight >= 0 && goalSquare + jumpRight <= 63 && ! corners.includes(goalSquare + baseMoveRight) && board[goalSquare + jumpRight].hasPiece === false && board[goalSquare + baseMoveRight].hasPiece === true && ((board[goalSquare + baseMoveRight].pieceColor ==='red' && playerOne)||(board[goalSquare + baseMoveRight].pieceColor == 'black' && ! playerOne)) ){
            resObject.multiJump = true;
            resObject.multiJumpOptions.push(goalSquare + jumpRight );
        }

    } else {
        console.log('invalid');
        console.log(options);
        console.log(goalSquare);
        console.log(options.includes(goalSquare));
    }
    if(resObject.valid && edges.includes(goalSquare) && ((playerOne && goalSquare % 2 === 1 || (!playerOne && goalSquare % 2 === 0)))){
        resObject.isKing = true;
        console.log('king me');
    }else if(playerOne){
        console.log(resObject.valid);
        console.log(edges.includes(goalSquare));
        console.log(((playerOne && goalSquare % 2 === 1 || (!playerOne && goalSquare % 2 === 0))));
    }
    return resObject;
    // console.log(board);
    // console.log(playerOne);
    // console.log(goalSquare);
    // console.log(startSquare);
}

export default CalculateLegalMoves
