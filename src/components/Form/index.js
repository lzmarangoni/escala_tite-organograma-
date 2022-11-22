
import "./Form.css";

export const Form = (props)=>{
    function savePlayer(e){
        e.preventDefault();
        console.log("formulario salbo")
      }
    
    return(
        <div className="form-players">
            <form onSubmit={savePlayer} >
                {props.children}
            </form>
        </div>
    )
}

export default Form;