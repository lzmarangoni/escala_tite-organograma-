import Player from '../Player';
import './Position.css';

const Position = (props)=>{
    return(
       <section className='position' style={{top: props.yAxis, right:props.xAxis}}>
             
              {props.player.map(player => <Player key={player.name} name={player.name} image={player.image}/>)}
              <h3>{props.position}</h3>

        </section>
        
    ) 
}

export default Position;