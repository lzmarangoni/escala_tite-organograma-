
import "./Input.css";

export const Input =(props)=>{
   
    
    
    const onTip = (e)=>{
        props.changeValue(e.target.value)
        console.log(props.value)
    }
    
    return(
        <div className="input-players">
            <label>
                {props.label}
            </label>
            <input value={props.value} onChange={onTip} placeholder={props.placeholder}/>
        </div>
    )
}

export default Input

