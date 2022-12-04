import "./List.css"

export const List =(props)=>{
        const selectOption = (e)=>{
            props.changeValue(e.target.value)
            
        }
    return(
        <div className="list">
            <label>{props.listName}</label>
            <select value={props.value} onChange={selectOption} >
                <option value={''}></option>
                {props.items.map(item => <option key={item}>{item}</option>)}
                
            </select>
        </div>
    )
}