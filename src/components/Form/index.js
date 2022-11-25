
import { Button } from "../Button";
import Input from "../Input";
import { List } from "../List";
import "./Form.css";

export const Form = (props)=>{
    const positions = ['goleiro', 'zagueiro'];
    function savePlayer(e){
        e.preventDefault();
        console.log("formulario salbo")
      }
    
    return(
        <div className="form-players">
            <form onSubmit={savePlayer} >
            <Input label="Nome do Jogador"/>
            <Input label="Foto"/>
            <List listName="Posição" items= {positions} />
            <Button nameButton="Escalar"/>
            </form>
        </div>
    )
}

export default Form;