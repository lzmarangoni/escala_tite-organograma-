
import { useState } from "react";
import { Button } from "../Button";
import Input from "../Input";
import { List } from "../List";
import "./Form.css";

export const Form = (props)=>{
    const positions = [' ','goleiro', 'zagueiro'];
    
    function savePlayer(e){
        e.preventDefault();
        props.newPlayer({
            InputPlayer,
            InputImage,
            playerList
        })
        
        
      }

   
    const [InputPlayer , setInputPlayer] = useState("")
    const [InputImage, setInputImage] = useState("")
    const [playerList, SetPlayerList] = useState(" ")
   
    
    return(
        <div className="form-players">
            <form onSubmit={savePlayer} >
                
                <Input 
                    placeholder="Canarinho Pistola"
                    value={InputPlayer} 
                    changeValue={setInputPlayer} 
                    label="Nome do Jogador"/>
                <Input 
                    placeholder="https://..."
                    value={InputImage} 
                    changeValue={setInputImage} 
                    label="Foto"/>
                <List 
                    listName="Posição" 
                    items= {positions}
                    value = {playerList}
                    changeValue = {playerList => SetPlayerList(playerList)} />
                <Button nameButton="Escalar"/>
            </form>
        </div>
    )
}

export default Form;