import './Player.css'

const Player = (props)=>{
    return(
        <section className='player' >
            <img src={props.image}/>
            <h1>{props.name}</h1>
            
        </section>
    )
}

export default Player