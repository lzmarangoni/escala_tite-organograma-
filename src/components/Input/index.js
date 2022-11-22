import "./Input.css";

export const Input =(props)=>{
    return(
        <div className="input-players">
            <label>
                {props.label}
            </label>
            <input/>
        </div>
    )
}

export default Input