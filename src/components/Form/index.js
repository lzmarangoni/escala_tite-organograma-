
import { useState } from "react";
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
    const [InputPlayer , setInputPlayer] = useState("Canarinho Pistola")
    const [InputImage, setInputImage] = useState("https...")
    
    return(
        <div className="form-players">
            <form onSubmit={savePlayer} >
                <Input value={InputPlayer} changeValue={setInputPlayer} label="Nome do Jogador"/>
                <Input value={InputImage} changeValue={setInputImage} label="Foto"/>
                <List listName="Posição" items= {positions} />
                <Button nameButton="Escalar"/>
            </form>
        </div>
    )
}

export default Form;