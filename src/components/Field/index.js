import './Field.css'
import fieldImage from '../../img/campo.png'

const Field = (props)=>{
    return(
        <section className='field'>
           <img src={fieldImage}/>
        </section>
    )
}

export default Field