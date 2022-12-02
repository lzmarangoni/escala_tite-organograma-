import './Player.css'

const Player = (props)=>{
    return(
        <section className='player' style={{top: props.yAxis, right:props.xAxis}}>
            <img src="https://avatars.githubusercontent.com/u/98007645?v=4"/>
            <h1>Luiz</h1>
            <h3>{props.position}</h3>
        </section>
    )
}

export default Player