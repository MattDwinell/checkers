const PlayAgain = ({gameOver, resetGame}) => {
    let display = gameOver ? 'inherit' : 'none';
    // style={{display: display}}
    return (
        <button onClick = {resetGame} className = 'play-again' >
            {gameOver ? `Play Again!` : `Restart Game`}
        </button>
    )
}

export default PlayAgain
