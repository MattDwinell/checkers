//import woodBackground from './../images/wood_background_one.jpg';
import MoveArrows from './MoveArrows'; 
import PlayAgain from './PlayAgain';
const Dashboard = ({player, viewHistory, gameOver, resetGame}) => {
    // style = {{backgroundImage: `url(${woodBackground})`}}
    console.log(gameOver);
    return (
        <div className = 'dashboard'  >
           <span className = 'player-info grid-item'>{gameOver ? `Game over! ` : player ? `Player one's turn` : `Player two's turn`} <span className ={player ? 'p1 ex' : 'p2 ex'} ></span></span> 
           <MoveArrows viewHistory = {viewHistory} />
           <PlayAgain resetGame = {resetGame} gameOver = {gameOver}/>
        </div>
    )
}

export default Dashboard
