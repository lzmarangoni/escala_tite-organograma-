import "./List.css"

export const List =(props)=>{
    return(
        <div className="list">
            <label>{props.listName}</label>
            <select>
                {props.items.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}