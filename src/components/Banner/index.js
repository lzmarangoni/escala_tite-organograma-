import "./Banner.css"
import logoTop from '../../img/logo-topo.png'
export const Banner = (props)=>{
    return(
        <div className="banner">
            <img src={logoTop} />
            
            <h1>{props.title}</h1>
            
            
        </div>
    )
}
export default Banner
