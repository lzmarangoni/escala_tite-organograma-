
import "./Form.css";

export const Form = (props)=>{
    return(
        <div className="form-players">
            <form >
                {props.children}
            </form>
        </div>
    )
}

export default Form;