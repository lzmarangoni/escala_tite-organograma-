import "./Button.css"

export const Button = (props)=>{
    return(
        <div className="buttonForm">
            <button>
                {props.nameButton}
            </button>
        </div>
    )
}