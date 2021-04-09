//import woodBackground from './../images/wood_background_one.jpg';
import MoveArrows from './MoveArrows'; 
const Dashboard = ({player}) => {
    // style = {{backgroundImage: `url(${woodBackground})`}}
    return (
        <div className = 'dashboard'  >
           <span className = 'player-info grid-item'>{player ? `Player one's turn` : `Player two's turn`} <span className ={player ? 'p1 ex' : 'p2 ex'} >&nbsp;</span></span> 
           <MoveArrows />
        </div>
    )
}

export default Dashboard
