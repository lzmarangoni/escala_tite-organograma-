import "./Input.css";

export const Input =(props)=>{
    return(
        <div className="input-players">
            <label>
                {props.label}
            </label>
            <input placeholder={props.placeholder}/>
        </div>
    )
}

export default Input