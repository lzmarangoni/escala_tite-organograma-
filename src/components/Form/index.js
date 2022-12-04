
import { useState } from "react";
import { Button } from "../Button";
import Input from "../Input";
import { List } from "../List";
import "./Form.css";

export const Form = (props)=>{
    
    
    function savePlayer(e){
        e.preventDefault();
        props.newPlayer({
            name,
            image,
            position
        })
        setname('')
        setimage('')
        setPosition('')
        
      }

   
    const [name , setname] = useState("")
    const [image, setimage] = useState("")
    const [position, setPosition] = useState("Goleiro")
   
    
    return(
        <div className="form-players">
            <form onSubmit={savePlayer} >
                
                <Input 
                    placeholder="Canarinho Pistola"
                    value={name} 
                    changeValue={setname} 
                    label="Nome do Jogador"/>
                <Input 
                    placeholder="https://..."
                    value={image} 
                    changeValue={setimage} 
                    label="Foto"/>
                <List 
                    listName="Posição" 
                    items= {props.items}
                    value = {position}
                    changeValue = {position => setPosition(position)} />
                <Button nameButton="Escalar"/>
            </form>
        </div>
    )
}

export default Form;