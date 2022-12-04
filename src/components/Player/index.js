import './Player.css'

const Player = ({image ,name})=>{
    return(
        <section className='player' >
            <img src={image}/>
            <h1>{name}</h1>
            
        </section>
    )
}

export default Player