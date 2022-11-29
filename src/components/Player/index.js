import './Player.css'

const Player = (props)=>{
    return(
        <section>
            <img src={props.img}/>
            <h1>{props.name}</h1>
            <h3>{props.position}</h3>
        </section>
    )
}

export default Player